'use strict';

System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var AxiosError;

  function settle(resolve, reject, response) {
    var validateStatus = response.config.validateStatus;

    if (!response.status || !validateStatus || validateStatus(response.status)) {
      resolve(response);
    } else {
      reject(new AxiosError('Request failed with status code ' + response.status, [AxiosError.ERR_BAD_REQUEST, AxiosError.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4], response.config, response.request, response));
    }
  }

  _export("default", settle);

  return {
    setters: [function (_unresolved_) {
      AxiosError = _unresolved_.default;
    }],
    execute: function () {}
  };
});
//# sourceMappingURL=47c91e93ce94aebde9ab1dce98d7710ad3712b0b.js.map