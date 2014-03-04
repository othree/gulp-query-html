/*jslint node: true, vars: true */
/*global describe: false, it: false */
var query = require('../');
var should = require('should');
var gutil = require('gulp-util');
var path = require('path');
var cheerio = require('cheerio');
require('mocha');

var createFile = function (filepath, contents) {
    "use strict";
    var base = path.dirname(filepath);
    return new gutil.File({
        path: filepath,
        base: base,
        cwd: path.dirname(base),
        contents: contents
    });
};

describe('gulp-query-html', function () {
    "use strict";
    it('query body', function () {

        var htmlString = "<html><head></head><body><p>Content</p><div>footer</div></body></html>";
        var htmlBuffer = new Buffer(htmlString);

        query('body').on('data', function (file) {
            var $ = cheerio.load(file.contents);
            $('html').length.should.equal(0);
            $('body').length.should.equal(0);
            $('p, div').length.should.equal(2);
        }).write(createFile('test.html', htmlBuffer));

    });
});
