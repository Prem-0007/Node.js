import crypto from 'crypto';

// Create a hash object

const hash = crypto.createHash('sha256');

// Update the hash with data

hash.update('kas12345');


// Get the hash digest

const digest = hash.digest('hex');
console.log('Hash digest:', digest);

// randomBytes()

const randomBytes = crypto.randomBytes(16, (err,buff) => {
        if(err) throw err;
    console.log('Random Bytes:', buff.toString('hex'));}
);

// createCipheriv() and
// createDecipheriv()
const algorithm = 
'aes-256-cbc';
const
key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);
const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update('Hello, World!', 'utf-8', 'hex');
encrypted += cipher.final('hex');
console.log('Encrypted:', encrypted);


const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = decipher.update(encrypted, 'hex', 'utf-8');
decrypted += decipher.final('utf-8');
console.log('Decrypted:', decrypted);