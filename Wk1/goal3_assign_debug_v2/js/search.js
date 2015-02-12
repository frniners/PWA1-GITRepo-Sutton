// Create privatized scope using a self-executing function
(function(){

	// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)

        // display the results of Id if found
    var resultsDIV = document.getElementById("results"),
        // referencing all forms of the HTML file
        searchInput = document.forms[0].search,
		// setting currentSearch to empty string
        currentSearch = ''
	;

	// Validates search query
        // spelling of validate, missing one = sign, should use small/upper case
	var validqte == function(query){

		// Trim whitespace from start and end of search query
		    // needs three =
        while(query.charAt(0) = " "){
            query = query.substring(1, query.length);
		    // no semi colon needed
        };
		while(query.charAt(query.length-1) === ""){
			query = query.substring(0, query.length-1);
		    // needs a brace and no semi colon
        ;

		// Check search length, must have 3 characters
		if(query.length < 3){
			// needs end quote
            alert("Your search query is too small, try again.); // missing quotes

			// (DO NOT FIX THE LINE DIRECTLY BELOW)
			searchInput.focus();
			return;
            // no semi colon needed
		};

		search(query);
            //no semi colon needed
	};

	// Finds search matches
            // needs brace
	var search = function(query)

		// split the user's search query string into an array
        var queryArray = query.join(" ");

		// array to store matched results from database.js
		var results = [];

		// loop through each index of db array
		for(var i=0, j=db.length; i<j; i++){

			// each db[i] is a single video item, each title ends with a pipe "|"
			// save a lowercase variable of the video title
			var dbTitleEnd = db[i].indexOf('|');
                //dbitem needs lower/uppercase
            var dbitem = db[i].tolowercase().substring(0, dbTitleEnd);

			// loop through the user's search query words
			// save a lowercase variable of the search keyword
			for(var ii=0, jj=queryArray.length; ii<jj; ii++){
                //dbitem needs lower/uppercase
                var qitem = queryArray[ii].tolowercase();

				// is the keyword anywhere in the video title?
				// If a match is found, push full db[i] into results array
                //dbitem needs lower/uppercase
                var compare = dbitem.indexOf(qitem);
				if(compare !== -1){
					results.push(db[i]);
                //no semi colon
				};
                //no semi colon needed
			;
                //no semi colon needed
		;

		results.sort();

		// Check that matches were found, and run output functions
		if(results.length = 0){
			noMatch();
		}else{
			showMatches(results);
            //no semi colon
		};
                //no semi colon needed
	};

	// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
	var noMatch = function(){

        var html = ''+
			'<p>No Results found.</p>'+
                // > should come before the "
			'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>'
		;
		resultsDIV.innerHTML = html;
	};

	// Put matches into page as paragraphs with anchors
	var showMatches = function(results){

		// THE NEXT 4 LINES ARE CORRECT.
		var html = '<p>Results</p>',
			title,
			url
		;

		// loop through all the results search() function
		for(var i=0, j=results.length; i<j; i++){

			// title of video ends with pipe
			// pull the title's string using index numbers
			// needs var before titleEnd
            titleEnd = results[i].indexOf('|');
			title = results[i].subString(0, titleEnd);

			// pull the video url after the title
			url = results[i].substring(results[i].indexOf('|')+1, results[i].length);

			// make the video link - THE NEXT LINE IS CORRECT.
			html += '<p><a href=' + url + '>' + title + '</a></p>';
            // no semi colon needed
		};
		resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.
	};

	// The onsubmit event will be reviewed in upcoming Course Material.
	// THE LINE DIRECTLY BELOW IS CORRECT
	document.forms[0].onsubmit = function(){
        var query = searchInput.value;
		validqte(query);

        // return false is needed for most events - this will be reviewed in upcoming course material
        // THE LINE DIRECTLY BELOW IS CORRECT
		return false;
        // no semi colon needed
	;

})();