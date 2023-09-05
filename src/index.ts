import {MD5} from 'crypto-js';
import { mkdirSync} from 'fs-extra';

function hashing (string: string) {
    let hash = MD5(string);
    console.log(hash.toString());
    return hash;
}

hashing("ehhedad");

