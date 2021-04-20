import CryptoJS from 'crypto-js';

const message = '1';
const key = '2';
const result = CryptoJS.HmacSHA256(message, key).toString();
console.log(result);
