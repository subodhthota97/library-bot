# SPRINT PLANNING

SPRINT TEAM MEMBERS
- Eshwar Chandra Vidhyasagar Thedla (ethedla)
- Harish Hasti (hhasti)
- Jinam Shah (jbshah)
- Subodh Thota (sthota)

Iteration worksheet is linked here: [WORKSHEET](https://github.ncsu.edu/csc510-s2022/CSC510-27/blob/dev/WORKSHEET.md)

SPRINT PLANNING CHECKLIST
- Organising the things to discuss
- Plan and schedule meeting
- Tasks done so far
- Updates required on the tasks left
- Tasks to be assigned and done

Agenda:
- Close the open questions and issues from previous meeting
- Share goals
- Discuss on the backlogs


March 21, 2022:

Participants:
- Eshwar Chandra Vidhyasagar Thedla (ethedla)
- Harish Hasti (hhasti)
- Jinam Shah (jbshah)
- Subodh Thota (sthota)

Notes:
- Discussion and recap of the work done
- Focussing on the edge cases of the previous work
- Tasks that need to be completed


March 22, 2022:

Participants:
- Eshwar Chandra Vidhyasagar Thedla (ethedla)
- Harish Hasti (hhasti)
- Jinam Shah (jbshah)
- Subodh Thota (sthota)

Notes:
- Creation of story boards
- Planning of the development of each task
- Assigning of the tasks


March 23, 2022:

Participants:
- Eshwar Chandra Vidhyasagar Thedla (ethedla)
- Harish Hasti (hhasti)
- Jinam Shah (jbshah)
- Subodh Thota (sthota)

Notes:
- Tried different methods for handling quotes, but haven't found a successful one yet. Need to work on this
- Referred to the packages API
- Handled edge case when empty post message sent to the server
- Methods to parse the message


March 24, 2022:

Participants:
- Eshwar Chandra Vidhyasagar Thedla (ethedla)
- Harish Hasti (hhasti)
- Jinam Shah (jbshah)
- Subodh Thota (sthota)

Notes:
- Need to improve the way of handling the quotes in the author
- Implemented the pseudocode by popularity
- Added a condition for safekeeping (when the text sent by the mattermost client is empty).
- Discussed the Methods to improve parsing algorithm for the message

Backlogs:
- Handle authorization for the server
<br><br>

 **Week 1 Worksheet**

| Deliverable   | Item/Status   |  Issues/Tasks
| ------------- | ------------  |  ------------
| Use Case      | Get help          | &nbsp;
| Scenario      | 1             |  [Commit for getHelp function](https://github.ncsu.edu/csc510-s2022/CSC510-27/commit/f5cd81af451a63cb7d6c8dcbf5118d85afa4e1b5)
| Scenario      | &nbsp;        | &nbsp;
| Unit Tests    | Complete      | check helper
|               |               | &nbsp;
| Use Case      | Get list of packages          | &nbsp;
| Scenario      | 1             |  [PR #7](https://github.ncsu.edu/csc510-s2022/CSC510-27/pull/7), Issue #6
| Scenario      | 2             |  [Commit for getHelp function](https://github.ncsu.edu/csc510-s2022/CSC510-27/commit/f5cd81af451a63cb7d6c8dcbf5118d85afa4e1b5)
| Scenario      | &nbsp;        | &nbsp;
| Unit Tests    | Complete      | simple list packages
|               |               | &nbsp;
| Use Case      | Get list of dependencies          | &nbsp;
| Scenario      | 1             |  [Commit for getDependencyList function](https://github.ncsu.edu/csc510-s2022/CSC510-27/commit/9e7037c7d5e3a275bd15a086c3624ce6040999cc), [PR #12](https://github.ncsu.edu/csc510-s2022/CSC510-27/pull/12), Issue #10
| Scenario      | 2             |  [Commit for getHelp function](https://github.ncsu.edu/csc510-s2022/CSC510-27/commit/f5cd81af451a63cb7d6c8dcbf5118d85afa4e1b5)
| Scenario      | &nbsp;        | &nbsp;
| Unit Tests    | Complete      | check dependencies of package
|               |               | &nbsp;
| Use Case      | Report a package          | &nbsp;
| Scenario      | 1             |  [Commit for getReportBugURL function](https://github.ncsu.edu/csc510-s2022/CSC510-27/commit/1e65dc47de72956a6a3b7b58f57b1e59a4668b3f), Issue #5
| Scenario      | 2             |  [Commit for getHelp function](https://github.ncsu.edu/csc510-s2022/CSC510-27/commit/f5cd81af451a63cb7d6c8dcbf5118d85afa4e1b5)
| Scenario      | &nbsp;        | &nbsp;
| Unit Tests    | Complete      | check that bug reporting url

<br><br>

March 25, 2022:

Participants:
- Eshwar Chandra Vidhyasagar Thedla (ethedla)
- Harish Hasti (hhasti)
- Jinam Shah (jbshah)
- Subodh Thota (sthota)

Notes:
- Implemented the handling the quotes in the author. Need to use only one function for with quotes and without quotes
- Referring to different sort algorithms to sort by popularity
- Started research for testing methodologies for server reliability
- Basic code cleanup, and gathered list of user messages that can be parseable

Backlogs:
- Handle with quotes and without quotes using if else conditional statements
- Handle sorts for results with no popularity


March 26, 2022:

Participants:
- Eshwar Chandra Vidhyasagar Thedla (ethedla)
- Harish Hasti (hhasti)
- Jinam Shah (jbshah)
- Subodh Thota (sthota)

Notes:
- Implemented the handling the quotes in the author. Need to use only one function for with quotes and without quotes
- Referring to different sort algorithms to sort by popularity
- Continued to try different methods for testing the server error handling
- Extended parsing logic for simple package API

Backlogs:
- Handle with quotes and without quotes using if else conditional statements
- Handle sorts for results with no popularity

March 28, 2022:

Participants:
- Eshwar Chandra Vidhyasagar Thedla (ethedla)
- Harish Hasti (hhasti)
- Jinam Shah (jbshah)
- Subodh Thota (sthota)

Notes:
- Handled with and without quotes for the author. Have to write test cases
- Referring to different sort algorithms to sort by popularity
- Started writing test cases for edge cases in server
- Extended parsing logic for author package API

Backlogs:
- Handle sorts for results with no popularity
- Handle authorization for the server

March 29, 2022:

Participants:
- Eshwar Chandra Vidhyasagar Thedla (ethedla)
- Harish Hasti (hhasti)
- Jinam Shah (jbshah)
- Subodh Thota (sthota)

Notes:
- Implement test cases for handling with and without quotes
- Implemented sort by popularity. Need to write test cases
- Finished with test case for one edge case in server. 
- Started working on writing test case for incoming POST request to the server.
- Extended parsing logic for report package API

Backlogs:
- Handle authorization for the server

March 30, 2022:

Participants:
- Eshwar Chandra Vidhyasagar Thedla (ethedla)
- Harish Hasti (hhasti)
- Jinam Shah (jbshah)
- Subodh Thota (sthota)

Notes:
- Improving the test cases for handling with and without quotes
- Need to write test cases for sort by popularity
- Continued writing test case for incoming POST request to server.
- Extended parsing logic for dependency package API

Backlogs:
- Handle authorization for the server


March 31, 2022:

Participants:
- Eshwar Chandra Vidhyasagar Thedla (ethedla)
- Harish Hasti (hhasti)
- Jinam Shah (jbshah)
- Subodh Thota (sthota)

Notes:
- Check for  edge cases in handling with and without quotes
- Check for  edge cases in handling sort by popularity
- Completed writing test cases for server.js
- Reorganised parsingFuntion logic by moving it to different file

<br><br>
 **Week 2 worksheet**

| Deliverable   | Item/Status   |  Issues/Tasks
| ------------- | ------------  |  ------------
| Use Case      | Get list of packages for author          | &nbsp;
| Scenario      | 1             |  [Commit for getListOfPackagesForAnAuthor function](https://github.ncsu.edu/csc510-s2022/CSC510-27/commit/fc06da19bc2b361a8b150c6f8a3fc441979a891b), [PR #17](https://github.ncsu.edu/csc510-s2022/CSC510-27/pull/17), Issue #9
| Scenario      | 2             |  [Commit for getHelp function](https://github.ncsu.edu/csc510-s2022/CSC510-27/commit/f5cd81af451a63cb7d6c8dcbf5118d85afa4e1b5)
| Scenario      | &nbsp;        | &nbsp;
| Unit Tests    | Complete      | list packages for author
|               |               | &nbsp;
| Use Case      | Get list of packages sorted         | &nbsp;
| Scenario      | 1             |  [Commit for getParamsForPopularitySortPackage function](https://github.ncsu.edu/csc510-s2022/CSC510-27/commit/d34e59653373c4d5f9a0af9cba5a9088e3c9bc8d), [PR #20](https://github.ncsu.edu/csc510-s2022/CSC510-27/pull/20)
| Scenario      | 2             |  [Commit for getHelp function](https://github.ncsu.edu/csc510-s2022/CSC510-27/commit/f5cd81af451a63cb7d6c8dcbf5118d85afa4e1b5)
| Scenario      | &nbsp;        | &nbsp;
| Unit Tests    | Complete      | list packages by popularity
