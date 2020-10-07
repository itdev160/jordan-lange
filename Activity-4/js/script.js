//welcome message
/**
 *coders commnents; In english var is a variable in the below section you are creating variables (this is kinda silly here) but it is to teach you how to reference a database.
the greeting on line 7 is similar to a system.out.println in java 
 */
var user = 'Jordan';
var salutation = 'Hello, ';
var greeting = salutation + user + '! Here are the latest Atom reviews';
var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;

//product price
/**
 * coders comments: make sure to have a , when listing multiple items as well as ; when ending statments very much like java
 */
    var price = 20,
        studentDiscount = .10,
        studentPrice = price - (price * studentDiscount),
        priceEl = document.getElementById('price'),
        studentPriceEl = document.getElementById('student-price');

    priceEl.textContent = price.toFixed(2);
    studentPriceEl.textContent = studentPrice.toFixed(2);