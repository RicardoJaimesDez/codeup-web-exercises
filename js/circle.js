(function() {
    "use strict";

    // Create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            // Calculate and return the area
            return Math.PI * this.radius * this.radius;
        },

        logInfo: function (doRounding) {
            // Get the area of the circle
            let area = this.getArea();

            // If doRounding is true, round the result to the nearest integer.
            if (doRounding) {
                area = Math.round(area);
            }

            // Output the circle information
            console.log("Area of a circle with radius: " + this.radius + ", is: " + area);
        }
    };

    // Log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");

    // Change the radius of the circle to 5.
    circle.radius = 5;

    // Log info about the circle with the updated radius
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();
