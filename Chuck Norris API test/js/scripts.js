'use strict';

let category = 'dev';

const refreshQuoteButton = document.querySelector('#refreshQuote');
const submitFormButton = document.querySelector('#submitForm');
const categoryChangeForm = document.querySelector('#categoryChangeForm');
const closeModalButton = document.querySelector('#closeModal');

const getQuote = async category => {
  const apiUrl = `https://api.chucknorris.io/jokes/random?category=${category}`;
  const chuckSaysParagraph = document.querySelector('#chuckSays');
  const modalWindow = document.querySelector(".modal-overlay");

  const theQuote = await getWithAwait(apiUrl);
  chuckSaysParagraph.innerHTML = theQuote.value
  modalWindow.classList.toggle('open');
}



const getCategories = async () => {
  const apiUrl = `https://api.chucknorris.io/jokes/categories`;
  const categorySelectLabel = document.querySelector('#categorySelectLabel');

  const categoryList = await getWithAwait(apiUrl);

  const categoryElement = document.createElement('select');
  // Create the options for the select element
  categoryList.map(function (category) {
    const categoryOption = document.createElement('option');
    categoryOption.value = category;
    categoryOption.text = category;
    categoryElement.append(categoryOption);
  });
  categorySelectLabel.appendChild(categoryElement);




}

refreshQuoteButton.addEventListener('click', function (e) {
  e.preventDefault();
  getQuote(category);
});

submitFormButton.addEventListener('click', function (e) {
  e.preventDefault();
  const categoryInput = document.querySelector('#categoryChangeForm select');

  category = categoryInput.value;
  getQuote(category);
});

closeModalButton.addEventListener('click', function (e) {
  const modalWindow = document.querySelector('.modal-overlay');
  modalWindow.classList.toggle('open');
});
getQuote(category);
getCategories();

getWithAwait();
