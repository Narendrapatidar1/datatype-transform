export declare function arrayToList<T>(arr: T[]): {
    value: T;
    next: any;
} | null;
export declare function listToArray<T>(list: {
    value: T;
    next: any;
} | null): T[];
export declare function objectToArray(obj: {
    [key: string]: any;
}): [string, any][];
export declare function arrayToObject(arr: [string, any][]): {
    [key: string]: any;
};
export declare function snakeToCamelCase(str: string): string;
export declare function jsonToXml(json: object): string;
export declare function xmlToJson(xml: string): object;
export declare function stringToNumber(str: string): number;
export declare function numberToString(num: number): string;
export declare function stringToArray(str: string, delimiter?: string): any[];
export declare function arrayToString(arr: any[], delimiter?: string): string;
export declare function stringToObject(str: string): {
    [key: string]: any;
};
export declare function objectToString(obj: {
    [key: string]: any;
}): string;
export declare function stringToBoolean(str: string): boolean;
export declare function booleanToString(bool: boolean): string;
export declare function stringToDate(str: string): Date;
export declare function dateToString(date: Date): string;
export declare function stringToJson(str: string): any;
export declare function jsonToString(obj: any): string;
export declare function stringToCharArray(str: string): string[];
export declare function charArrayToString(chars: string[]): string;
export declare function stringToBase64(str: string): string;
export declare function base64ToString(base64Str: string): string;
export declare function stringToURLEncoded(str: string): string;
export declare function urlEncodedToString(urlEncodedStr: string): string;
export declare function objectToQueryString(obj: {
    [key: string]: any;
}): string;
export declare function queryStringToObject(queryString: string): {
    [key: string]: any;
};
export declare function safeStringToJson(str: string): any;
export declare function safeJsonToString(obj: any): string;
export declare function stringToRegExp(pattern: string, flags?: string): RegExp;
export declare function regExpToString(regExp: RegExp): string;
export declare function stringToCharacterSet(str: string): Set<string>;
export declare function characterSetToString(charSet: Set<string>): string;
