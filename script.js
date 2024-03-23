const textAreaEl = document.querySelector('.textarea');
const charactersNumberEl = document.querySelector('.stat__number--characters');
const twitterNumberEl = document.querySelector('.stat__number--twitter');
const facebookNumberEl = document.querySelector('.stat__number--facebook');
const wordsNumberEl = document.querySelector('.stat__number--words');

const inputHandler = ()=>{
//input validation
if(textAreaEl.value.includes('<script>')){
    alert('This is not allowed');
    textAreaEl.value = textAreaEl.value.replace('<script>',' ');
   } 
    //charcters
    const numberOfCharacters = textAreaEl.value.length;
    charactersNumberEl.textContent = numberOfCharacters;
    //Words
    const numberOfWords = textAreaEl.value.split(' ').length;
    wordsNumberEl.textContent = numberOfWords;
    if(textAreaEl.value.length === 0){
        wordsNumberEl.textContent = 0;
    }
    // twitter
    const twitterCharsEl = 280 - numberOfCharacters;
    twitterNumberEl.textContent = twitterCharsEl;
    if(twitterCharsEl<0){
        twitterNumberEl.classList.add('stat__number--limit');
    }
    else{
        twitterNumberEl.classList.remove('stat__number--limit');
    }

    // facebook
    const facebookCharsEl = 63206 - numberOfCharacters;
    if(facebookCharsEl<0){
        facebookNumberEl.classList.add('stat__number--limit');
    }
    else{
        facebookNumberEl.classList.remove('stat__number--limit');
    } 
    facebookNumberEl.textContent = facebookCharsEl;
};


textAreaEl.addEventListener('input',inputHandler);
