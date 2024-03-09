// Convert an array to a linked list
export function arrayToList<T>(arr: T[]): { value: T; next: any } | null {
    if (!arr.length) return null;
    const [head, ...rest] = arr;
    return { value: head, next: arrayToList(rest) };
}

// Convert a linked list to an array
export function listToArray<T>(list: { value: T; next: any } | null): T[] {
    const result: T[] = [];
    let currentNode = list;
    while (currentNode !== null) {
        result.push(currentNode.value);
        currentNode = currentNode.next;
    }
    return result;
}

// Convert an object to an array of key-value pairs
export function objectToArray(obj: { [key: string]: any }): [string, any][] {
    return Object.entries(obj);
}

// Convert an array of key-value pairs to an object
export function arrayToObject(arr: [string, any][]): { [key: string]: any } {
    return Object.fromEntries(arr);
}

// Convert camelCase strings to snake_case
function camelToSnakeCase(str: string): string {
    return str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
}

// Convert snake_case strings to camelCase
export function snakeToCamelCase(str: string): string {
    return str.replace(/_[a-z]/g, match => match.slice(1).toUpperCase());
}

// Convert JSON data to XML format
export function jsonToXml(json: object): string {
    const convertToXml = (obj: any): string => {
        let xml = '';
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (typeof obj[key] === 'object') {
                    xml += `<${key}>${convertToXml(obj[key])}</${key}>`;
                } else {
                    xml += `<${key}>${obj[key]}</${key}>`;
                }
            }
        }
        return xml;
    };

    //return `<?xml version="1.0" encoding="UTF-8"?>\n<root>${convertToXml(json)}</root>`;
    return `<root>${convertToXml(json)}</root>`;
}

export function xmlToJson(xml: string): object {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xml, "text/xml");
    const result: any = {};

    function parseNode(node: Node, obj: any) {
        if (node.nodeType === Node.TEXT_NODE) {
            if (node.nodeValue?.trim()) {
                obj["#text"] = node.nodeValue.trim();
            }
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as Element; // Cast to Element to access attributes
            const tagName = node.nodeName;
            const children = node.childNodes;

            if (!obj[tagName]) {
                obj[tagName] = {};
            }

            if (children.length === 1 && children[0].nodeType === Node.TEXT_NODE) {
                obj[tagName] = children[0].nodeValue?.trim() || "";
            } else {
                for (let i = 0; i < children.length; i++) {
                    parseNode(children[i], obj[tagName]);
                }
            }

            if (element.attributes) {
                for (let i = 0; i < element.attributes.length; i++) {
                    const attr = element.attributes[i];
                    obj[tagName]["@" + attr.nodeName] = attr.nodeValue;
                }
            }
        }
    }
    parseNode(xmlDoc.documentElement, result);
    return result;
}



// Convert a string representation of a number to a number type
export function stringToNumber(str: string): number {
    return parseFloat(str);
}

// Convert a number to its string representation
export function numberToString(num: number): string {
    return num.toString();
}

// Convert a string representation of an array to an array
export function stringToArray(str: string, delimiter: string = ','): any[] {
    return str.split(delimiter).map(item => item.trim());
}

// Convert an array to a string representation
export function arrayToString(arr: any[], delimiter: string = ','): string {
    return arr.join(delimiter);
}

// Convert a string representation of an object to an object
export function stringToObject(str: string): { [key: string]: any } {
    return JSON.parse(str);
}

// Convert an object to a string representation
export function objectToString(obj: { [key: string]: any }): string {
    return JSON.stringify(obj);
}

// Convert a string representation of a boolean to a boolean
export function stringToBoolean(str: string): boolean {
    return str.toLowerCase() === 'true';
}

// Convert a boolean to a string representation
export function booleanToString(bool: boolean): string {
    return bool.toString();
}

// Convert a string representation of a date to a Date object
export function stringToDate(str: string): Date {
    return new Date(str);
}

// Convert a Date object to a string representation
export function dateToString(date: Date): string {
    return date.toISOString();
}

// Convert a string representation of a JSON-like object to a JavaScript object
export function stringToJson(str: string): any {
    return Function('"use strict";return (' + str + ')')();
}

// Convert a JavaScript object to a string representation of a JSON-like object
export function jsonToString(obj: any): string {
    return JSON.stringify(obj, null, 2);
}

// Convert a string to an array of characters
export function stringToCharArray(str: string): string[] {
    return str.split('');
}

// Convert an array of characters to a string
export function charArrayToString(chars: string[]): string {
    return chars.join('');
}

// Convert a string to a base64 encoded string
export function stringToBase64(str: string): string {
    return btoa(str);
}

// Convert a base64 encoded string to a regular string
export function base64ToString(base64Str: string): string {
    return atob(base64Str);
}

// Convert a string to a URL-encoded string
export function stringToURLEncoded(str: string): string {
    return encodeURIComponent(str);
}

// Convert a URL-encoded string to a regular string
export function urlEncodedToString(urlEncodedStr: string): string {
    return decodeURIComponent(urlEncodedStr);
}

// Convert an object to a query string
export function objectToQueryString(obj: { [key: string]: any }): string {
    return Object.entries(obj)
        .map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
        .join('&');
}

// Convert a query string to an object
export function queryStringToObject(queryString: string): { [key: string]: any } {
    const params = new URLSearchParams(queryString);
    const obj: { [key: string]: any } = {};
    params.forEach((value, key) => {
        obj[key] = value;
    });
    return obj;
}

// Convert a string to a JSON object, with error handling
export function safeStringToJson(str: string): any {
    try {
        return JSON.parse(str);
    } catch (error) {
        console.error('Error parsing JSON:', error);
        return null;
    }
}

// Convert a JSON object to a string, with error handling
export function safeJsonToString(obj: any): string {
    try {
        return JSON.stringify(obj);
    } catch (error) {
        console.error('Error stringifying JSON:', error);
        return '';
    }
}

// Convert a string to a regular expression
export function stringToRegExp(pattern: string, flags: string = ''): RegExp {
    return new RegExp(pattern, flags);
}

// Convert a regular expression to a string representation
export function regExpToString(regExp: RegExp): string {
    return regExp.toString();
}

// Convert a string to a set of unique characters
export function stringToCharacterSet(str: string): Set<string> {
    return new Set(str.split(''));
}

// Convert a set of unique characters to a string
export function characterSetToString(charSet: Set<string>): string {
    return [...charSet].join('');
}


