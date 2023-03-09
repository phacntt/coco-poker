System.register(["__unresolved_0", "mime-db", "path"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _cjsExports, _charset, _charsets, _contentType, _extension, _extensions, _lookup, _types, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_mimeDb) {
      _req = _mimeDb.__cjsMetaURL;
    }, function (_path) {
      _req0 = _path.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE

        /*!
         * mime-types
         * Copyright(c) 2014 Jonathan Ong
         * Copyright(c) 2015 Douglas Christopher Wilson
         * MIT Licensed
         */
        'use strict';
        /**
         * Module dependencies.
         * @private
         */

        var db = require('mime-db');

        var extname = require('path').extname;
        /**
         * Module variables.
         * @private
         */


        var EXTRACT_TYPE_REGEXP = /^\s*([^;\s]*)(?:;|\s|$)/;
        var TEXT_TYPE_REGEXP = /^text\//i;
        /**
         * Module exports.
         * @public
         */

        exports.charset = charset;
        exports.charsets = {
          lookup: charset
        };
        exports.contentType = contentType;
        exports.extension = extension;
        exports.extensions = Object.create(null);
        exports.lookup = lookup;
        exports.types = Object.create(null); // Populate the extensions/types maps

        populateMaps(exports.extensions, exports.types);
        /**
         * Get the default charset for a MIME type.
         *
         * @param {string} type
         * @return {boolean|string}
         */

        function charset(type) {
          if (!type || typeof type !== 'string') {
            return false;
          } // TODO: use media-typer


          var match = EXTRACT_TYPE_REGEXP.exec(type);
          var mime = match && db[match[1].toLowerCase()];

          if (mime && mime.charset) {
            return mime.charset;
          } // default text/* to utf-8


          if (match && TEXT_TYPE_REGEXP.test(match[1])) {
            return 'UTF-8';
          }

          return false;
        }
        /**
         * Create a full Content-Type header given a MIME type or extension.
         *
         * @param {string} str
         * @return {boolean|string}
         */


        function contentType(str) {
          // TODO: should this even be in this module?
          if (!str || typeof str !== 'string') {
            return false;
          }

          var mime = str.indexOf('/') === -1 ? exports.lookup(str) : str;

          if (!mime) {
            return false;
          } // TODO: use content-type or other module


          if (mime.indexOf('charset') === -1) {
            var charset = exports.charset(mime);
            if (charset) mime += '; charset=' + charset.toLowerCase();
          }

          return mime;
        }
        /**
         * Get the default extension for a MIME type.
         *
         * @param {string} type
         * @return {boolean|string}
         */


        function extension(type) {
          if (!type || typeof type !== 'string') {
            return false;
          } // TODO: use media-typer


          var match = EXTRACT_TYPE_REGEXP.exec(type); // get extensions

          var exts = match && exports.extensions[match[1].toLowerCase()];

          if (!exts || !exts.length) {
            return false;
          }

          return exts[0];
        }
        /**
         * Lookup the MIME type for a file path/extension.
         *
         * @param {string} path
         * @return {boolean|string}
         */


        function lookup(path) {
          if (!path || typeof path !== 'string') {
            return false;
          } // get the extension ("ext" or ".ext" or full path)


          var extension = extname('x.' + path).toLowerCase().substr(1);

          if (!extension) {
            return false;
          }

          return exports.types[extension] || false;
        }
        /**
         * Populate the extensions and types maps.
         * @private
         */


        function populateMaps(extensions, types) {
          // source preference (least -> most)
          var preference = ['nginx', 'apache', undefined, 'iana'];
          Object.keys(db).forEach(function forEachMimeType(type) {
            var mime = db[type];
            var exts = mime.extensions;

            if (!exts || !exts.length) {
              return;
            } // mime -> extensions


            extensions[type] = exts; // extension -> mime

            for (var i = 0; i < exts.length; i++) {
              var extension = exts[i];

              if (types[extension]) {
                var from = preference.indexOf(db[types[extension]].source);
                var to = preference.indexOf(mime.source);

                if (types[extension] !== 'application/octet-stream' && (from > to || from === to && types[extension].substr(0, 12) === 'application/')) {
                  // skip the remapping
                  continue;
                }
              } // set the extension -> mime


              types[extension] = type;
            }
          });
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        _charset = module.exports.charset;
        _charsets = module.exports.charsets;
        _contentType = module.exports.contentType;
        _extension = module.exports.extension;
        _extensions = module.exports.extensions;
        _lookup = module.exports.lookup;
        _types = module.exports.types;
      }, () => ({
        'mime-db': _req,
        'path': _req0
      }));
    }
  };
});
//# sourceMappingURL=4faadb2561eef1845fe854d87135a6072eb8dd1a.js.map