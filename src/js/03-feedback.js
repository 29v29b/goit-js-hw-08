import throttle from 'lodash.throttle'

const refs = {
form: document.querySelector(".feedback-form"),
input: document.querySelector(".feedback-form input"),
textarea: document.querySelector(".feedback-form textarea")
}
const LOCALSTORAGE_KEY = "feedback-form-state"

populateText()

function onFormSubmit(event) {
    event.preventDefault();
    console.log('Sending form');
    populateText();

    event.currentTarget.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY)
}

function onInput(event) {  
    let data = {
        email: refs.input.value,
        message: refs.textarea.value,
    };
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data))
}

refs.form.addEventListener('submit', onFormSubmit);
refs.input.addEventListener('input', throttle(onInput, 500));
refs.textarea.addEventListener('input', throttle(onInput, 500));

document.addEventListener('DOMContentLoaded', () => {
    if(localStorage.getItem(LOCALSTORAGE_KEY) != null) {
        var data = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY))
        refs.input.value = data.email
        refs.textarea.value = data.message
    } 
})

function populateText() {
    console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
}