function getParamsForAuthorPackage(text) {
    //of form: list packages for ML by  authorname
    indexOfFor = text.indexOf("for");
    indexOfBy = text.indexOf("by");
    package_name = "";
    author_name="";
    if (indexOfFor > indexOfBy) {
      // of form: list packages by authorname for ML
      author_name = text.substring(indexOfBy + 2, indexOfFor).trim();
      package_name = text.substring(indexOfFor + 3).trim();
    } else {
      //of form: list packages for ML by authorname
      package_name = text.substring(indexOfFor + 3, indexOfBy).trim();
      if (text.charAt(indexOfBy + 3) === '"') {
        author_name = text.substring(indexOfBy + 2).trim();
      } else {
        author_name = '"';
        author_name += text.substring(indexOfBy + 2).trim();
        author_name += '"';
      }
    }
  
    parameters["package_name"] = package_name;
    parameters["author_name"] = author_name;
    parameters["case"] = "author-package";
    return parameters;
  }
  
  function getParamsForReportPackage(text) {
    // if the user input has 'for' keyword
    // of form: report issue for ML
    // of form: report for ML 
    // of form: issue for ML 
    // of form: bug for ML 
    indexOfFor = text.indexOf("for");
    if (indexOfFor >= 0) {
      package_name = text.substring(indexOfFor + 3).trim();
      parameters["package_name"] = package_name;
      parameters["case"] ="report-package";
      return parameters;
    } else {
    // if the user input doesn't have 'for' keyword
      if (containsReportText(text)) {
        indexOfReport = text.indexOf("report");
        if (!containsBugText(text) && !containsIssueText(text)) {
          // of form: report ML
          package_name = text.substring(indexOfReport + 6).trim();
          parameters["package_name"] = package_name;
          parameters["case"] ="report-package";
          return parameters;
        } 
        else if (containsBugText(text) && !containsIssueText(text)) {
          indexOfBug = text.indexOf("bug");
          if (indexOfBug > indexOfReport) {
            // of form: report Bug ML 
            package_name = text.substring(indexOfBug + 3).trim();
            parameters["package_name"] = package_name;
            parameters["case"] ="report-package";
            return parameters;
          } else {
            // of form: bug report ML
            package_name = text.substring(indexOfReport + 6).trim();
            parameters["package_name"] = package_name;
            parameters["case"] ="report-package";
            return parameters;
          } 
        } 
  
        else if (!containsBugText(text) && containsIssueText(text)) {
          indexOfIssue = text.indexOf("issue");
          if (indexOfIssue > indexOfReport) {
            // of form: report issue ML 
            package_name = text.substring(indexOfIssue + 5).trim();
            parameters["package_name"] = package_name;
            parameters["case"] ="report-package";
            return parameters;
          } else {
            // of form: issue report ML
            package_name = text.substring(indexOfReport + 6).trim();
            parameters["package_name"] = package_name;
            parameters["case"] ="report-package";
            return parameters;
          } 
        }
      } else {
        // doesn't have report keyword 
        if (containsIssueText(text)) {
            indexOfIssue = text.indexOf("issue");
          if (containsBugText(text)) {
             indexOfBug = text.indexOf("bug");
             if (indexOfIssue > indexOfBug) {
              package_name = text.substring(indexOfIssue + 5).trim();
              parameters["package_name"] = package_name;
              parameters["case"] ="report-package";
              return parameters;
             } else {
              package_name = text.substring(indexOfBug + 3).trim();
              parameters["package_name"] = package_name;
              parameters["case"] ="report-package";
              return parameters;
             }
          } else {
            // only issue keyword 
            // of form: issue ML
            package_name = text.substring(indexOfIssue + 5).trim();
            parameters["package_name"] = package_name;
            parameters["case"] ="report-package";
            return parameters;
          }
        } else {
          // only has bug keyword 
          // of form: bug ML
            indexOfBug = text.indexOf("bug");
            package_name = text.substring(indexOfBug + 3).trim();
            parameters["package_name"] = package_name;
            parameters["case"] ="report-package";
            return parameters;
        }
      }
    }
  }
  
  function getParamsForDependencyPackage(text) {
    // if the user input has 'for' keyword
    // of form: get dependencies for ML
    // of form: get dependency packages for ML
    // of form: get dependency for ML
    indexOfFor = text.indexOf("for");
    if (indexOfFor >= 0) {
      package_name = text.substring(indexOfFor + 3).trim();
      parameters["package_name"] = package_name;
      parameters["case"] ="dependencies-package";
      return parameters;
    } else {
      if (containsDependenciesText(text) && !containsDependencyText(text)) {
        // has dependencies key word
        indexOfDependencies = text.indexOf("dependencies");
        if (!containsPackageText(text) && !containsPackagesText(text)) {
          // of form: get dependencies ML
          package_name = text.substring(indexOfDependencies + 12).trim();
          parameters["package_name"] = package_name;
          parameters["case"] ="dependencies-package";
          return parameters;
        } 
        if (containsPackageText(text) && !containsPackagesText(text)) {
          // of form: get dependencies package ML
          indexOfPackage = text.indexOf("package");
          if (indexOfPackage > indexOfDependencies) {
            package_name = text.substring(indexOfPackage + 7).trim();
            parameters["package_name"] = package_name;
            parameters["case"] ="dependencies-package";
            return parameters;
          } else {
            // of form: get package dependencies ML
            package_name = text.substring(indexOfDependencies + 12).trim();
            parameters["package_name"] = package_name;
            parameters["case"] ="dependencies-package";
            return parameters;
          }
        } 
        if (containsPackagesText(text)) {
          // of form: get dependencies packages ML
          indexOfPackages = text.indexOf("packages");
          if (indexOfPackages > indexOfDependencies) {
            package_name = text.substring(indexOfPackages + 8).trim();
            parameters["package_name"] = package_name;
            parameters["case"] ="dependencies-package";
            return parameters;
          } else {
            // of form: get packages dependencies ML
            package_name = text.substring(indexOfDependencies + 12).trim();
            parameters["package_name"] = package_name;
            parameters["case"] ="dependencies-package";
            return parameters;
          }
        }
      } 
      else if (!containsDependenciesText(text) && containsDependencyText(text)) {
        // has dependency key word
        indexOfDependency = text.indexOf("dependency");
        if (!containsPackageText(text) && !containsPackagesText(text)) {
          // of form: get dependency ML
          package_name = text.substring(indexOfDependency + 10).trim();
          parameters["package_name"] = package_name;
          parameters["case"] ="dependencies-package";
          return parameters;
        } 
        if (containsPackageText(text) && !containsPackagesText(text)) {
          // of form: get dependency package ML
          indexOfPackage = text.indexOf("package");
          if (indexOfPackage > indexOfDependency) {
            package_name = text.substring(indexOfPackage + 7).trim();
            parameters["package_name"] = package_name;
            parameters["case"] ="dependencies-package";
            return parameters;
          } else {
            // of form: get package dependencies ML
            package_name = text.substring(indexOfDependency + 10).trim();
            parameters["package_name"] = package_name;
            parameters["case"] ="dependencies-package";
            return parameters;
          }
        } 
        if (containsPackagesText(text)) {
          // of form: get dependencies packages ML
          indexOfPackages = text.indexOf("packages");
          if (indexOfPackages > indexOfDependency) {
            package_name = text.substring(indexOfPackages + 8).trim();
            parameters["package_name"] = package_name;
            parameters["case"] ="dependencies-package";
            return parameters;
          } else {
            // of form: get packages dependencies ML
            package_name = text.substring(indexOfDependency + 10).trim();
            parameters["package_name"] = package_name;
            parameters["case"] ="dependencies-package";
            return parameters;
          }
        }
      }
    }
    
  }
  
  function getParamsForSimpleGetPackage(text) {
    // of form: get package for ML or list packages for ML
    indexOfFor = text.indexOf("for");
    if (indexOfFor >= 0) {
      package_name = text.substring(indexOfFor + 3).trim();
      parameters["package_name"] = package_name;
      parameters["case"] = "simple-package";
      return parameters;
    } else {
      // if the keyword 'for' is not present 
      if (containsPackageText(text) && !containsPackagesText(text)) {
        // of form: get dependency package ML
        indexOfPackage = text.indexOf("package");
        package_name = text.substring(indexOfPackage + 7).trim();
        parameters["package_name"] = package_name;
        parameters["case"] = "simple-package";
        return parameters;
        
      } 
      if (containsPackagesText(text)) {
        // of form: get dependencies packages ML
        // console.log(text);
        indexOfPackages = text.indexOf("packages");
        
        package_name = text.substring(indexOfPackages + 8).trim();
        parameters["package_name"] = package_name;
        parameters["case"] = "simple-package";
        return parameters;
      } 
    }
    
  }

  function getParamsForPopularitySortPackage(text){
    // of form: get package(s) for ML sorted by popularity or list package(s) for ML sorted by popularity
    indexOfFor = text.indexOf("for");
    indexOfSorted = text.indexOf("sorted");
    indexOfPopularity = text.indexOf("popularity");
    if (indexOfFor >= 0) {
      if (indexOfSorted >= 0){
        if (indexOfSorted > indexOfFor + 3) {
          package_name = text.substring(indexOfFor + 3, indexOfSorted).trim();
        }
        else{
          package_name = text.substring(indexOfFor + 3).trim();
        }
      }
      else{
        package_name = text.substring(indexOfFor + 3, indexOfPopularity).trim();
      }
      
      parameters["package_name"] = package_name;
      parameters["case"] = "popularity-package";
      return parameters;
    } else {
      // if the keyword 'for' is not present 
      if (containsPackageText(text) && !containsPackagesText(text)) {
        // of form: get dependency package ML
        indexOfPackage = text.indexOf("package");
        if (indexOfSorted >=0){
          if (indexOfSorted >= indexOfPackage + 7) {
            package_name = text.substring(indexOfPackage + 7, indexOfSorted).trim();
          }
          else{
            package_name = text.substring(indexOfPackage + 7).trim();
          }  
        }
        else{
          package_name = text.substring(indexOfPackage + 7, indexOfPopularity).trim();
        }
        parameters["package_name"] = package_name;
        parameters["case"] = "popularity-package";
        return parameters;
        
      } 
      else if (containsPackagesText(text)) {
        // of form: get dependencies packages ML
        indexOfPackages = text.indexOf("packages");
        if (indexOfSorted >=0){
          if (indexOfSorted >= indexOfPackages + 8) {
            package_name = text.substring(indexOfPackages + 8, indexOfSorted).trim();
          }
          else{
            package_name = text.substring(indexOfPackages + 8).trim();
          }  
        }
        else{
          package_name = text.substring(indexOfPackages + 8, indexOfPopularity).trim();
        }
        parameters["package_name"] = package_name;
        parameters["case"] = "simple-package";
        return parameters;
      } 
    }
    
  }

  function isPopularitySortForPackage(text){
    return containsPackageText(text) && !containsDependencyDependenciesText(text) && containsPopularityText(text)
    // && !containsAuthorText(text)
  }
  
  function isSimpleGetPackageQuery(text) {
    // get packages for ML or list packages for ML or packages for ML
    // packages ML or ML packages
    return containsPackageText(text) && !containsAuthorText(text) && !containsDependencyDependenciesText(text);
  }
  
  function isAuthorPackageQuery(text) {
    return (text.indexOf("for") >= 0) && containsAuthorText(text) && !containsDependencyDependenciesText(text)
  }
  
  function isDependencyPackageQuery(text) {
    return containsDependencyDependenciesText(text);
  }
  
  function isReportPackageQuery(text) {
    return containsBugIssueReport(text) && !containsDependencyDependenciesText(text);
  }
  
  // function containsPackageText(text) {
  //   return text.indexOf("for") >=0;
  // }

  function containsPopularityText(text){
    return text.indexOf("popularity") >= 0;
  }

  function containsAuthorText(text) {
    return text.indexOf("by") >= 0;
  }
  
  function containsBugIssueReport(text) {
    return (containsBugText(text) || containsIssueText(text) || containsReportText(text));
  }
  function containsBugText(text) {
      return (text.indexOf("bug") >= 0);
  }
  
  function containsIssueText(text) {
    return (text.indexOf("issue") >= 0);
  }
  function containsReportText(text) {
    return (text.indexOf("report") >= 0);
  }
  
  function containsDependenciesText(text) {
    return text.indexOf("dependencies") >= 0;
  }
  
  function containsDependencyText(text) {
    return text.indexOf("dependency") >= 0;
  }
  
  function containsDependenciesText(text) {
    return text.indexOf("dependencies") >= 0;
  }
  
  function containsDependencyDependenciesText(text) {
    return containsDependenciesText(text) || containsDependencyText(text);
  }
  
  function containsPackageText(text) {
    return text.indexOf("package") >= 0;
  }
  
  function containsPackagesText(text) {
    return text.indexOf("packages") >= 0;
  }


module.exports.getParamsForAuthorPackage = getParamsForAuthorPackage;
module.exports.getParamsForReportPackage = getParamsForReportPackage;
module.exports.getParamsForDependencyPackage = getParamsForDependencyPackage;
module.exports.getParamsForSimpleGetPackage = getParamsForSimpleGetPackage;
module.exports.getParamsForPopularitySortPackage = getParamsForPopularitySortPackage;
module.exports.isReportPackageQuery = isReportPackageQuery;
module.exports.isSimpleGetPackageQuery = isSimpleGetPackageQuery;
module.exports.isAuthorPackageQuery = isAuthorPackageQuery;
module.exports.isDependencyPackageQuery = isDependencyPackageQuery;
module.exports.isPopularitySortForPackage = isPopularitySortForPackage;

