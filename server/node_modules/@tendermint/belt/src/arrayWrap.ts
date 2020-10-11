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
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function arrayWrap (first: any, ...rest: any[]): any[] {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let array: any[];
    if (arguments.length > 1) {
        array = [first, ...rest];
    }
    else if (first == null) {
        array = [];
    }
    else if (Array.isArray(first)) {
        array = [...first];
    }
    else {
        array = [first];
    }
    return array;
}
