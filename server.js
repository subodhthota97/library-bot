const http = require('http');
const qs = require('querystring');
const registry_api = require('./registry');
const parse_helper = require('./parse_helper');
// const { main } = require('.');

function generateResponseObject(response_text) {
    return {
        "response_type": "in_channel",
        "username": "npm-bot",
        "text": response_text
    }
}

async function main(jsonData){
  error_text = "No response from npm registry. Please check your input or try again later.";
  if ('text' in jsonData) {
    response_url = jsonData['response_url'];
    user_text = jsonData['text'];
    parameters = parseTextReceived(user_text);
    // console.log(parameters);
   if (parameters["case"] == "report-package") {
        let response_text = await registry_api.getReportBugURL(parameters["package_name"]).catch(
            err => error_text);
        if(response_text)
        {
            return generateResponseObject(response_text);
        }
    }
    else if (parameters["case"]== "dependencies-package") {
        let response_text = await registry_api.getDependencyList(parameters["package_name"]).catch(
          err => error_text);
        if(response_text)
        {
            return generateResponseObject(response_text);
        }
    }
    else if (parameters["case"] == "author-package") {
        let response_text = await registry_api.getListOfPackagesForAnAuthor(parameters["package_name"], parameters["author_name"]).catch(
            err => error_text);
        if(response_text)
        {
            return generateResponseObject(response_text);
        }
    }
    else if (parameters["case"] == "simple-package") {
        let response_text = await registry_api.getListOfPackages(parameters["package_name"]).catch(
            err => error_text);
        if(response_text)
        {
            // let response_text =  response_text;
            return generateResponseObject(response_text);
        }
    }
    else if (parameters["case"] == "popularity-package") {
      let response_text = await registry_api.getListOfPackagesByPopularity(parameters["package_name"]).catch(
          err => error_text);
      if(response_text)
      {
          // let response_text =  response_text;
          return generateResponseObject(response_text);
          // return returnValue
      }
      // console.log("response: " + response_data);
  }
    else {
        response_text = registry_api.getHelp(user_text);
        return generateResponseObject(response_text);
    }
  }
  response_text = "Incorrect input. Please try again!";
  return generateResponseObject(response_text);
    // console.log(jsonData);
    
}

function parseTextReceived(text)
{
  //first convert all chars to lower case

  text = text.toLowerCase();

  //an object to return in the end
  parameters = {};

 if (parse_helper.isReportPackageQuery(text)) {
    parameters = parse_helper.getParamsForReportPackage(text);
  }  else if (parse_helper.isPopularitySortForPackage(text)){
    parameters = parse_helper.getParamsForPopularitySortPackage(text);
  }  else if (parse_helper.isDependencyPackageQuery(text)) {
    parameters = parse_helper.getParamsForDependencyPackage(text);
  } else if (parse_helper.isSimpleGetPackageQuery(text)) {
    parameters = parse_helper.getParamsForSimpleGetPackage(text);
  } else if (parse_helper.isAuthorPackageQuery(text)) {
    parameters = parse_helper.getParamsForAuthorPackage(text);
  }
    else {
    //help case
    parameters["case"] = "help";
  }

 // else {
 //      //of form: list packages for ML by authorname
 //      package_name = text.substring(indexOfFor + 3, indexOfBy).trim();
 //      if (text.charAt(indexOfBy + 3) === '"') {
 //        author_name = text.substring(indexOfBy + 2).trim();
 //      } else {
 //        author_name = "\"";
 //        author_name += text.substring(indexOfBy + 2).trim();
 //        author_name += '"';
 //      }
  return parameters;
}

const server = http.createServer(function(request, response) {
  console.dir(request.param)

  if (request.method == 'POST') {

    var body = ''
    request.on('data', function(data) {
      body += data
    })
    request.on('end', async function() {
      if (body != null || body != '') {
        parsedBody = qs.parse(body);
        response_data = await main(parsedBody);
        // console.log(response_data);
        response.writeHead(200, {'Content-Type': 'application/json'})
        response.end(JSON.stringify(response_data));
      }
      else{
        response_data = {
          "status": "failed",
          "message": "enter correct body data"
        }
        response.writeHead(200, {'Content-Type': 'application/json'})
        response.end(JSON.stringify(response_data));
      }
      
    })
  } else {
    // get returns the status of the bot server
    response.writeHead(200, {'Content-Type': 'application/json'})
    response.end(JSON.stringify({'status': '200'}));
  }
})

if (process.env.NODE_ENV != 'test') {
    const port = 8000
    const host = '127.0.0.1'
    // const host = '0.0.0.0'
    server.listen(port, host)
    console.log(`Listening at http://${host}:${port}`)

}

module.exports.parseTextReceived = parseTextReceived;
module.exports.main = main;
module.exports.server = server;
