import { JSONBytes } from '@tendermint/types';
import { bytesToString, stringToBytes } from './bytes';

/**
 * Encode a value as JSON bytes
 *
 * @typeparam T     - type of encoded value
 * @param     value - value to encode
 *
 * @returns   JSON bytes
 * @throws    will throw if `JSON.stringify` fails (e.g. on circular reference)
 */
export function jsonToBytes<T> (value: T): JSONBytes {
    return stringToBytes(JSON.stringify(value));
}

/**
 * Decode a value from JSON bytes
 *
 * @typeparam T    - type of encoded value
 * @param     json - JSON bytes to decode
 *
 * @returns   value decoded from JSON bytes
 * @throws    will throw if `JSON.parse` fails (e.g. on malformed JSON)
 */
export function bytesToJSON<T> (json: JSONBytes): T {
    return JSON.parse(bytesToString(json));
}
