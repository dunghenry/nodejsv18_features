import assert from 'node:assert';
import test from 'node:test';
import { sum } from '../src/sum';

test('adding number', () => {
    const actual = sum(1, 2);
    const expected = 3;
    assert.strictEqual(actual, expected);
});
