'use strict';
let del = require('del');
let config = require('./config').build;

module.exports = function () {
    return function (boot) {
        if(boot){
            return del([
                config.destination + '/boot.js',
                config.destination + '/boot.js.map'], {force: true});
        }
        else{
            return del([config.destination + '/boot.css',
                config.destination + '/boot.js',
                config.destination + '/boot.js.map',
                config.destination + '/index.html',
                config.destination + '/keycloak.json',
                 config.destination + '/vendor.js',
                 config.destination + '/vendor.js.map'], {force: true});
        }
    
    };
};
