import { capitalize } from '../utils/helpers.js';

test('capitalize function capitalizes the first letter of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('world')).toBe('World');
    expect(capitalize('this is a test')).toBe('This is a test');
});
