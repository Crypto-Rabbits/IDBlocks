/**
 * Wrap arguments in an array. If only one argument is provided:
 *
 * - if it's `null` or `undefined`, return an empty array
 * - if it's an array, return a copy of it
 * - otherwise, return a new array containing it
 *
 * @param   first - first argument
 * @param   rest  - other arguments
 *
 * @returns an array
 */
export declare function arrayWrap(first: any, ...rest: any[]): any[];
