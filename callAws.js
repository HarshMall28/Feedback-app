const AWS = require("aws-sdk");
let config = {
    region: "us-east-1",
    accessKeyId: "AKIA3J3ZCURTH6R5D5VC",
    secretAccessKey: "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",
  };
  
AWS.config.update(config);
var lambda = new AWS.Lambda();

function callLambda(input){

    var params3 = {
        FunctionName: 'cpp-project-lambda-dynamodb', /* required */
        //ClientContext: btoa('{"name":"Harshdynamo"}'),
        InvocationType: 'RequestResponse',
        LogType: 'None',
        Payload: JSON.stringify(input) /* Strings will be Base-64 encoded on your behalf */

    };
    lambda.invoke(params3, function (err, data) {
        if (err) {
            console.log(err, err.stack);
            return {"message" : err};
        } // an error occurred
        else {
            console.log("stored in dynamodb successfully");
            return {"message" : "successful"};
        }
    });
}

module.exports = { callLambda };