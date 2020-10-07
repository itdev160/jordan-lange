/**
 * Wrap everything in an IIFE (Immediately Invoked Function Expression)
 */
(function() {
    /**************************************
     * Package data and constructor objects
     **************************************/
    // notes for code below. be sure to end everything in this array with a , arrays in js for html can be anything strings, doubles, ints etc. 
    //package data array (simulated data source, such as JSON or database recordset)
    var data = [
        {
            name: 'Settings Sync',
            description: 'Syncs Settings between multiple workstations',
            author: 'Shan Khan',
            url: 'https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync',
            downloads: 2012098,
            stars: 638,
            price: 0.00,
            selector 'p1'
        },
        {
            name:'HTML Snippets',
            descritpion:'Includes colorization, snippets, and full html5 tags',
            author:'Mohamed Abusaid',
            url:'https://marketplace.visualstudio.com/items?itemName=abusaidm.html-snippets',
            downloads:4115355,
            stars: 60,
            price: 0.00,
            selector: 'p2'
        }
    ];
    /**
     * Notes for code below. be sure like in java everything ends with a ; if you dont it wigs out
     */
    //(Atom) Package Constructor function
    
    function Package(data) {
        this.name = data.name;
        this.description = data.description;
        this.author = data.author;
        this.url = data.url;
        this.downloads = data.downloads;
        this.stars = data.stars;
        this.selector = data.selector; // REMEMBER TO ADD THIS IF YOU ADDED IT TO THE DATA OBJECTS

        this.getFormattedDownloads = function() 
        {
            return this.downloads.toLocaleString();
        };
        
        this.getFormattedStars = function()
        {
            return this.stars.toLocaleString();
        };
    }
    // returns todays date, formatted
    var getTodaysDate = function () 
    {
        var today  = new Date();
        return today.toDateString();
    };
    
    //returns DOM Element by id
    var getEl = function (id)
    {
        return document.getElementById(id);
    };

    //writs the package objects data to the approperate DOM elements utilizing the package selector property
    var writePackageInfo = function (package)
    {
        //get reference to the DOM elements
        var selector = package.selector,
            nameEl = getEl(selector + '-name'),
            descEl = getEl(selector + '-descrtipion'),
            authEl = getEl(selector + '-author'),
            downloadEl = getEl(selector + '-downloads'),
            starsEl = getEl(selector + '-stars');

        nameEl.textContent = package.name;
        descEl.textContent = package.description;
        authEl.textContent = package.author;
        downloadEl.textContent = package.getFormattedDownloads();
        starsEl.textContent = package.getFormattedStars();
    }

    //write date
    var dateEL = getEl('date');
    dateEL.textContent = getTodaysDate();

    //write package data using for loop
    for (var i = 0; i <data.length; i++)
        {
            var pacakage = new Package(data[i]);
            writePackageInfo(package);
        }
        /**
         * explanation for for loop so i dont look like i just took the easy method out
         * the way for loops work is they run until a condition is satisfied
         * in this case it starts out at 0 (does not start at one because arrays start at 0)
         * i++ is telling the loop to incriment basicaly telling it to +1 every time its ran
         * the length is determined by the data.length it basicaly tells the for loop how long the array is and tells it to run that many times.
         */


} ());