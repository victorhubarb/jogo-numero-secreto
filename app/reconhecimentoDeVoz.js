const elementoChute = document.getElementById('chute');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(e) {
    chute = e.results[0][0].transcript;
    exibeChuteNaTela(chute);
    verificaSeOChutePossuiValorValido(chute);
}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
        <div>Você disse</div>
        <span class="box">${chute}</span>
    `
}

recognition.addEventListener('end', () => recognition.start());


// CÓDIGO PARA BOTÕES DE INICIO DE JOGO E COMEÇO DE JOGO APENAS CLICANDO INICIO DE JOGO.

// const elementoChute = document.getElementById('chute');
// const botaoNovoJogo = document.getElementById('botao-novo-jogo');

// let recognition;

// window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// function iniciarReconhecimentoDeVoz() {
//     recognition = new SpeechRecognition();
//     recognition.lang = 'pt-Br';

//     recognition.addEventListener('result', onSpeak);

//     recognition.start();
// }


// function onSpeak(e) {
//     chute = e.results[0][0].transcript;
//     exibeChuteNaTela(chute);
//     verificaSeOChutePossuiValorValido(chute);
// }

// function exibeChuteNaTela(chute) {
//     elementoChute.innerHTML = `
//         <div>Você disse</div>
//         <span class="box">${chute}</span>
//     `
// }

// botaoNovoJogo.addEventListener('click', () => {
//     iniciarReconhecimentoDeVoz();
// });