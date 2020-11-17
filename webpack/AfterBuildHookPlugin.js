const fs = require('fs-extra');

function AfterBuildHookPlugin(options) {
  this.options = options || {};
}

AfterBuildHookPlugin.prototype.apply = function (compiler) {
  compiler.hooks.done.tap('AfterBuildHookPlugin', stats => {
    if (this.options.copyPaths) {
      for (const path of Object.getOwnPropertyNames(this.options.copyPaths)) {
        try {
          fs.copySync(path, this.options.copyPaths[path]);
        } catch (e) {
          console.error('Exception caught in AfterBuildHookPlugin: ' + e.message);
        }
      }
    }
    if (this.options.movePaths) {
      for (const path of Object.getOwnPropertyNames(this.options.movePaths)) {
        try {
          fs.moveSync(path, this.options.movePaths[path], {
            overwrite: true,
          });
        } catch (e) {
          console.error('Exception caught in AfterBuildHookPlugin: ' + e.message);
        }
      }
    }
  });
};

module.exports = AfterBuildHookPlugin;
