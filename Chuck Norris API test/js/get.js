'use strict';

function get(url) {
  return fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      return data;
    })
    .catch(function (error) {
      return error;
    });
}


const getWithAwait = async url => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}