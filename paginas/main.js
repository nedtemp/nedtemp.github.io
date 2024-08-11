//esto es del boton de compartir
    document.getElementById('copiar').addEventListener('click', function() {
      // Obtener la URL actual del navegador
      var url = window.location.href;

      // Crear un elemento de texto temporal
      var tempInput = document.createElement('input');
      tempInput.setAttribute('type', 'text');
      tempInput.setAttribute('value', url);

      // Agregar el elemento temporal al DOM
      document.body.appendChild(tempInput);

      // Seleccionar el texto dentro del elemento temporal
      tempInput.select();

      // Copiar el texto seleccionado al portapapeles
      document.execCommand('copy');

      // Eliminar el elemento temporal del DOM
      document.body.removeChild(tempInput);

      // Mostrar un mensaje de éxito
      alert('¡La URL ha sido copiada al portapapeles!');
    });



   //ESTO SE DEBE DE CAMBIAR ES EL NUMERO RANDOM ******PAGINAS

    document.getElementById('redireccionar').addEventListener('click', function() {
      // Generar un número aleatorio entre 1 y 38
      var numeroAleatorio = Math.floor(Math.random() * 39) + 1;

      // Construir la URL de la página aleatoria
      var urlPaginaAleatoria = 'pagina' + numeroAleatorio + '.html';

      // Redirigir a la página aleatoria
      window.location.href = urlPaginaAleatoria;
    });







//ESTO ES LA PAGINA FIJA ((LA MAS RECIENTE)) ******INDEX
    function redirigirAPagina() {
      // Redireccionar a la página especificada
      window.location.href = 'paginas/pagina38.html'; // Reemplaza 'pagina.html' con la URL de la página a la que quieres redirigir
    }









//ESTA SE LE CAMBIA EL RANDOM TAMBIEEEEEEN *****INDEX
      function redirigirAPaginaAleatoria() {
    // Generar un número aleatorio entre 1 y 37
    var numeroAleatorio = Math.floor(Math.random() * 39) + 1;

    // Construir la URL de la página aleatoria
    var urlPaginaAleatoria = 'paginas/pagina' + numeroAleatorio + '.html';

    // Redirigir a la página aleatoria
    window.location.href = urlPaginaAleatoria;
  }





    //esto es del texto adicional
  document.getElementById('mostrarMas').addEventListener('click', function() {
    // Obtener el elemento de texto adicional
    var textoExtra = document.getElementById('textoExtra');

    // Alternar entre mostrar y ocultar el texto adicional
    if (textoExtra.style.display === 'none') {
      textoExtra.style.display = 'block';
      this.classList.remove('fa-info'); // Remover la clase del icono de información
      this.classList.add('fa-times'); // Agregar la clase del icono de cerrar
    } else {
      textoExtra.style.display = 'none';
      this.classList.remove('fa-times'); // Remover la clase del icono de cerrar
      this.classList.add('fa-info'); // Agregar la clase del icono de información
    }
  });




  //////esto es de la pagina 1

function ampliarImagen(imagen) {
  // Si la imagen clicada ya está ampliada, quitar la clase 'ampliada'
  if (imagen.classList.contains('ampliada')) {
    imagen.classList.remove('ampliada');
  } else {
    // Remover la clase 'ampliada' de todas las imágenes
    var imagenes = document.querySelectorAll('.imagen');
    imagenes.forEach(function(img) {
      img.classList.remove('ampliada');
    });

    // Agregar la clase 'ampliada' solo a la imagen clicada
    imagen.classList.add('ampliada');
  }
}
