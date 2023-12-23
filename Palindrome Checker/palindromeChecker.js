// Adding an event listener to the 'check-if-palindrome' element when clicked
document.querySelector('.check-if-palindrome').addEventListener('click', () => {

    // Retrieving the input value from the 'input-word' element
    let original = document.querySelector('.input-word').value;

    // Removing all whitespace from the input string
    original = original.replace(/\s/g, "");

    // Converting the input string to lowercase for case-insensitive comparison
    original = original.toLowerCase();
    
    // Reversing the input string by splitting it into an array of single values, reversing them, and joining the characters back together into a string
    const reversed = original.split('').reverse().join('');

    // Variable to store whether the input string is a palindrome or not
    let palindrome;

    // Checking if the original and reversed strings are equal
    if (original === reversed) {
        palindrome = true; // It is a palindrome
    } else {
        palindrome = false; // It is not a palindrome
    }

    // Displaying the result in the HTML with a user-friendly message
    document.querySelector('.dom-text').innerHTML = palindrome ? 'It is a palindrome!' : 'It is not a palindrome.';
    document.querySelector('.input-word').value = '';
});