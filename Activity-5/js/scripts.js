/**
 * Wrap everything in an IIFE (Immediately Invoked Function Expression) to keep
 * our variables constrained to the scope of this function and out of the global scope.
 */
(function() {

    /******************************************************
    * Package data and constructor objects
    *******************************************************/
  
   // notes for code below. be sure to end everything in this array with a , arrays in js for html can be anything strings, doubles, ints etc. 
    //package data array (simulated data source, such as JSON or database recordset)
    var data = [
    {
        name: 'emmet',
        description: 'Emmet is the number one code snippet tool.',
        author: 'emmetio',
        url: 'https://atom.io/packages/emmet',
        downloads: 1662209,
        stars: 2534,
        price: 10.50,
        selector: 'p1'
    },
    {
        name: 'atom-beautify',
        description: 'The atom-beautify package will clean up your code, and make it more readable.',
        author: 'Glavin001',
        url: 'https://atom.io/packages/atom-beautify',
        downloads: 4228040,
        stars: 4541,
        price: 6.75,
        selector: 'p2'
    }

    var data = 
    /**
     * tried changing these to different stored variables same names ask why it did not work. 
     */
    ];
    /**
     * Notes for code below. be sure like in java everything ends with a ; if you dont it wigs out
     */
    // (Atom) Package constructor function
    function Package(data) 
    {
        this.name = data.name;
        this.description = data.description;
        this.author = data.author;
        this.url = data.url;
        this.downloads = data.downloads;
        this.stars = data.stars;
        this.selector = data.selector; // *** REMEMBER TO ADD THIS IF YOU ADDED IT TO THE DATA OBJECTS ** //
        
        this.getFormattedDownloads = function () 
        {
            return this.downloads.toLocaleString();
        };

        this.getFormattedStars = function () 
        {
            return this.stars.toLocaleString();
        };
    }
    // returns todays date, formatted
    var getTodaysDate = function() 
    {
        var today = new Date();
    return today.toDateString();
    };

    // Returns DOM Element by id
    var getEl = function (id) 
    {
        return document.getElementById(id);
    }

    //writs the package objects data to the approperate DOM elements utilizing the package selector property

    var writePackageInfo = function(package) 
        {
        // Get reference to DOM elements
        var selector = package.selector,
        nameEl = getEl(selector + '-name'),
        descEl = getEl(selector + '-description'),
        authEl = getEl(selector + '-author'),
        downloadEl = getEl(selector + '-downloads'),
        starsEl = getEl(selector + '-stars');

        // Write package data to DOM elements
        nameEl.textContent = package.name;
        descEl.textContent = package.description;
        authEl.textContent = package.author;
        downloadEl.textContent = package.getFormattedDownloads();
        starsEl.textContent = package.getFormattedStars();
    }


    // write date
    dateEl = getEl('date');
    dateEl.textContent = getTodaysDate();



    for (var i = 0; i < data.length; i++) 
    {
        var package = new Package(data[i]);
        writePackageInfo(package);
    }
        /**
         * explanation for for loop so i dont look like i just took the easy method out
         * the way for loops work is they run until a condition is satisfied
         * in this case it starts out at 0 (does not start at one because arrays start at 0)
         * i++ is telling the loop to incriment basicaly telling it to +1 every time its ran
         * the length is determined by the data.length it basicaly tells the for loop how long the array is and tells it to run that many times.
         */
}());