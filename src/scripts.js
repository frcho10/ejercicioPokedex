const maxPokemon = 500;//constante para ir maximo al pokemon id 500

const randomId = (min) => { //función para traer el id aleatorio de los pokemon
    return Math.floor(Math.random() * (maxPokemon - min + 1) + min)
}

const traerPokemon = async () => {
    document.getElementById("getPokemon").setAttribute('disabled', '');//mostrar deshabilitado el botón al iniciar la petición
    
    let id = randomId(1);//se ejecuta función para obtener id aleatorio

    //se inicializan variables de data de la peticion fetch, nombre del pokemón y la url de la imagen
    let data = ''
    let name = ''
    let img = ''
    try {
        data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        data = await data.json();

        name = data.name.charAt(0).toUpperCase() + data.name.slice(1);//se hace upercase a la primera letra del nombre del pokemón para darle formato
        img = data.sprites.other.dream_world.front_default;//se accede al objeto respeusta a la propiedad sprites other para obtener la url de front_default

    }catch{//catch para el caso en que no haya internet
        name = "Error en la consulta";
        img = "./src/img/pexels-vie-studio-4439425.jpg"
        //https://www.pexels.com/es-es/foto/firmar-tipografia-texto-cartas-4439425/
        //imagen descargada de un sitio en el cual no existen derechos de autor

    }
    const nameElement = document.getElementById("namePokemon");
    nameElement.innerHTML=name;
    const imgElement = document.getElementById("imgPokemon");
    imgElement.src =img;
    //se obtienen los elementos del html para incrustar el contenido dentro de namePokemon y el src de imgPokemon via sus id's 

    document.getElementById("getPokemon").removeAttribute('disabled', ''); //se elimina el atributo disable del botón html
  }

