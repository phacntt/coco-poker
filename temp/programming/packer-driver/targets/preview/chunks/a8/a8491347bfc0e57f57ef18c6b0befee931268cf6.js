'use strict';

System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var CanceledError, CancelToken;
  return {
    setters: [function (_unresolved_) {
      CanceledError = _unresolved_.default;
    }],
    execute: function () {
      /**
       * A `CancelToken` is an object that can be used to request cancellation of an operation.
       *
       * @param {Function} executor The executor function.
       *
       * @returns {CancelToken}
       */
      CancelToken = class CancelToken {
        constructor(executor) {
          if (typeof executor !== 'function') {
            throw new TypeError('executor must be a function.');
          }

          var resolvePromise;
          this.promise = new Promise(function promiseExecutor(resolve) {
            resolvePromise = resolve;
          });
          var token = this; // eslint-disable-next-line func-names

          this.promise.then(cancel => {
            if (!token._listeners) return;
            var i = token._listeners.length;

            while (i-- > 0) {
              token._listeners[i](cancel);
            }

            token._listeners = null;
          }); // eslint-disable-next-line func-names

          this.promise.then = onfulfilled => {
            var _resolve; // eslint-disable-next-line func-names


            var promise = new Promise(resolve => {
              token.subscribe(resolve);
              _resolve = resolve;
            }).then(onfulfilled);

            promise.cancel = function reject() {
              token.unsubscribe(_resolve);
            };

            return promise;
          };

          executor(function cancel(message, config, request) {
            if (token.reason) {
              // Cancellation has already been requested
              return;
            }

            token.reason = new CanceledError(message, config, request);
            resolvePromise(token.reason);
          });
        }
        /**
         * Throws a `CanceledError` if cancellation has been requested.
         */


        throwIfRequested() {
          if (this.reason) {
            throw this.reason;
          }
        }
        /**
         * Subscribe to the cancel signal
         */


        subscribe(listener) {
          if (this.reason) {
            listener(this.reason);
            return;
          }

          if (this._listeners) {
            this._listeners.push(listener);
          } else {
            this._listeners = [listener];
          }
        }
        /**
         * Unsubscribe from the cancel signal
         */


        unsubscribe(listener) {
          if (!this._listeners) {
            return;
          }

          var index = this._listeners.indexOf(listener);

          if (index !== -1) {
            this._listeners.splice(index, 1);
          }
        }
        /**
         * Returns an object that contains a new `CancelToken` and a function that, when called,
         * cancels the `CancelToken`.
         */


        static source() {
          var cancel;
          var token = new CancelToken(function executor(c) {
            cancel = c;
          });
          return {
            token,
            cancel
          };
        }

      };

      _export("default", CancelToken);
    }
  };
});
//# sourceMappingURL=a8491347bfc0e57f57ef18c6b0befee931268cf6.js.map