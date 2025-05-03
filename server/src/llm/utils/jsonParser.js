
import mdjs from '@moox/markdown-to-json';

export const jsonParser = (response) => {
  if (typeof response !== 'string') {
    console.error('Invalid response: Expected a string.');
    return null; // or throw an error
  }

  console.log(`Response is ${response}`);

  // Define a regular expression to match the JSON string
  const jsonRegex = /\`\`\`json\n([\s\S]+)\n\`\`\`/;

  // Extract the JSON string using the regular expression
  const match = response.match(jsonRegex);

  if (match && match[1]) {
    // Parse the JSON string
    const jsonStr = match[1];
    
    console.log(`jsonStr is `,jsonStr);
    try {
      const jsonObj = JSON.parse(jsonStr);
      
      // Log the parsed JSON object
      console.log("parse json is : ",jsonObj);
      // console.log(`jsonOBJ type is ${typeof jsonObj}`);
      
      return jsonObj;
    } catch (error) {
      console.error('Error parsing JSON:', error);
      return null; // or handle the error appropriately
    }
  } else {
    console.error('No JSON object found in the response.');
    return null; // or handle as needed
  }
}


export const parseMarkdownToJson = (response) => {
  // Validate input type

  if (typeof response !== 'string') {
    console.error('Invalid response: Expected a string.');
    return null;
  }

  try {
    // Parse the markdown response to JSON
    const jsonObj = mdjs.markdownAsJsTree(response);

    // Log the original response and parsed JSON object
    // console.log(`Response is: ${response}`);
    // console.log('Parsed JSON Object:', JSON.stringify(jsonObj, null, 2)); // Pretty print JSON

    return (JSON.stringify(jsonObj, null, 2));
  } catch (error) {
    console.error(`Error parsing JSON: ${error}`);
    return null;
  }
};


// // Call the function
// const parsedData = parseMarkdownToJson();

// // Check the parsed response
// if (parsedData) {
//   console.log('Parsed Data:', JSON.stringify(parsedData, null, 2));
// }