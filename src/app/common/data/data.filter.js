export const splitFilter = () => {
  return (input, splitChar) => {
    return input.split(splitChar);
  };
};

export const splitNestedByNewlineFilter = () => {
  return (input) => {
    // Join input array, split integrated arrays again and join by newline
    // e.g.: "[['hallo'],['welt']]" --> "hallo\nwelt"
    return (input || '').join(' ').split(',').join('\n');
  };
};

export const formatIban = () => {
  return (value, highlight) => {
    // Brackets were set incorrect. Sentry groups 353 - 357.
    if (value && (!isNaN(parseInt(value)) || value.slice(0, 2) === 'DE')) {
      // Check if value exists and divide each four group by space sign.
      let formatted = (value && (value + '').replace(/\s/g, '').match(/.{1,4}/g).join(' '));

      if (highlight) {
        // Check if input is only account number. [12 = 10 for account number + 2 for spaces between every four digits.]
        if (formatted.length <= 12) {
          // Return bold account number.
          return ('<b>' + formatted + '</b>');
        }

        // At this point it seems like an iban.
        // Return iban with bold account number.
        return (formatted.slice(0, 15) + '<b>' + formatted.slice(15) + '</b>');
      }
      return formatted;
    }
    return value;
  };
};
