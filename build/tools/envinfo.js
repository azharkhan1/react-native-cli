"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _envinfo() {
  const data = _interopRequireDefault(require("envinfo"));

  _envinfo = function () {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @ts-ignore
async function getEnvironmentInfo(json = true) {
  const options = {
    json,
    showNotFound: true
  };
  const info = await _envinfo().default.run({
    System: ['OS', 'CPU', 'Memory', 'Shell'],
    Binaries: ['Node', 'Yarn', 'npm', 'Watchman'],
    IDEs: ['Xcode', 'Android Studio'],
    SDKs: ['iOS SDK', 'Android SDK'],
    npmPackages: ['react', 'react-native', '@react-native-community/cli'],
    npmGlobalPackages: ['*react-native*']
  }, options);

  if (options.json) {
    return JSON.parse(info);
  }

  return info.trim();
}

var _default = getEnvironmentInfo;
exports.default = _default;

//# sourceMappingURL=envinfo.js.map