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

    speech.text = 'cool, cool, cool, no entendí';

    if (message.includes('hola')){
        const finalText = 
        greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
    };

    if (message.includes('que dia es hoy')){
        const finalText = 
        day[Math.floor(Math.random() * day.length)];
        speech.text = finalText;
    };

    if (message.includes('eschuchar mensajes')){
        const finalText = 
        mail[Math.floor(Math.random()* mail.length)];
        speech.text = finalText;
    };

    if (message.includes('mis frases populares')){
        const finalText = 
        quotes[Math.floor(Math.random()* quotes.length)];
        speech.text = finalText;
    }; 

    if (message.includes('tengo')){
        speech.text = 'Sí, de: Reny, Florecita, Mamá, Javi, Dafne';
    };

    if (message.includes('reny')){
        speech.text = 'Mamá, mamá... te amo';
    };

    if (message.includes('florecita')){
        speech.text = '';
    };

    if (message.includes('mama')){
        speech.text = '';
    };

    if (message.includes('javi')){
        speech.text = '';
    };

    if (message.includes('dafne')){
        speech.text = 'Mami te amo, gracias por creecer conmigo. Feliz cumpleaños';
    };

    speech.volume = 0.5;
    speech.rate = 0.5; 
    speech.pitch = 0.5; 

    window.speechSynthesis.speak(speech);
};