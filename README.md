# Datatype-transform Library

The Datatype-transform Library is a TypeScript package that allows developers to easily convert data between different formats, such as JSON, XML, Array, List, Object and String. It provides a simple and intuitive functionality for converting data type, making it easy to integrate into your TypeScript projects.

## Installation

You can install the Datatype-transform Library via npm:

```bash
npm i datatype-transform

Usage
Importing the Library

import { arrayToList } from 'datatype-transform';

Example
const arr = [1, 2, 3, 4, 5];
const linkedList = arrayToList(arr);
console.log(linkedList);

This will output:
{
  "value": 1,
  "next": {
    "value": 2,
    "next": {
      "value": 3,
      "next": {
        "value": 4,
        "next": {
          "value": 5,
          "next": null
        }
      }
    }
  }
}

Contributing
Contributions are welcome! If you find any bugs or have suggestions for improvement, please open an issue or submit a pull request on the GitHub repository.
