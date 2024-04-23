function showAnswer(response) {
    let poem = document.querySelector("#poem");
    poem.innerHTML = response.data.answer;
}
function generatePoem(event) {
    event.preventDefault();
    let instructions = document.querySelector("#userinstructions");
    let apiKey = "491ft9f19a10791b7da8b060497d3o64";
    let context = `you are a polite literate AI that can compose poems.Generate a 4 line poem in basic HTML and separate each line with a <br/>. Make sure to use the input from ${instructions}.`;
    let prompt = `make a poem based on ${instructions} given to you.`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    axios.get(apiUrl).then(showAnswer);
}

let poemFormElement = document.querySelector("#poemForm");
poemFormElement.addEventListener("submit", generatePoem);