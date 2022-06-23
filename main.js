const formEl = document.querySelector('form')
const inputEl = document.querySelector('.tweet-input')
const ol = document.querySelector('ol')
// const searchEl = document.querySelector('')
let data = [];

formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputValue = inputEl.value;
    console.log(inputValue);
    createList(inputValue);
    resetValue(inputEl)
})

function dataTrack(){
    // data = {
    //     id:
    //     tweet:
    // }
}
function getID(){

}
function createList(value){
    const listEl = `<li id="">${value} <i class="fa fa-trash"></i></li>`
    ol.insertAdjacentHTML('beforeend', listEl)

}
function resetValue(inputEl){
    inputEl.value = '';
}