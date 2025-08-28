import { describe, expect, it } from 'vitest';

import { getGreeting } from '../index';

describe('getGreeting', () => {
  it('returns default greeting', () => {
    expect(getGreeting()).toBe('Hello from TypeScript!');
  });

  it('greets a provided name', () => {
    expect(getGreeting('World')).toBe('Hello from World!');
  });
});
