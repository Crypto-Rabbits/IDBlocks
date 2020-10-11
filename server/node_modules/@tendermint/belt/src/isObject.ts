/**
 * Check if a value is a plain object.
 *
 * @param   value - value to check
 *
 * @returns `true` if the value is a plain object, `false` otherwise
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isObject (value: any): boolean {
    return (Object.prototype.toString.call(value) === '[object Object]');
}
