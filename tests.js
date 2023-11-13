const sortVowels = require('./solution');
const assert = require('assert');

describe('Tests for sortVowels function', function () {

    it('should correctly sort vowels while keeping consonants in place', function () {
        assert.strictEqual(sortVowels('lEetcOde'), 'lEOtcede');
    });

    it('should return the same string when there are no vowels', function () {
        assert.strictEqual(sortVowels('HmMm'), 'HmMm');
    });

    it('should handle strings with only vowels', function () {
        assert.strictEqual(sortVowels('UOIEA'), 'AEIOU');
    });

    it('should handle case sensitivity correctly', function () {
        assert.strictEqual(sortVowels('AbCdEfGh'), 'AbCdEfGh');
    });

    it('should return an empty string when input is empty', function () {
        assert.strictEqual(sortVowels(''), '');
    });

});
