import { Base64String, BinaryString, Bytes } from '@tendermint/types';

let atob: (base64: Base64String) => BinaryString;
let btoa: (binary: BinaryString) => Base64String;

if (typeof process !== 'undefined' && process.versions && process.versions.node) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { Buffer } = require('buffer');

    atob = function (base64: Base64String): BinaryString {
        return Buffer.from(base64, 'base64').toString('binary');
    };
    btoa = function (binary: BinaryString): Base64String {
        return Buffer.from(binary, 'binary').toString('base64');
    };
}
else {
    ({ atob, btoa } = window);
}

/**
 * Decode bytes from Base64.
 *
 * @param   base64 - string to decode
 *
 * @returns bytes from Base64-encoded string
 */
export function base64ToBytes (base64: Base64String): Bytes {
    const binary = atob(base64);
    const length = binary.length;
    const bytes  = new Uint8Array(new ArrayBuffer(length));

    for (let i = 0; i < length; i++) {
        bytes[i] = binary.charCodeAt(i);
    }

    return bytes;
}

/**
 * Encode bytes as Base64.
 *
 * @param   bytes - bytes to encode
 *
 * @returns Base64-encoded string from bytes
 */
export function bytesToBase64 (bytes: Bytes): Base64String {
    const binary = String.fromCharCode(...bytes);
    return btoa(binary);
}
