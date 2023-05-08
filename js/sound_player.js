const synth = window.speechSynthesis;
let voices = [];
let isSpeaking = false;
let elemsForSpeech = document.querySelectorAll(".speech");

synth.addEventListener('voiceschanged', () => {
  voices = synth.getVoices();
});

function speakText(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.voice = voices.find(voice => voice.name === "Google UK English Female");
  synth.speak(utterance);
  isSpeaking = true;
}

function stopSpeaking() {
  if (isSpeaking) {
    synth.cancel();
    isSpeaking = false;
  }
}

for(let i = 0; i < elemsForSpeech.length; i++){
    elemsForSpeech[i].addEventListener("mouseover", function() {
        let text = elemsForSpeech[i].getAttribute("data-content")  || elemsForSpeech[i].innerText || elemsForSpeech[i].getAttribute("alt") ;
        speakText(text);
    });
}

for(let i = 0; i < elemsForSpeech.length; i++){
    elemsForSpeech[i].addEventListener("mouseleave", stopSpeaking);
}

