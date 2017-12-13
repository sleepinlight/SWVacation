export const swSearch = swQuery => {
  fetch('https://swapi.co/api/planets/?search=' + swQuery, {
    method: 'GET',
    mode: 'cors',
    redirect: 'follow',
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      return data.results;
    })
    .catch(function(err) {
      err = 'errrr!';
      console.log(err);
    });
};

export const retrieveResults = swInput => {
  swInput = document.getElementById('swsearchbar').value;
  swSearch(swInput);
};

//document.getElementById('swsubmit').addEventListener("click", runIt);

const iterator = (arr, desc1, desc2, desc3) => {
  arr.forEach(function(arrayItem) {
    var x = arrayItem[desc1];
    var b = arrayItem[desc2];
    var y = arrayItem[desc3];
    console.log(x + ' has an ' + b + ' climate.');
  });
};

export const planetator = arr => {
  arr.forEach(function(arrayItem) {
    var x = arrayItem['name'];
    return x;
  });
};

//console.log(iterator(data.results, 'name', 'climate', 'population'));
