const apiKey= 'jy64EFOEz0zgrtilN8MwFBxPNGDI8mTO';

const peticion= fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
    .then(resp=> resp.json())
    .then( ({data}) =>{
            //console.log(data.images.original.url)
            const {url}= data.images.original;
            const imagen= document.createElement('img');
            imagen.src= url;
            document.body.append(imagen);
    })
    .catch(err=> console.log(err));