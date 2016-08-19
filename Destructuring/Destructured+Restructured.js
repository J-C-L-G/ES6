/**
 * Created by JCLG on 3/16/2016.
 */

'use strict';

var defaults = {
    options : {
        remove : true,
        enable : false,
        instance : {}
    },
    log : {
        warn : true,
        error : true
    }
};

var config = {
    options : {
        remove : false,
        instance : null
    }
};

//merge 'defaults' into 'config'
{
    // destructure (with default value assignments)
    let {
        options: {
            remove = defaults.options.remove,
            enable = defaults.options.enable,
            instance = defaults.options.instance
            } = {},
         log: {
            warn = defaults.log.warn,
            error = defaults.log.error
            } = {}
        } = config;
    // restructure
    config = {
        options: { remove, enable, instance },
        log: { warn, error }
    };
}

console.log(config);
console.log(defaults);