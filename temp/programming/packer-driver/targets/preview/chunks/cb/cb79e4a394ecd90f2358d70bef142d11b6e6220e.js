'use strict';

System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var AxiosError, parseProtocol, platform, DATA_URL_PATTERN;

  function fromDataURI(uri, asBlob, options) {
    var _Blob = options && options.Blob || platform.classes.Blob;

    var protocol = parseProtocol(uri);

    if (asBlob === undefined && _Blob) {
      asBlob = true;
    }

    if (protocol === 'data') {
      uri = protocol.length ? uri.slice(protocol.length + 1) : uri;
      var match = DATA_URL_PATTERN.exec(uri);

      if (!match) {
        throw new AxiosError('Invalid URL', AxiosError.ERR_INVALID_URL);
      }

      var mime = match[1];
      var isBase64 = match[2];
      var body = match[3];
      var buffer = Buffer.from(decodeURIComponent(body), isBase64 ? 'base64' : 'utf8');

      if (asBlob) {
        if (!_Blob) {
          throw new AxiosError('Blob is not supported', AxiosError.ERR_NOT_SUPPORT);
        }

        return new _Blob([buffer], {
          type: mime
        });
      }

      return buffer;
    }

    throw new AxiosError('Unsupported protocol ' + protocol, AxiosError.ERR_NOT_SUPPORT);
  }

  _export("default", fromDataURI);

  return {
    setters: [function (_unresolved_) {
      AxiosError = _unresolved_.default;
    }, function (_unresolved_2) {
      parseProtocol = _unresolved_2.default;
    }, function (_unresolved_3) {
      platform = _unresolved_3.default;
    }],
    execute: function () {
      DATA_URL_PATTERN = /^(?:([^;]+);)?(?:[^;]+;)?(base64|),([\s\S]*)$/;
      /**
       * Parse data uri to a Buffer or Blob
       *
       * @param {String} uri
       * @param {?Boolean} asBlob
       * @param {?Object} options
       * @param {?Function} options.Blob
       *
       * @returns {Buffer|Blob}
       */
    }
  };
});
//# sourceMappingURL=cb79e4a394ecd90f2358d70bef142d11b6e6220e.js.map