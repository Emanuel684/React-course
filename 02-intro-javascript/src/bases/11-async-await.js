
// const getImagenPromesa = () => new Promise( resolve => resolve('https://asdkasmafgdfgd.com'))
// getImagenPromesa().then( console.log );


const getImagen = async () => {

    try {

        const apiKey = 'VBgswINHv9vM76LeKiJlxdNaqCqu9Qv8';

        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

        const { data } = await resp.json();

        console.log(data);

        const { url } = data.images.original;

        console.log(url);

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);


    } catch (err) {
        // Manejo del error
        console.error(err);
    }

    // const apiKey = 'VBgswINHv9vM76LeKiJlxdNaqCqu9Qv8';

    // const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

    // const { data } = await resp.json();

    // console.log(data);

    // const { url } = data.images.original;

    // console.log( url );

    // const img = document.createElement('img');
    // img.src = url;

    // document.body.append( img );

}

// console.log( getImagen() );

getImagen().then(console.log);



// const apiKey = 'VBgswINHv9vM76LeKiJlxdNaqCqu9Qv8';


// const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// peticion.then(resp => resp.json()).then(({ data }) => {
//     // console.log ( data.images.original.url );
//     const { url } = data.images.original;
//     const img = document.createElement('img');
//     img.src = url;

//     document.body.append( img );
// }).catch(console.warn);

