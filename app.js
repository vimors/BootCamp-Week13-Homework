// from data.js
var tableData = data;

// YOUR CODE HERE!

// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", handleSearchClick);  


function handleSearchClick(){
  // Prevent the page fromrefreshing 
  d3.event.preventDefault();
  var filteredData = tableData;
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValueDate = inputElement.property("value");
  
  var inputValueCity = d3.select("#inputCity").property("value");
  
  var inputValueState = d3.select("#inputState").property("value");
  
  var inputValueCountry = d3.select("#inputCountry").property("value");
  
  var inputValueShape = d3.select("#inputShape").property("value");
  if (inputValueDate != ""){
	filteredData = filteredData.filter(finding => finding.datetime === inputValueDate);
  }
  if (inputValueCity != ""){
	filteredData = filteredData.filter(finding => finding.city === inputValueCity);
  }  
  if (inputValueState != ""){
	filteredData = filteredData.filter(finding => finding.state === inputValueState);
  }  
  if (inputValueCountry != ""){
	filteredData = filteredData.filter(finding => finding.country === inputValueCountry);
  }  
  if (inputValueShape != ""){
	filteredData = filteredData.filter(finding => finding.shape === inputValueShape);
  }    
  var tbody = d3.select("tbody");
  tbody.html("");
   console.log(filteredData);
   filteredData.forEach(function(ufoReport) {
  
	var row = tbody.append("tr");
	Object.entries(ufoReport).forEach(function([key, value]) { 
		var cell = tbody.append("td");
		cell.text(value);
		});	
   });  	
	
	
}