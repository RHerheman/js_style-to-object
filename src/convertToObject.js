'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  sourceString
    .split(';')
    .map((s) => s.trim())
    .filter(Boolean)
    .forEach((declaration) => {
      const [property, value] = declaration.split(':').map((s) => s.trim());

      if (property && value) {
        result[property] = value;
      }
    });

  return result;
}

module.exports = convertToObject;
