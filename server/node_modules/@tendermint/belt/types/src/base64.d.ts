import { Base64String, Bytes } from '@tendermint/types';
/**
 * Decode bytes from Base64.
 *
 * @param   base64 - string to decode
 *
 * @returns bytes from Base64-encoded string
 */
export declare function base64ToBytes(base64: Base64String): Bytes;
/**
 * Encode bytes as Base64.
 *
 * @param   bytes - bytes to encode
 *
 * @returns Base64-encoded string from bytes
 */
export declare function bytesToBase64(bytes: Bytes): Base64String;
