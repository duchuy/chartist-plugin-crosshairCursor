/**
 * umd
 * ===
 *
 * Wraps the library into an universal module definition (AMD + CommonJS + Global).
 *
 * Link: https://github.com/bebraw/grunt-umd
 */

'use strict';

module.exports = function (grunt) {
  return {
    dist: {
      src: '<%= pkg.config.src %>/scripts/chartist-plugin-crosshairCursor.js',
      dest: '<%= pkg.config.dist %>/chartist-plugin-crosshairCursor.js',
      objectToExport: 'Chartist.plugins.crosshairCursor',
      indent: '  ',
      deps: {
        default: ['Chartist'],
        amd: ['chartist'],
        cjs: ['chartist'],
        global: ['Chartist']
      }
    }
  };
};
