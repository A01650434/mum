const btn = document.querySelector('.talk');
const content = document.querySelector('.content'); 

const greetings = ['Buen día cumpleañera', 'Happy Cumple', '¿Sabes que día es hoy?' ];

const day = ['el día que nacieron todas las flores! ah, y tu ;) feliz cumpleaños','heute ist dein geburtstag', '7 de mayo, obvio. oh, felicidades', "Macky's birthday!"];

const mail = ['mami te quiero, feliz cumpleaños.', '', ''];

const quotes = ['estrellita para mi', 'ay mi reny', 'te quiero', 'te tengo una sorpresa'];

const SpeechRecognition  =  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function () {
    console.log('voice is activated'); //excecute when it is listening
};

//this will excecute when you stop talking 
recognition.onresult = function(event) {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
};


// adding listener to a btn 
btn.addEventListener('click', () =>{
    recognition.start();
});

function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance();

    speech.text = 'oops';

    if (message.includes('Hola')){
        const finalText = 
        greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
    }

    if (message.includes('Qué día es hoy')){
        const finalText = 
        day[Math.floor(Math.random() * day.length)];
        speech.text = finalText;
    }

    if (message.includes('Escuchar mensaje')){
        const finalText = 
        mail[Math.floor(Math.random()* mail.length)];
        speech.text = finalText;
    }

    if (message.includes('mis frases populares')){
        const finalText = 
        quotes[Math.floor(Math.random()* quotes.length)];
        speech.text = finalText; 
    }

    if (message.includes('tengo')){
        speech.text = 'Sí, de: Reny, Florecita, Mamá, Javi, Dafne, Mariel, Hugo, Pazzi, Elisa';
    }

    if (message.includes('Mariel')){
        speech.text = 'Feliz cumpleaños. Te amo';
    };

    if (message.includes('Renata')){
        speech.text = 'Mamá, mamá... te amo';
    };

    if (message.includes('florecita')){
        speech.text = 'Hermanita, te amo. Siempre serás mi brujula. Gracias por quedarte con nostras.';
    };

    if (message.includes('mamá')){
        speech.text = 'Alecita , Mi Macky eres la estrella que me acompaña en este hermoso lugar que es vida , muchas gracias hija por existir .';
    };

    if (message.includes('Javier')){
        speech.text = 'que el universo y el tiempo confabulen con la tierra que a tus pies yace y la sigas colmando de bendiciones a través de tus sonrisas, feliz cumpleaños ';
    };

    if (message.includes('hija')){
        speech.text = 'Mami te amo, gracias por creecer conmigo. Feliz cumpleaños';
    };

    if (message.includes('Hugo')){
        speech.text = 'Mia. Hermana te quiero mucho  pasatela super';
    };

    if (message.includes('Elisa')){
        speech.text = 'Ale , mi hermana mayor, mi ejemplo de amor, te quiero mucho ';
    };

    if (message.includes('huguito')){
        speech.text = 'feliz cumpleaños tia maky y cantarle las mañanitas';
    };

    speech.volume = 0.5;
    speech.rate = 0.5; 
    speech.pitch = 0.5; 

    window.speechSynthesis.speak(speech);
};
