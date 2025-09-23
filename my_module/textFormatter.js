// textFormatter.js - A simple custom module for formatting text strings.
// This module exports a function that helps clean and standardize name inputs 
// (first name and last name) by removing extra spaces and capitalizing properly.


// ---------------------- FUNCTION DEFINITION ----------------------

/**
 * Formats a first name and last name by:
 *  1. Trimming extra spaces from both ends
 *  2. Capitalizing the first letter
 *  3. Concatenating them into a properly formatted full name
 *
 * @param {string} firstName - The user's first name (may contain spaces)
 * @param {string} lastName - The user's last name (may contain spaces)
 * @returns {string} Formatted full name (e.g., "Temitope Ibikunle")
 */
function formatName(firstName, lastName) {
    // Step 1: Clean the first name
    // - .trim() removes leading and trailing spaces
    // - [0].toUpperCase() makes the first letter uppercase
    // - .slice(1) keeps the rest of the string after the first character
    const formattedFirst = firstName.trim()[0].toUpperCase() + 
        firstName.trim().slice(1);

    // Step 2: Clean the last name (same approach as first name)
    const formattedLast = lastName.trim()[0].toUpperCase() + 
        lastName.trim().slice(1);

    // Step 3: Return the full formatted name
    return `${formattedFirst} ${formattedLast}`;
}


// ---------------------- EXPORT ----------------------

// Exporting the formatName function so it can be used in other files
export { formatName };
