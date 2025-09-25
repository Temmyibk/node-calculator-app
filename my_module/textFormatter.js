// textFormatter.js - A simple custom module for formatting text strings.
// This module exports a function that helps clean and standardize name input.

// Exporting the function `formatName` which takes two arguments: firstName and lastName
function formatName(firstName, lastName) {
    // Use .trim() to remove any extra spaces before or after the names
    // Capitalize the first character using [0].toUpperCase()
    // Then concatenate it with the remaining part of the string using .slice(1)
    // This ensures only the first letter is uppercase and the rest remains as typed

    const formattedFirst = firstName.trim()[0].toUpperCase() + 
        firstName.trim().slice(1);

    const formattedLast = lastName.trim()[0].toUpperCase() + 
        lastName.trim().slice(1);

    // Return the full name with proper formatting
    return `${formattedFirst} ${formattedLast}`;
}
export  {formatName};
