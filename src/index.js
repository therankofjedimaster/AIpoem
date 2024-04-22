import axios from "axios";
function showAnswer(response) {
    let poem = document.querySelector("#poem");
    poemContainer.textContent = response.data.answer;
}
function generatePoem(event) {
    event.preventDefault();
    let apiKey = "491ft9f19a10791b7da8b060497d3o64";
    let context = "you are a polite literate AI that can compose poems.Generate a 4 line poem in basic HTML and separate each line with a <br/>";
    let prompt = "make a poem based on the topic given to you";
    let apiUrl =
        "https://api.shecodes.io/ai/v1/generate?prompt=make a poem based on the topic given to you&context=you are a polite literate AI that can compose poems.Generate a 4 line poem in basic HTML and separate each line with a <br/>&key=491ft9f19a10791b7da8b060497d3o64";
    poem.innerHTML = axios.get(apiUrl).then(showAnswer);
}

let poemFormElement = document.querySelector("#poemForm");
poemFormElement.addEventListener("submit", generatePoem);
