/// <reference types="node" />
import { Bytes } from '@tendermint/types';
/**
 * Decode a string from bytes.
 *
 * @param   bytes - bytes to decode as a string
 *
 * @returns string decoded from bytes
 * @throws  will throw if decoding fails
 */
export declare function bytesToString(bytes: Bytes): string;
/**
 * Encode a string as bytes.
 *
 * @param   string - string to encode as bytes
 *
 * @returns bytes encoded from string
 * @throws  will throw if encoding fails
 */
export declare function stringToBytes(string: string): Bytes;
/**
 * Convert a Buffer to bytes.
 *
 * @param   buffer - Buffer to convert to bytes
 *
 * @returns bytes converted from Buffer
 */
export declare function bufferToBytes(buffer: Buffer): Bytes;
