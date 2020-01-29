const fs = require('fs')
const easygraphqlSchemaParser = require('easygraphql-parser')
const extension = require('./extension');
const path = require('path');
// function to render our frontend GUI depending on their endpoint
const renderSpectiQL = (uri) => {
    return 
`
 <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
    crossorigin="anonymous"
  />
    <title>SpectiQL</title>
    <link rel="stylesheet" href="./styling/index.css">
</head>
<body>
    <div></div>
    <div id="root"></div>
    <script type="text/javascript" src="../../build/bundle.js"></script>

  <script type="text/javascript" src="bundle.js"></script></body>
</html>
`

  }
  
  //sending our GUI to their desired endpoint (URI).
  const config = (uri) => {
    return (request, response) => {
      response.set('Content-Type', 'text/html')
      response.send(renderSpectiQL(uri));
    }
  }

  //builds a SDL schema into parsed schema where we can use to get the entire queries of a client's schema
  //filePath needs to be the entire file path. example: /Users/justinkwon/Documents/Codesmith/graphqltest/schema.gql
  //to use: require function into desired file and invoke the function with the entire file path
  //example: createSchema('/Users/justinkwon/Documents/Codesmith/graphqltest/index.js');
  const createSchema = (filePath) => {
    const buildSchema = fs.readFileSync(path.join(__dirname, "schema.gql"), {encoding: 'utf-8'});
    const parsedSchema = easygraphqlSchemaParser(buildSchema);
    return parsedSchema;
  }

  console.log(createSchema('schema.gql'));
  
  module.exports = { config, createSchema, extension };