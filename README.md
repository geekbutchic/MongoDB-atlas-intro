# MongoDB-Atlas-Intro

A) Write a script in NoSqlBooster that does the following: Insert a new blog post ✅. 
B) Read the new blog post. ✅
C) Update the new blog post with a new title. ✅
D) Delete the new blog post. ✅

* Once you have the script complete, create a new github repo with your solution and upload it to populi.

* Stretch Goal: Implement the above but for multiple posts


#PART 2
* Write a new function getPosts(limit, skip, sortField, sortOrder, filterField, filterValue).

* When getPosts is invoked it should. ✅

* Return all blog posts if there are no arguments given. ✅


* If limit is given, the returned posts length should be equal or less than limit. ✅


* If skip is given, the returned posts should be the next page of results given a limit.✅


* If sortField and sortOrder are given, the returned posts should be sorted on the field given by sortField and ordered by sortOrder. E.G. sortField="date", sortOrder=1 should sort the result by date in ascending order. ✅

* If filterParam is given, the result should be filter the result based upon the filterParam field. E.G. if filterParam="category" and the filterValue="dog" the result should only show posts in which the category is dog.