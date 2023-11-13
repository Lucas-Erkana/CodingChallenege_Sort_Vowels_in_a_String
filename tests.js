const sortVowels = require('./solution');
const assert = require('assert');

describe('sortVowels', function () {
  it('should sort vowels in a given string', function () {
    assert.strictEqual(sortVowels('lEetcOde'), 'lEOtcede');
    assert.strictEqual(sortVowels('aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ'), 'aAeEiIoOuUyYbBcCdDfFgGhHjJkKlLmMnNpPqQrRsSvVwWxXzZ');
    assert.strictEqual(sortVowels('hello world'), 'hllo werld');
    assert.strictEqual(sortVowels('BCDFGHJKLMNPQRSTVWXYZ'), 'BCDFGHJKLMNPQRSTVWXYZ');
    assert.strictEqual(sortVowels('aeiouAEIOU'), 'aeiouAEIOU');
  });
});
