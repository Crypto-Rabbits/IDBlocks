import { Bytes, USVString } from '@tendermint/types';

let TextDecoder: { new (): { decode (bytes: Bytes): USVString } };
let TextEncoder: { new (): { encode (string: USVString): Bytes } };

if (typeof process !== 'undefined' && process.versions && process.versions.node) {
    ({ TextDecoder, TextEncoder } = require('util'));
}
else {
    ({ TextDecoder, TextEncoder } = window);
}

const decoder = new TextDecoder;
const encoder = new TextEncoder;

/**
 * Decode a string from bytes.
 *
 * @param   bytes - bytes to decode as a string
 *
 * @returns string decoded from bytes
 * @throws  will throw if decoding fails
 */
export function bytesToString (bytes: Bytes): string {
    return decoder.decode(bytes);
}

/**
 * Encode a string as bytes.
 *
 * @param   string - string to encode as bytes
 *
 * @returns bytes encoded from string
 * @throws  will throw if encoding fails
 */
export function stringToBytes (string: string): Bytes {
    return encoder.encode(string);
}

/**
 * Convert a Buffer to bytes.
 *
 * @param   buffer - Buffer to convert to bytes
 *
 * @returns bytes converted from Buffer
 */
export function bufferToBytes (buffer: Buffer): Bytes {
    return new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength / Uint8Array.BYTES_PER_ELEMENT);
}
