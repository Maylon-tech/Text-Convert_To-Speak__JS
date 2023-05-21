let textarea = document.querySelector('#areaTexto')
let voices = document.querySelector('#voices')
let button = document.querySelector('#button')
let selectedVoice = 0
// Bucando Lista de Vozea para exibir dentro de Select.
window.speechSynthesis.addEventListener('voiceschanged', () => {
    let voicesList = window.speechSynthesis.getVoices()
    
    for (let i in voicesList) {
        let optionEl = document.createElement('option')
        optionEl.setAttribute('value', i) 
        optionEl.innerText = voicesList[i].name
        voices.appendChild(optionEl)
    }

})


button.addEventListener('click', () => {
    //Verificar o texto se esta pronto e Converter
    let voicesList = window.speechSynthesis.getVoices()
    if(textarea.value !== '') {
        let ut = new SpeechSynthesisUtterance(textarea.value)
        ut.voice = voicesList[selectedVoice]

        // Recusros Novo Dos Navegadores.
        window.speechSynthesis.speak(ut)
    }
})


// no Select Quando houver Change vai sofres mudanças
voices.addEventListener('change', () => {
    selectedVoice = parseInt(voices.value)
})

// Saber quando esta falando - propriedade = True

function updateStatus() {
    if(window.speechSynthesis.speaking) {
        voices.setAttribute('disabled', 'disabled')
        button.setAttribute('disabled', 'disabled')
    } else {
        voices.removeAttribute('disabled')
        button.removetAttribute('disabled')
    }
}
setInterval(updateStatus, 100)