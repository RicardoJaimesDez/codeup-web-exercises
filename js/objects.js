(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    const person = {
        firstName: "Rick",
        lastName: "Sanchez"

    };
    console.log(person.firstName);
    console.log(person.lastName);
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.sayHello = function(){
        return `Hello from ${this.firstName} ${this.lastName}!`;
    };
    console.log(person.sayHello())
    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];
    const discountAmount = .12;

    shoppers.forEach(function (shopper) {
        let discount = 0;
        let amountAfterDiscount = shopper.amount;

        if (shoppers.amount > 200) {
            discount = shopper.amount * discountAmount;
            amountAfterDiscount = shopper.amount - discount;
        }
        console.log(`${shopper.name} \nThe amount before discount is $${shopper.amount}.
         \nThe amount after discount is $${amountAfterDiscount}.`);
    });

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    let books = [
        {
            title: "The Salmon of Doubt",
            author: {firstName: "Douglas", lastName: "Adams"}

        },
        {
          title: "Walkaway",
          author: {firstName: "Cory", lastName: "Doctorow"}
        },
        {
            title: "A Brief History of Time",
            author: {firstName: "Stephen", lastName: "Hawking"}
        }
    ];

    console.log(books[0].title) // "The Salmon of Doubt"
    console.log(books[0].author.firstName) // "Douglas"
    console.log(books[0].author.lastName) // "Adams"

    for (let i = 0; i < books.length; i++) {
        let book = books[i];
        let authorName = `${book.author.firstName} ${book.author.lastName}`;

        console.log(`Book # ${i + 1}`);
        console.log(`Title: ${book.title}`);
        console.log(`Author: ${authorName}`);
        console.log("- - -")
    }
    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    function showBookInfo(book) {
        return `Title: ${book.title}\nAuthor: ${book.author.firstName} ${book.author.lastName}`;
    }

    for(let i = 0; i < books.length; i++) {
        console.log(`Book # ${i + 1}\n${showBookInfo(books[i])}\n---`);
    }

    books.forEach((book, index) => {
        console.log(`Book # ${index + 1}\n${showBookInfo(book)}\n---`);

    });

    let someBookCount = 1;
    for(let book of books) {
        console.log(`Book # ${someBookCount++}\n${showBookInfo(book)}\n---`);
    }

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */


})();
