
module.exports = function (api) {
  api.cache(false);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [['module:react-native-dotenv', {
      moduleName: '@env',
      path: '.env',
      'allowlist': [
        'API_URL',
        'API_TOKEN',
      ],
      blocklist: [
        'BLOCK_LIST'
      ],
      'allowUndefined': true,
    }]]
  };
};

module.exports = function (api) {
  api.cache(false);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [['module:react-native-dotenv', {
      moduleName: '@env',
      path: '.env',
      'allowlist': null,
      'blocklist': null,
    }]]
  };
};