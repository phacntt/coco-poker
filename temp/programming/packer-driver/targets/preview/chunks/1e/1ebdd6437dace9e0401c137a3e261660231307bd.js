System.register(["__unresolved_0", "debug"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_debug) {
      _req = _debug.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        var debug;

        module.exports = function () {
          if (!debug) {
            try {
              /* eslint global-require: off */
              debug = require("debug")("follow-redirects");
            } catch (error) {
              /* */
            }

            if (typeof debug !== "function") {
              debug = function debug() {
                /* */
              };
            }
          }

          debug.apply(null, arguments);
        }; // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);
      }, () => ({
        'debug': _req
      }));
    }
  };
});
//# sourceMappingURL=1ebdd6437dace9e0401c137a3e261660231307bd.js.map