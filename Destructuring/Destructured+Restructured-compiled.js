/**
 * Created by JCLG on 3/16/2016.
 */

'use strict';

var defaults = {
    options: {
        remove: true,
        enable: false,
        instance: {}
    },
    log: {
        warn: true,
        error: true
    }
};

var config = {
    options: {
        remove: false,
        instance: null
    }
};

//merge 'defaults' into 'config'
{
    // destructure (with default value assignments)
    var _config = config;
    var _config$options = _config.options;
    _config$options = _config$options === undefined ? {} : _config$options;
    var _config$options$remov = _config$options.remove;
    var remove = _config$options$remov === undefined ? defaults.options.remove : _config$options$remov;
    var _config$options$enabl = _config$options.enable;
    var enable = _config$options$enabl === undefined ? defaults.options.enable : _config$options$enabl;
    var _config$options$insta = _config$options.instance;
    var instance = _config$options$insta === undefined ? defaults.options.instance : _config$options$insta;
    var _config$log = _config.log;
    _config$log = _config$log === undefined ? {} : _config$log;
    var _config$log$warn = _config$log.warn;
    var warn = _config$log$warn === undefined ? defaults.log.warn : _config$log$warn;
    var _config$log$error = _config$log.error;
    var error = _config$log$error === undefined ? defaults.log.error : _config$log$error;
    // restructure

    config = {
        options: { remove: remove, enable: enable, instance: instance },
        log: { warn: warn, error: error }
    };
}

console.log(config);
console.log(defaults);

//# sourceMappingURL=Destructured+Restructured-compiled.js.map