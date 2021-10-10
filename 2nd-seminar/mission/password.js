const fs = require('fs');
const crypto = require('crypto');

// read file
const title = 'password';
password = fs.readFileSync(`${title}.txt`, 'utf-8');

// hashing
const salt = crypto.randomBytes(32).toString('hex');
const iterations = 100000;
const keylen = 64;
const digest = 'sha512';

const hashedPw = crypto
  .pbkdf2Sync(password, salt, iterations, keylen, digest)
  .toString('hex');

// write file
fs.writeFileSync('hashed.txt', hashedPw);
