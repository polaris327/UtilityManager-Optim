export function setCustomScriptUrl(environment, fileExtension = 'js') {
  const { baseUrl, custom } = environment;
  environment.customScriptUrl = `${baseUrl}${custom}.bundle.${fileExtension}`;
  return environment.customScriptUrl;
}
