"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.characterSetToString = exports.stringToCharacterSet = exports.regExpToString = exports.stringToRegExp = exports.safeJsonToString = exports.safeStringToJson = exports.queryStringToObject = exports.objectToQueryString = exports.urlEncodedToString = exports.stringToURLEncoded = exports.base64ToString = exports.stringToBase64 = exports.charArrayToString = exports.stringToCharArray = exports.jsonToString = exports.stringToJson = exports.dateToString = exports.stringToDate = exports.booleanToString = exports.stringToBoolean = exports.objectToString = exports.stringToObject = exports.arrayToString = exports.stringToArray = exports.numberToString = exports.stringToNumber = exports.xmlToJson = exports.jsonToXml = exports.snakeToCamelCase = exports.arrayToObject = exports.objectToArray = exports.listToArray = exports.arrayToList = void 0;
// Convert an array to a linked list
function arrayToList(arr) {
    if (!arr.length)
        return null;
    const [head, ...rest] = arr;
    return { value: head, next: arrayToList(rest) };
}
exports.arrayToList = arrayToList;
// Convert a linked list to an array
function listToArray(list) {
    const result = [];
    let currentNode = list;
    while (currentNode !== null) {
        result.push(currentNode.value);
        currentNode = currentNode.next;
    }
    return result;
}
exports.listToArray = listToArray;
// Convert an object to an array of key-value pairs
function objectToArray(obj) {
    return Object.entries(obj);
}
exports.objectToArray = objectToArray;
// Convert an array of key-value pairs to an object
function arrayToObject(arr) {
    return Object.fromEntries(arr);
}
exports.arrayToObject = arrayToObject;
// Convert camelCase strings to snake_case
function camelToSnakeCase(str) {
    return str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
}
// Convert snake_case strings to camelCase
function snakeToCamelCase(str) {
    return str.replace(/_[a-z]/g, match => match.slice(1).toUpperCase());
}
exports.snakeToCamelCase = snakeToCamelCase;
// Convert JSON data to XML format
function jsonToXml(json) {
    const convertToXml = (obj) => {
        let xml = '';
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (typeof obj[key] === 'object') {
                    xml += `<${key}>${convertToXml(obj[key])}</${key}>`;
                }
                else {
                    xml += `<${key}>${obj[key]}</${key}>`;
                }
            }
        }
        return xml;
    };
    //return `<?xml version="1.0" encoding="UTF-8"?>\n<root>${convertToXml(json)}</root>`;
    return `<root>${convertToXml(json)}</root>`;
}
exports.jsonToXml = jsonToXml;
function xmlToJson(xml) {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xml, "text/xml");
    const result = {};
    function parseNode(node, obj) {
        var _a, _b;
        if (node.nodeType === Node.TEXT_NODE) {
            if ((_a = node.nodeValue) === null || _a === void 0 ? void 0 : _a.trim()) {
                obj["#text"] = node.nodeValue.trim();
            }
        }
        else if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node; // Cast to Element to access attributes
            const tagName = node.nodeName;
            const children = node.childNodes;
            if (!obj[tagName]) {
                obj[tagName] = {};
            }
            if (children.length === 1 && children[0].nodeType === Node.TEXT_NODE) {
                obj[tagName] = ((_b = children[0].nodeValue) === null || _b === void 0 ? void 0 : _b.trim()) || "";
            }
            else {
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
exports.xmlToJson = xmlToJson;
// Convert a string representation of a number to a number type
function stringToNumber(str) {
    return parseFloat(str);
}
exports.stringToNumber = stringToNumber;
// Convert a number to its string representation
function numberToString(num) {
    return num.toString();
}
exports.numberToString = numberToString;
// Convert a string representation of an array to an array
function stringToArray(str, delimiter = ',') {
    return str.split(delimiter).map(item => item.trim());
}
exports.stringToArray = stringToArray;
// Convert an array to a string representation
function arrayToString(arr, delimiter = ',') {
    return arr.join(delimiter);
}
exports.arrayToString = arrayToString;
// Convert a string representation of an object to an object
function stringToObject(str) {
    return JSON.parse(str);
}
exports.stringToObject = stringToObject;
// Convert an object to a string representation
function objectToString(obj) {
    return JSON.stringify(obj);
}
exports.objectToString = objectToString;
// Convert a string representation of a boolean to a boolean
function stringToBoolean(str) {
    return str.toLowerCase() === 'true';
}
exports.stringToBoolean = stringToBoolean;
// Convert a boolean to a string representation
function booleanToString(bool) {
    return bool.toString();
}
exports.booleanToString = booleanToString;
// Convert a string representation of a date to a Date object
function stringToDate(str) {
    return new Date(str);
}
exports.stringToDate = stringToDate;
// Convert a Date object to a string representation
function dateToString(date) {
    return date.toISOString();
}
exports.dateToString = dateToString;
// Convert a string representation of a JSON-like object to a JavaScript object
function stringToJson(str) {
    return Function('"use strict";return (' + str + ')')();
}
exports.stringToJson = stringToJson;
// Convert a JavaScript object to a string representation of a JSON-like object
function jsonToString(obj) {
    return JSON.stringify(obj, null, 2);
}
exports.jsonToString = jsonToString;
// Convert a string to an array of characters
function stringToCharArray(str) {
    return str.split('');
}
exports.stringToCharArray = stringToCharArray;
// Convert an array of characters to a string
function charArrayToString(chars) {
    return chars.join('');
}
exports.charArrayToString = charArrayToString;
// Convert a string to a base64 encoded string
function stringToBase64(str) {
    return btoa(str);
}
exports.stringToBase64 = stringToBase64;
// Convert a base64 encoded string to a regular string
function base64ToString(base64Str) {
    return atob(base64Str);
}
exports.base64ToString = base64ToString;
// Convert a string to a URL-encoded string
function stringToURLEncoded(str) {
    return encodeURIComponent(str);
}
exports.stringToURLEncoded = stringToURLEncoded;
// Convert a URL-encoded string to a regular string
function urlEncodedToString(urlEncodedStr) {
    return decodeURIComponent(urlEncodedStr);
}
exports.urlEncodedToString = urlEncodedToString;
// Convert an object to a query string
function objectToQueryString(obj) {
    return Object.entries(obj)
        .map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
        .join('&');
}
exports.objectToQueryString = objectToQueryString;
// Convert a query string to an object
function queryStringToObject(queryString) {
    const params = new URLSearchParams(queryString);
    const obj = {};
    params.forEach((value, key) => {
        obj[key] = value;
    });
    return obj;
}
exports.queryStringToObject = queryStringToObject;
// Convert a string to a JSON object, with error handling
function safeStringToJson(str) {
    try {
        return JSON.parse(str);
    }
    catch (error) {
        console.error('Error parsing JSON:', error);
        return null;
    }
}
exports.safeStringToJson = safeStringToJson;
// Convert a JSON object to a string, with error handling
function safeJsonToString(obj) {
    try {
        return JSON.stringify(obj);
    }
    catch (error) {
        console.error('Error stringifying JSON:', error);
        return '';
    }
}
exports.safeJsonToString = safeJsonToString;
// Convert a string to a regular expression
function stringToRegExp(pattern, flags = '') {
    return new RegExp(pattern, flags);
}
exports.stringToRegExp = stringToRegExp;
// Convert a regular expression to a string representation
function regExpToString(regExp) {
    return regExp.toString();
}
exports.regExpToString = regExpToString;
// Convert a string to a set of unique characters
function stringToCharacterSet(str) {
    return new Set(str.split(''));
}
exports.stringToCharacterSet = stringToCharacterSet;
// Convert a set of unique characters to a string
function characterSetToString(charSet) {
    return [...charSet].join('');
}
exports.characterSetToString = characterSetToString;
