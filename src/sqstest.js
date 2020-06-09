'use strict';

let counter = 1
let messageCount = 0
let funcId = 'id'+parseInt(Math.random()*1000)
 
module.exports.hello = (event, context, callback) => {
  
  // Record number of messages received
  if (event.Records) {
      messageCount += event.Records.length
  }
  console.log("Function ID =: " + funcId + ' REUSE: ', counter++);
  
  //console.log('Message Count: ', messageCount);
  //console.log(JSON.stringify(event));
  //console.log(JSON.stringify(event.Records[0].body));
  //console.log(JSON.stringify(context));

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };

  setTimeout(function(){    
    console.log("----- Processing is DONE -----");
    callback(null, response);
    return response; 
  }, 5000);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
