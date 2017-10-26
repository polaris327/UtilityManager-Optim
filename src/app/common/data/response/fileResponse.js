import { InjectableClass } from '@fino/lib-injection';

const filenameFilterRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;

export class FileResponse extends InjectableClass {
  constructor(FileSaver, $window) {
    'ngInject';
    super({ FileSaver, $window });
  }

  static get transform() {
    return (response) => {
      return {
        file: response.data,
        name: this.filterFilenameFrom(response.headers)
      };
    };
  }

  static filterFilenameFrom(headers) {
    try {
      let contentDisposition = headers('content-disposition');
      return filenameFilterRegex
        .exec(contentDisposition)[0]
        .replace('filename=', '')
        .replace(/\"/g,'');
    }
    catch(e) {
      return 'warrant.pdf';
    }
  }

  redirect(response) {
    const { location } = response.data;
    this.$window.open(location, '_blank');
    return response;
  }

  saveAs(data, type = 'application/pdf') {
    const { file, name } = data;
    const blob = new Blob([file], { type });
    this.FileSaver.saveAs(blob, name);
  }
}
