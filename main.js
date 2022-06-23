const formEl = document.querySelector('form')
const inputEl = document.querySelector('.tweet-input')
const ol = document.querySelector('ol')
// const searchEl = document.querySelector('')
let data = [];

// eventListener
formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputValue = inputEl.value;
    const id = data.length + 1;
    // console.log(inputValue);
    createList(inputValue, id);
    resetValue(inputEl)
    const eachData = dataCreate(id, inputValue)
    data.push(eachData)
    dataAddToLocalStorage(id, inputValue)
})
ol.addEventListener('click', (e)=>{
    if(e.target.classList.contains('fa-trash')){
        console.log('trash');
        const id = getID(e.target)
        console.log(id);
        removeFromUI(id)
        removeDataFromTrack(id)
    }
})

// logical function
function removeDataFromTrack(id){
    data = data.filter(tweet => {
        return tweet.id !== id
    })
}

function dataAddToLocalStorage(id, tweet){
    const tweets = dataCreate(id, tweet)
    if(localStorage.getItem('Tweets')){
        const oldData = JSON.parse(localStorage.getItem('Tweets'))
        oldData.push(tweets)
        localStorage.setItem('Tweets', JSON.stringify(oldData))

    }else{
        const data = [];
        data.push(tweets)
        localStorage.setItem('Tweets', JSON.stringify(data))
    }
}

function removeFromUI(id){
    document.querySelector(`#item-${id}`).remove()
}

function getID(elm){
    const listElm = elm.parentElement;
    return Number(listElm.getAttribute('id').split('-')[1])
}

function dataCreate(id, tweet){
    const eachData = {
        id,
        tweet
    }
   return eachData;
}

function createList(value, id){
    const listEl = `<li id="item-${id}">${value} <i class="fa fa-trash"></i></li>`
    ol.insertAdjacentHTML('beforeend', listEl)

}
function resetValue(inputEl){
    inputEl.value = '';
}