'use strict';

System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var VERSION, AxiosError, validators, deprecatedWarnings;

  /**
   * Assert object's properties type
   *
   * @param {object} options
   * @param {object} schema
   * @param {boolean?} allowUnknown
   *
   * @returns {object}
   */
  function assertOptions(options, schema, allowUnknown) {
    if (typeof options !== 'object') {
      throw new AxiosError('options must be an object', AxiosError.ERR_BAD_OPTION_VALUE);
    }

    const keys = Object.keys(options);
    let i = keys.length;

    while (i-- > 0) {
      const opt = keys[i];
      const validator = schema[opt];

      if (validator) {
        const value = options[opt];
        const result = value === undefined || validator(value, opt, options);

        if (result !== true) {
          throw new AxiosError('option ' + opt + ' must be ' + result, AxiosError.ERR_BAD_OPTION_VALUE);
        }

        continue;
      }

      if (allowUnknown !== true) {
        throw new AxiosError('Unknown option ' + opt, AxiosError.ERR_BAD_OPTION);
      }
    }
  }

  return {
    setters: [function (_unresolved_) {
      VERSION = _unresolved_.VERSION;
    }, function (_unresolved_2) {
      AxiosError = _unresolved_2.default;
    }],
    execute: function () {
      validators = {}; // eslint-disable-next-line func-names

      ['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((type, i) => {
        validators[type] = function validator(thing) {
          return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
        };
      });
      deprecatedWarnings = {};
      /**
       * Transitional option validator
       *
       * @param {function|boolean?} validator - set to false if the transitional option has been removed
       * @param {string?} version - deprecated version / removed since version
       * @param {string?} message - some message with additional info
       *
       * @returns {function}
       */

      validators.transitional = function transitional(validator, version, message) {
        function formatMessage(opt, desc) {
          return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
        } // eslint-disable-next-line func-names


        return (value, opt, opts) => {
          if (validator === false) {
            throw new AxiosError(formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')), AxiosError.ERR_DEPRECATED);
          }

          if (version && !deprecatedWarnings[opt]) {
            deprecatedWarnings[opt] = true; // eslint-disable-next-line no-console

            console.warn(formatMessage(opt, ' has been deprecated since v' + version + ' and will be removed in the near future'));
          }

          return validator ? validator(value, opt, opts) : true;
        };
      };

      _export("default", {
        assertOptions,
        validators
      });
    }
  };
});
//# sourceMappingURL=9c75eda7b246c1be74070b5c8d3312468325826e.js.map