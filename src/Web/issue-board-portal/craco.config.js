const path = require("path");
const { getLoader, loaderByName } = require("@craco/craco");

const pathsToAdd = [path.join(__dirname, "../ui-library")];

module.exports = {
  webpack: {
    alias: {},
    plugins: [],
    configure: (webpackConfig, { env, paths }) => {
      const { isFound, match } = getLoader(
        webpackConfig,
        loaderByName("babel-loader")
      );
      if (isFound) {
        const include = Array.isArray(match.loader.include)
          ? match.loader.include
          : [match.loader.include];

        pathsToAdd.forEach((p) => (match.loader.include = include.concat[p]));
      }

      // webpackConfig.resolve = {
      //   ...webpackConfig.resolve,
      //   plugins: [new DirectoryNamedWebpackPlugin(true), ...webpackConfig.resolve.plugins],
      // };

      return webpackConfig;
    },
  },
};