export const Greeter = (name: string) => `Hello ${name}`;

const request = require('request');

enum HttpMethod {
  GET,
    POST,
    PUT,
    DELETE,
}

class OPAResult {
  constructor(obj: any) {
  }
}

function queryOPA(method:HttpMethod, path: string[], ...args:any[]) : OPAResult {
  const input = {
    method: method,
    path: path,
    subject: 'asd',
    ...args
  };

  return compile('', input, []);

}

function compile(query:string, input: any, unknowns: string[]) : OPAResult {
  const response = request({
    uri: 'http://localhost:8181/v1/compile',
    method: 'POST',
    json: true,
    body: { query, input, unknowns });

  return new OPAResult({});
}

