import {MD5} from 'crypto-js';
import { writeFile } from 'fs';
import { mkdirSync} from 'fs-extra';

function hashing (string: string) {
    let hash = MD5(string);
    return hash;
}

hashing("ehhedad");

function createDirectories (n: number) {
    mkdirSync('../jeu')
    for (let i = 0; i <= n; i++){
        mkdirSync(`../jeu/${hashing(`Dossier${i}`)}`);
}
}

createDirectories(2);

// for (let j = 0; j <= nbfiles; j++){

//     writeFile(`../jeu/${`Dossier${Math.floor(Math.random(i))}`}/index.md`, )
// }

// créer un tableau avec le nom des dossiers