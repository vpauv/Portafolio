let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Desarrollo sitios web y me apasiona la ciberseguridad')
  .pauseFor(200)
  .deleteChars(10)
  .start();


  
// Obtén referencias a las imágenes y los contenedores
const imagenes = document.querySelectorAll('.proyecto');
const contenedores = document.querySelectorAll('.proyecto-more');
const estadosContenedor = [false, false, false]; // Un array para rastrear el estado de cada contenedor

// Agrega un controlador de eventos a las imágenes
imagenes.forEach((imagen, index) => {
  imagen.addEventListener('click', function() {
    // Restablece el estado de todos los contenedores
    contenedores.forEach((contenedor, i) => {
      if (i !== index) {
        contenedor.style.backgroundColor = ''; // Restablece el color de fondo de otros contenedores
        estadosContenedor[i] = false; // Restablece el estado de otros contenedores
      }
    });

    // Cambia el color de fondo del contenedor correspondiente
    if (estadosContenedor[index]) {
      contenedores[index].style.backgroundColor = ''; // Restablece el color de fondo
    } else {
      switch (index) {
        case 0:
          contenedores[0].style.backgroundColor = '#004b64';
          break;
        case 1:
          contenedores[1].style.backgroundColor = '#115c76';
          break;
        case 2:
          contenedores[2].style.backgroundColor = '#216d87';
          break;
        default:
          break;
      }
    }

    // Actualiza el estado del contenedor
    estadosContenedor[index] = !estadosContenedor[index];
  });
});

