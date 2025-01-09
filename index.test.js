import { sum } from './index.js';
import { describe, it } from 'mocha';
import assert from 'assert';

describe('sum', () => {
  it('should add 1 + 2 to equal 3', () => {
    assert.equal(sum(1, 2), 3);
  });
  it('should add 1.2 + 2.1 to equal 3.3', () => {
    assert.equal(sum(1.2, 2.1), 3.3);
  });
});
