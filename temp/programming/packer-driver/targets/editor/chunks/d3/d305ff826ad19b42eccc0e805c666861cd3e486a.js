System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var axios, Axios, AxiosError, CanceledError, isCancel, CancelToken, VERSION, all, Cancel, isAxiosError, spread, toFormData, AxiosHeaders, HttpStatusCode, formToJSON, mergeConfig;
  return {
    setters: [function (_unresolved_) {
      axios = _unresolved_.default;
    }],
    execute: function () {
      // This module is intended to unwrap Axios default export as named.
      // Keep top-level export same with static properties
      // so that it can keep same with es module or cjs
      ({
        Axios,
        AxiosError,
        CanceledError,
        isCancel,
        CancelToken,
        VERSION,
        all,
        Cancel,
        isAxiosError,
        spread,
        toFormData,
        AxiosHeaders,
        HttpStatusCode,
        formToJSON,
        mergeConfig
      } = axios), _export("Axios", Axios), _export("AxiosError", AxiosError), _export("CanceledError", CanceledError), _export("isCancel", isCancel), _export("CancelToken", CancelToken), _export("VERSION", VERSION), _export("all", all), _export("Cancel", Cancel), _export("isAxiosError", isAxiosError), _export("spread", spread), _export("toFormData", toFormData), _export("AxiosHeaders", AxiosHeaders), _export("HttpStatusCode", HttpStatusCode), _export("formToJSON", formToJSON), _export("mergeConfig", mergeConfig);

      _export("default", axios);
    }
  };
});
//# sourceMappingURL=d305ff826ad19b42eccc0e805c666861cd3e486a.js.map