/**
 * A JSON object.
 */
export interface JSONObject {
    [key: string]: JSONValue;
}

/**
 * A JSON array.
 */
export interface JSONArray extends Array<JSONValue> {
}

/**
 * A JSON value.
 */
export type JSONValue =
    string |
    number |
    boolean |
    null |
    JSONArray |
    JSONObject;
