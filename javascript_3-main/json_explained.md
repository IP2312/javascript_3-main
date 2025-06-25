# What is JSON?
JSON **(JavaScript Object Notation)** is a text-based data exchange format. It is a collection of key-value pairs where the key must be a string type, and the value can be of any of the following types:

- Number
- String
- Boolean
- Array
- Object
- null

A couple of important rules to note:

- In the JSON data format, the keys must be enclosed in double quotes.
- The key and value must be separated by a colon (:) symbol.
- There can be multiple key-value pairs. Two key-value pairs must be separated by a comma (,) symbol.
- No comments (// or /* */) are allowed in JSON data.

Here's an example for a JSON file:
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "age": 30,
  "email": "john.doe@example.com",
  "address": {
    "street": "123 Main Street",
    "city": "Anytown",
    "state": "CA",
    "postalCode": "12345"
  },
  "phoneNumbers": [
    {
      "type": "home",
      "number": "555-1234"
    },
    {
      "type": "work",
      "number": "555-5678"
    }
  ],
  "isMarried": false,
  "children": null
}
```
JSON format is often used for sending API requests due to its lightweight and human-readable nature. API requests typically contain JSON-formatted data in the request body, which is then processed by the server to perform the requested actions. 

The example above demonstrates how JSON can be used to represent complex data structures, making it well-suited for transmitting structured data between clients and servers in API communication.