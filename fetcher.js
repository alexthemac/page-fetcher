//Allows us to use request commands
const request = require('request');
//Allows us to use fs (filesystem) commands
const fs = require('fs');

//take command line arguments and store them in inputArray
const inputArray = process.argv;
//url to read data from, passed as first argument in command line
const url = inputArray[2];
//file to store data in, passed as second argument in command line
const localFilePath = inputArray[3];


request(url, (error, response, body) => {

  //These 3 console logs not required for this problem:
  //console.log('error:', error); // Print the error if one occurred
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.
  
  //write the body of the url to the local file path:
  fs.writeFile(localFilePath, body, err => {
    if (err) {
      console.error(err);
      return;
    }
    //Log the size of the written file and the filename:
    console.log(`Donwloaded and saved ${body.length} bytes to ${localFilePath}`);
  });
});
