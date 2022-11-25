const test = require('node:test');
const assert = require('node:assert');
const { sum } = require('../src/sum');
test('adding number', () => {
    const actual = sum(1, 2);
    const expected = 3;
    assert.strictEqual(actual, expected);
});
