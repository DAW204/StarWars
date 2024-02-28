// Cuando el documento esté listo, ejecuta la función
$(document).ready(function () {
    // Muestra el contenido del cuerpo de la página
    mostrarBody();

    // Oculta la información de la carta al principio
    $('.cardinfo').hide();

    // Muestra la información de la carta al hacer clic en una carta
    $('.carta').click(function () {
        $('.cardinfo').show();
    });

});

// Función para mostrar los checkboxes de opciones
function mostrarChecks() {
    // Crear contenedor principal para los checkboxes
    var containerChecks = $("<div class='containerChecks'></div>");
    // Crear contenedor para los checkboxes
    var checksDiv = $("<div class='checks'></div>");
    // Crear dos bloques para organizar los checkboxes
    var bloque1 = $("<div class='bloque'></div>");
    var bloque2 = $("<div class='bloque'></div>");

    // Crear los checkboxes y sus etiquetas correspondientes
    var datosFisicos = $("<input type='checkbox' id='datosFisicos' name='dato1' value='datosFisicos'>");
    var labelDatosFisicos = $("<label for='datosFisicos'>Datos físicos</label><br>");
    var anioNacimiento = $("<input type='checkbox' id='anioNacimiento' name='dato2' value='anioNacimiento'>");
    var labelAnioNacimiento = $("<label for='anioNacimiento'>Año de nacimiento</label><br>");
    var especie = $("<input type='checkbox' id='especie' name='dato4' value='especie'>");
    var labelEspecie = $("<label for='especie'>Especie</label><br>");
    var peliculas = $("<input type='checkbox' id='peliculas' name='dato5' value='peliculas'>");
    var labelPeliculas = $("<label for='peliculas'>Películas</label><br>");
    var planetaOrigen = $("<input type='checkbox' id='planetaOrigen' name='dato6' value='planetaOrigen'>");
    var labelPlanetaOrigen = $("<label for='planetaOrigen'>Planeta de origen</label><br>");

    // Agregar los checkboxes y etiquetas a los bloques correspondientes
    datosFisicos.appendTo(bloque1);
    labelDatosFisicos.appendTo(bloque1);
    anioNacimiento.appendTo(bloque1);
    labelAnioNacimiento.appendTo(bloque1);
    especie.appendTo(bloque2);
    labelEspecie.appendTo(bloque2);
    peliculas.appendTo(bloque2);
    labelPeliculas.appendTo(bloque2);
    planetaOrigen.appendTo(bloque2);
    labelPlanetaOrigen.appendTo(bloque2);

    // Agregar los bloques de checkboxes al contenedor principal
    bloque1.appendTo(checksDiv);
    bloque2.appendTo(checksDiv);
    checksDiv.appendTo(containerChecks)

    // Agregar el contenedor principal al cuerpo de la página
    containerChecks.appendTo("body");
}

// Función para mostrar el cuerpo de la página
function mostrarBody() {
    // Agregar un contenedor de estrellas al cuerpo de la página
    let starsDiv = $("<div class='stars'></div>");
    starsDiv.appendTo("body");

    // Mostrar los checkboxes
    mostrarChecks();

    // Crear un contenedor principal para el contenido
    let mainContainer = $("<div class='mainContainer'></div>");
    mainContainer.appendTo("body");

    // Crear un contenedor para las cartas
    let container = $("<div id='container'></div>");
    container.appendTo(mainContainer);

    // Crear un div para la información de la carta
    let cardInfoDiv = crearCardInfo();
    cardInfoDiv.appendTo(mainContainer);

    // Crear las cartas y agregarlas al contenedor de cartas
    // Agregar los nombres y las imágenes de los personajes a las cartas correspondientes
    let jedi1 = $("<div id='jedi1' class='carta'></div>");
    jedi1.appendTo(container);
    let nombre1 = $("<h2>CHEWBACKA</h2>");
    nombre1.appendTo(jedi1);
    var img1 = $("<img src='images/pj/Chewbacca.jpeg'></img>");
    img1.appendTo(jedi1);

    let jedi2 = $("<div id='jedi2' class='carta'></div>");
    jedi2.appendTo(container);
    let nombre2 = $("<h2>DARTH VADER</h2>");
    nombre2.appendTo(jedi2);
    var img2 = $("<img src='images/pj/Darth-Vader.jpeg'></img>");
    img2.appendTo(jedi2);

    let jedi3 = $("<div id='jedi3' class='carta'></div>");
    jedi3.appendTo(container);
    let nombre3 = $("<h2>R2-D2</h2>");
    nombre3.appendTo(jedi3);
    var img3 = $("<img src='images/pj/R2-D2.jpeg'></img>");
    img3.appendTo(jedi3);

    let jedi4 = $("<div id='jedi4' class='carta'></div>");
    jedi4.appendTo(container);
    let nombre4 = $("<h2>C-3PO</h2>");
    nombre4.appendTo(jedi4);
    var img4 = $("<img src='images/pj/C-3PO.jpeg'></img>");
    img4.appendTo(jedi4);

    let jedi5 = $("<div id='jedi5' class='carta'></div>");
    jedi5.appendTo(container);
    let nombre5 = $("<h2>YODA</h2>");
    nombre5.appendTo(jedi5);
    var img5 = $("<img src='images/pj/Yoda.jpeg'></img>");
    img5.appendTo(jedi5);
    

    // Aplicar estilos a las cartas
    aplicarEstilosCartas();

    // Agregar el evento de clic a las imágenes de las cartas
    $("img.figura").click(function () {
        consultarDatos();
    });

    // Generar estrellas de fondo
    generarEstrellas();
}

// Función para aplicar estilos a las cartas
function aplicarEstilosCartas() {
    // Agregar clase 'figura' a todas las imágenes
    $("img").addClass("figura");

    // Estilos comunes para todas las cartas
    $(".figura").css({
        "border-radius": "20px",
        "width": "75%",
        "height": "250px",
        "margin-top": "15%",
        "margin-left": "10%",
        "margin-bottom": "10%",
        "box-shadow": "7px 7px 5px black"
    });

    // Almacenar el z-index original de cada carta
    $("div.carta").each(function () {
        $(this).data("original-z-index", $(this).css("z-index"));
    });

    // Cambiar el z-index y aplicar transición al pasar el ratón sobre una carta
    $("div.carta").mouseover(function () {
        $(this).css("z-index", "50");
        $(this).css("transition", "transform 0.3s ease");
    });

    // Restaurar el z-index original al retirar el ratón de una carta
    $("div.carta").mouseout(function () {
        $(this).css("z-index", $(this).data("original-z-index"));
    });

    // Estilos específicos para cada carta
    $("div#jedi1").css({
        "right": "55%",
        "margin-top": "10%"
    });
    $('.carta:nth-child(1)').css('transform', 'rotate(-23deg)');

    $("div#jedi2").css({
        "right": "48%",
        "margin-top": " 1% ",
        "z-index": "9"
    });
    $('.carta:nth-child(2)').css('transform', 'rotate(-20deg)');

    $("div#jedi3").css({
        "position": "absolute",
        "transform": "translateY(-30px)",
        "z-index": " 10 "
    });
    $('.carta:nth-child(3)').css('transform', 'rotate(0deg)');

    $("div#jedi4").css({
        "left": "48%",
        "z-index": "8",
        "margin-top": "1%"
    });
    $('.carta:nth-child(4)').css('transform', 'rotate(20deg)');

    $("div#jedi5").css({
        "left": "55%",
        "margin-top": "9%"
    });
    $('.carta:nth-child(5)').css('transform', 'rotate(23deg)');
}

// Función para generar estrellas de fondo
function generarEstrellas() {
    var numStars = 100;
    var container = $(".stars");
    for (var i = 0; i < numStars; i++) {
        var size = Math.random() * 5 + 1;
        var duration = Math.random() * 5 + 5;
        var star = $("<div class='star'></div>").css({
            width: size + "px",
            height: size + "px",
            left: Math.random() * 100 + "%",
            top: Math.random() * 100 + "%",
            animationDuration: duration + "s",
        });
        container.append(star);
    }
}

// Función para crear el contenedor de información de la carta
function crearCardInfo() {
    let cardInfoDiv = $("<div class='cardinfo' id='infoPlaceholder'></div>");
    let cardContentDiv = $("<div class='card-content'></div>");
    let h3Element = $("<h3>Información del Personaje</h3>");
    let infoDiv = $("<div id='info'></div>");

    h3Element.appendTo(cardContentDiv);
    infoDiv.appendTo(cardContentDiv);
    cardContentDiv.appendTo(cardInfoDiv);

    return cardInfoDiv;
}

// Función para consultar los datos del personaje al hacer clic en una carta
function consultarDatos() {
    let nombresPersonajes = ["Chewbacca", "Darth Vader", "R2-D2", "C-3PO", "Yoda"];
    var characterData = {};
    var selectedCharacter = "";
    $('.carta').click(function () {
        var characterId = $(this).attr('id');
        var characterIndex = parseInt(characterId.replace("jedi", "")) - 1;
        var characterName = nombresPersonajes[characterIndex];
        if (characterName === selectedCharacter) {
            obtenerInformacion(characterData[selectedCharacter]);
        } else {
            selectedCharacter = characterName;
            var apiUrl = `https://swapi.dev/api/people/?search=${characterName}&format=json`;
            console.log(apiUrl)
            $.get(apiUrl, function (data) {
                if (data && data.results && data.results.length > 0) {
                    var character = data.results[0];
                    characterData[characterName] = character;
                    obtenerInformacion(character);
                } else {
                    console.log('Error: No se encuentra información del personaje');
                }
            }).fail(function () {
                console.log('Error: No se pudo recuperar datos de personajes');
            });
        }
    });
}

// Función para mostrar la información del personaje
function obtenerInformacion(character) {
    $('#info').empty();

    // Función auxiliar para crear una sección de información
    function createSection(title) {
        return $('<div class="section"><h2>' + title + '</h2></div>');
    }

    // Mostrar el nombre del personaje
    var nombre = $('<h2>' + character.name + '</h2>');
    nombre.prependTo($('#info'));

    // Mostrar la información según las opciones seleccionadas
    if ($('#datosFisicos').is(':checked')) {
        var datosFisicosSection = createSection('DATOS FISICOS');
        datosFisicosSection.append('<p>Altura: ' + character.height + '</p>');
        datosFisicosSection.append('<p>Peso: ' + character.mass + '</p>');
        if (character.hair_color == "none") {
            datosFisicosSection.append('<p>Color de pelo: desconocido</p>');
        } else {
            datosFisicosSection.append('<p>Color de pelo: ' + character.hair_color + '</p>');
        }
        if (character.skin_color == "unknown") {
            datosFisicosSection.append('<p>Color de piel: desconocido</p>');
        } else {
            datosFisicosSection.append('<p>Color de piel: ' + character.skin_color + '</p>');
        }
        datosFisicosSection.append('<p>Color de ojos: ' + character.eye_color + '</p>');
        datosFisicosSection.append('<p>Genero: ' + character.gender + '</p>');
        $('#info').append(datosFisicosSection);
    }

    // Mostrar la información de nacimiento
    if ($('#anioNacimiento').is(':checked')) {
        var nacimientoSection = createSection('NACIMIENTO');
        nacimientoSection.append('<p>Año de nacimiento: ' + character.birth_year + '</p>');
        $('#info').append(nacimientoSection);
    }

    // Mostrar la especie del personaje
    if ($('#especie').is(':checked')) {
        if (character.species.length === 0) {
            var especieSection = createSection('ESPECIE');
            especieSection.append('<p>Especie: Desconocida</p>');
            $('#info').append(especieSection);
        } else {
            var especieSection = createSection('ESPECIE');
            character.species.forEach(function (speciesUrl) {
                $.get(speciesUrl, function (speciesData) {
                    especieSection.append('<p>Especie: ' + speciesData.name + '</p>');
                    especieSection.append('<p>Clasificación: ' + speciesData.classification + '</p>');
                    especieSection.append('<p>Lenguaje: ' + speciesData.language + '</p>');
                });
            });
            $('#info').append(especieSection);
        }
    }

    // Mostrar las películas en las que aparece el personaje
    if ($('#peliculas').is(':checked')) {
        var peliculasSection = createSection('PELICULAS');
        character.films.forEach(function (filmUrl) {
            $.get(filmUrl, function (filmData) {
                peliculasSection.append('<p>Película: ' + filmData.title + '</p>');
                peliculasSection.append('<p>Episodio: ' + filmData.episode_id + '</p>');
            });
        });
        $('#info').append(peliculasSection);
    }

    // Mostrar el planeta de origen del personaje
    if ($('#planetaOrigen').is(':checked')) {
        var planetaOrigenSection = createSection('PLANETA ORIGEN');
        $.get(character.homeworld, function (homeworldData) {
            if (homeworldData.name == "unknown") {
                planetaOrigenSection.append('<p>Planeta origen: DESCONOCIDO</p>');
            } else {
                planetaOrigenSection.append('<p>Planeta origen: ' + homeworldData.name + '</p>');
                planetaOrigenSection.append('<p>Periodo de rotación: ' + homeworldData.rotation_period + '</p>');
                planetaOrigenSection.append('<p>Periodo orbital: ' + homeworldData.orbital_period + '</p>');
            }
        });
        $('#info').append(planetaOrigenSection);
    }
}
