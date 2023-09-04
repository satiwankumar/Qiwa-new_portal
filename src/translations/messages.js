const enMessages = require("./locale/en.json");
const arMessages = require("./locale/ar.json");

const keysToValues = (source) => {
  return Object.keys(source).reduce((accumulated, current) => {
    accumulated[current] = current;
    return accumulated;
  }, {});
};

const Messages = {
  ...keysToValues(enMessages),
  ...keysToValues(arMessages),
};

const messages = {
  en: enMessages,
  ar: arMessages,
};

module.exports = {
  Messages,
  messages,
};
