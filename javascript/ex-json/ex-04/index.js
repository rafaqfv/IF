const fs = require('fs');

try {
    
    const filmesJSON = fs.readFileSync('filmes.json', 'utf-8');
    const filmesOBJ = JSON.parse(filmesJSON);

    function calcularMedia(){
        let media = 0;
        let somaMedia = 0;
        const arrayLength = filmesOBJ.length;
    
        for (let i = 0; i < filmesOBJ.length; i++) {
            somaMedia += filmesOBJ[i].ano;
        }
        media = parseFloat(somaMedia / arrayLength);
        return media;
    }

    filmesOBJ.sort((a, b) => {
        const titleA = a.titulo.toUpperCase();
        const titleB = b.titulo.toUpperCase();

        if (titleA < titleB) {
            return -1;
        }
        if (titleA > titleB) {
            return 1;
        }
        return 0;
    });

    const media = calcularMedia();

    console.log(filmesOBJ);

    // console.log(media);

    // console.log(`Filmes ordenados: ${JSON.stringify(filmesOBJ, null, 2)}`);


} catch (error) {
    console.log(error)
}