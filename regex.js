// Regular Expression Practice

const text = 'SOHEL rana';
const phoneNumber = '+88013284638391';
const email = 'sohelrana@gmail.com';
const password = 'sohel!SS20#$';



// check string validation
// const regex = /[a-zA-Z]+\s$/;
// console.log(regex.test(text));


// // phone number validation
// const regex = /(\+88)?(01)[3456789]\d{8}$/
// console.log(regex.test(phoneNumber));

// email validation
// const regex = /([a-zA-Z0-9])+@[a-z0-9]+(\.com)$/
// console.log(regex.test(email));

// password validation
const regex =/([0-9])?([a-zA-Z0-9])+([0-9])?([A-Z])([0-9])+([@!$#%&])+$/
console.log(regex.test(password));