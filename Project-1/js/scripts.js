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
    
    /**
     * lens - style
     * brand - who makes it
     * usecase - what my use case for it is
     * rating - my rating
     */
    var data = [
    {
        lens: '10-18mm',
        brand: 'Canon',
        usecase: 'Wide Angle Lens',
        rating: 'My "other" go to lens. Alot of my photography is shot with this lens because of its wide angles. Also good for videos as motor is silent. ',
    },
    {
        lens: '18-55mm',
        brand: 'Canon',
        usecase: 'Basic Kit Lens',
        rating: 'It is alright, not good at wide angles, not good a zooms, kinda an all around use case. ',
    },
    {
        lens: '18-135mm',
        brand: 'Canon',
        usecase: 'Basic Kit Lens',
        rating: 'Very good lens, my almost go to lens, has the zoom that I need, decent at wide angles. Best for videos as motor is silent ',
    },
    {
        lens: '70-200mm',
        brand: 'Canon',
        usecase: 'For long range photography only',
        rating: 'Very good lens, very expensive lens, but only has very specific use cases. ',
    },
    {
        brand: 'Canon Rebel T6',
        usecase: 'Used for Photography not a good video platform',
        rating: 'My first body, was going to sell it till I found out its the only body I own that can keep the shutter open for custom times.',
    },
    {
        brand: 'Canon 90D',
        usecase: 'My "goto" body. Useful in most situations',
        rating: 'My third body, bought after my 80D (pictured) suffered screen damage. Good for everything.',
    },
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
        // these should be titled what you titled them above
        this.lens = data.lens;
        this.brand = data.brand;
        this.usecase = data.usecase;
        this.rating = data.rating;
        this.selector = data.selector; // *** REMEMBER TO ADD THIS IF YOU ADDED IT TO THE DATA OBJECTS ** //
    };
    // Returns DOM Element by id
    var getEl = function (id) 
    {
        return document.getElementById(id);
    };

    //writs the package objects data to the approperate DOM elements utilizing the package selector property

    var writePackageInfo = function(package) 
        {
        // Get reference to DOM elements
        var selector = package.selector,
        lensEl = getEl(selector + '-lens'),
        brandEl = getEl(selector + '-brand'),
        usecaseEl = getEl(selector + '-usecase'),
        ratingEl = getEl(selector + '-rating');

        // Write package data to DOM elements
        lensEl.textContent = package.lens;
        brandEl.textContent = package.brand;
        usecaseEl.textContent = package.usecase;
        ratingEl.textContent = package.rating;
    };
    var lens = new Package(data[0]);
    writePackageInfo(lens);
/**
    for (var i = 0; i < data.length; i++) 
    {
        var package = new Package(data[i]);
        writePackageInfo(package);
    }
    */
        /**
         * explanation for for loop so i dont look like i just took the easy method out
         * the way for loops work is they run until a condition is satisfied
         * in this case it starts out at 0 (does not start at one because arrays start at 0)
         * i++ is telling the loop to incriment basicaly telling it to +1 every time its ran
         * the length is determined by the data.length it basicaly tells the for loop how long the array is and tells it to run that many times.
         */
}());