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
    var body =
    [
        {
            brand: 'Canon Rebel T6',
            usecase: 'Used for Photography not a good video platform',
            rating: 'My first body, was going to sell it till I found out its the only body I own that can keep the shutter open for custom times.',
            selector: 'b1',
        },
        {
            brand: 'Canon 90D',
            usecase: 'My "goto" body. Useful in most situations',
            rating: 'My third body, bought after my 80D (pictured) suffered screen damage. Good for everything.',
            selector: 'b2',
        }
    ];
    /**
     * Notes for code below. be sure like in java everything ends with a ; if you dont it wigs out
     */
    // (Atom) Package constructor function
    function Package(body)
    {
        this.brand = body.lens;
        this.usecase = body.usecase;
        this.rating = body.rating;
        this.selector = body.selector; // remember to add the selector in the table and here (thanks Mr.H!)
    }
    // Returns DOM Element by id
    var getEl = function (id) 
    {
        return document.getElementById(id);
    };

    //writs the package objects data to the approperate DOM elements utilizing the package selector property
    var writePackageInfo = function(package)
    {
        var selector = package.selector;
        brandEl = getEl(selector +'-brand'),
        usecaseEl = getEl(selector + '-usecase'),
        ratingEl = getEl(selector + '-rating')

        //writes package data to dom elements
        brandEl.textContent = package.brand;
        usecaseEl.textContent = package.usecase;
        ratingEl.textContent = package.rating
    };
    for(var i = 0; i < body.length; i++)
    {
        var package = new Package(body[i]);
        writePackageInfo(package);
    };
        /**
         * explanation for for loop so i dont look like i just took the easy method out
         * the way for loops work is they run until a condition is satisfied
         * in this case it starts out at 0 (does not start at one because arrays start at 0)
         * i++ is telling the loop to incriment basicaly telling it to +1 every time its ran
         * the length is determined by the data.length it basicaly tells the for loop how long the array is and tells it to run that many times.
         */
}());