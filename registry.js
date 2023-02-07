const axios = require('axios');
const chalk = require('chalk');
// const qs = require('querystring');

config = {}
var urlRoot = "https://api.npms.io/v2";

function getDefaultOptions(endpoint, method)
{
	var options = {
		url: urlRoot + endpoint,
		method: method,
		headers: {
			"User-Agent": "Library Bot - Team CSC510-27",
			"content-type": "application/json",
		}
	};
	return options;
}

function getHelp() {
	const helpMessage = "Welcome to Library Bot. Here are the list of commands you can use \n "
	+ "list packages for {keyword} or get packages for {keyword} or packages for {keyword} -> list of packages with command using @keyword for package \n"
	+ "list packages for {keyword} by {author} or packages by {author} for {keyword} -> list of packages with command using @keyword for package and @author for authorname\n"
	+ "report issue for {keyword} or report bug for {keyword}  -> to report an issue for the {keyword} package. Package name should match \n"
	+ "dependencies for {keyword} or get dependencies for {keyword} -> to get dependencies for @keyword package";
  return helpMessage;
}

function getListOfPackages(keyword) {
	//api call needs '+' if there are spaces, so replaces apce with '+'
	// keyword = "machine learning";
	keyword.replace(/\s/g, '+');
  
	let options = getDefaultOptions(`/search?q=${keyword}`, "GET");

	return new Promise(function(resolve,reject)
	  {
		  axios(options)
			  .then(function (response) {
<<<<<<< HEAD
				console.log(response);
=======
				// console.log(response);
>>>>>>> 7ec890562652503a9485673583800dc434b1d6e5
				const results = response.data.results;
				if (results.length == 0) {
					result_text =  "Sorry, We couldn't find any results matching your input. Please try the help command";
					resolve(result_text);
				}
				result_text ="Here is something I found that might help you. use npm install followed by any package name below \n";
				for (const result of results) {
					// console.log(result);
					var package = result['package'];
					var links = package['links'];
					result_text += `${package.name}` + " documentation -> "+ `${links.npm}` +"\n";
				}
				resolve(result_text);
					})
					.catch(function (error) {
						reject(error);
						return; 
				});
	});
	
  }
  
  function getListOfPackagesByPopularity(keyword) {
	//api call needs '+' if there are spaces, so replaces apce with '+'
	// keyword = "machine learning";
	keyword.replace(/\s/g, "+");
  
	let options = getDefaultOptions(`/search?q=${keyword}`, "GET");
  
	return new Promise(function (resolve, reject) {
	  axios(options)
		.then(function (response) {
		  console.log(response);
		  const results = response.data.results;
		  if (results.length == 0) {
			result_text =
			  "Sorry, We couldn't find any results matching your input. Please try the help command";
			resolve(result_text);
		  }
		  results.sort(function (a, b) {
			  return a.score.detail.popularity - b.score.detail.popularity;
		  });
		  result_text =
			"Here is something I found that might help you. use npm install followed by any package name below \n";
		  for (const result of results) {
			// console.log(result);
			var package = result["package"];
			var links = package["links"];
			result_text +=
			  `${package.name}` + " documentation -> " + `${links.npm}` + "\n";
		  }
		  resolve(result_text);
		})
		.catch(function (error) {
		  reject(error);
		  return; // Terminate execution.
		});
	});
}

  function getListOfPackagesForAnAuthor(keyword, author) {
	//https://api.npms.io/v2/search?q=sass+author:"David Manning"
	//first replace spaces in keyword if present
	// keyword = "sass";
	// author = "\"David Manning\"";
	keyword.replace(/\s/g, '+');
	//now concatenate keyword and author 

	var searchString = keyword + "+author:" + `${author}`;
	// var searchString = keyword + "author:${author}`;
	// query = "https://api.npms.io/v2/search?q=sass+author:\"David manning\""
	let options = getDefaultOptions(`/search?q=${searchString}`, "GET");
	// let options = getDefaultOptions(query, "GET");
  
	return new Promise(function(resolve,reject)
	  {
		  axios(options)
			  .then(function (response) {
					const results = response.data.results
					if (results.length == 0) {
						result_text =  "Sorry, We couldn't find any results matching your input. Please try the help command";
						resolve(result_text);
					}
					result_text ="Here is something I found that might help you. use npm install followed by any package name below";
					for (const result of results) {
						var package = result['package'];
						var links = package['links'];
						result_text = `${package.name}` + " documentation -> "+ `${links.npm}` +"\n";
					}
					resolve(result_text);
						})
				.catch(function (error) {
					console.log(chalk.red(error));
					reject(error);
					return; // Terminate execution.
			});
	});
	
  }

  function getDependencyList(keyword) {
    //https://api.npms.io/v2/package/react
	// keyword = "chalk";
	// keyword = "react";
    let options = getDefaultOptions(`/package/${keyword}`, "GET");

    return new Promise(function (resolve, reject) {
      axios(options)
        .then(function (response) {
          data = response.data;

          if (!data.collected) {
            result_text =
              "Sorry, We couldn't find any results matching your input. Please try the help command";
            resolve(result_text);
          }
          const dependencies = JSON.stringify(data.collected.metadata.dependencies);

          result_text = `Here is list of dependencies -> ${dependencies}`;
          if (data.collected.hasOwnProperty(devDependencies)) {
            var devDependencies = data.collected.devDependencies;
            result_text += `Here is list of devDependencies -> ${devDependencies}`;
          }
          resolve(result_text);
        })
        .catch(function (error) {
          console.log(chalk.red(error));
          reject(error);
          return; // Terminate execution.
        });
    });
  }

  function getReportBugURL(keyword) {
	// keyword = "react";
	let options = getDefaultOptions(`/package/${keyword}`, "GET");
  
	return new Promise(function(resolve,reject)
	  {
		  axios(options)
			  .then(function (response) {
		  		const data = response.data
  
		//   console.log('headers: ' + JSON.stringify(response.headers));
		//   console.log('data: ' + JSON.stringify(data));
				const collected = data.collected
				if (!collected) {
					result_text =  "Sorry, We couldn't find any results matching your input. Please try the help command";
					resolve(result_text);
				} 
				const links = data.collected.metadata.links;
				if (!links.bugs) {
					result_text =  "Sorry, We couldn't find any bug report URL for the package";
					resolve(result_text);
				}
				result_text =`Here is URL to report the bug -> ${links.bugs}`;
				resolve(result_text);
					})
					.catch(function (error) {
						console.log(chalk.red(error));
						reject(error);
						return; // Terminate execution.
				});
	});
  }

module.exports.getHelp = getHelp;
module.exports.getListOfPackages = getListOfPackages;
module.exports.getReportBugURL = getReportBugURL;
module.exports.getListOfPackagesForAnAuthor = getListOfPackagesForAnAuthor;
module.exports.getDependencyList = getDependencyList;
module.exports.getListOfPackagesByPopularity = getListOfPackagesByPopularity;

// (async () => {
//     let w = await getWeather();
//     console.log(w);
// })();
