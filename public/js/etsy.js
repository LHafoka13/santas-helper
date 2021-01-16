//grabbing DOM elements
const searchBtn = document.getElementById('search-btn');
const productInputEl = document.getElementById('productName')
const resultsHolder = document.getElementById('resultsDisplay');
const result = document.getElementById('test');

//function that calls the Etsy API and returns data
search = (event) => {
    event.preventDefault();
    
    //takes the user input and plugs it into the api url
    let product = productInputEl.value.trim();
    etsyApiURL =`https://openapi.etsy.com/v2/listings/active?keywords=${product}&api_key=dzoouqyq8ghesfvn9jy7fj6b`;
    console.log(etsyApiURL);

    //fetch call and response
    fetch(etsyApiURL).then((response) => {
        if (response.ok) {
            console.log(response);
            response.json().then((data) => {
                console.log(data.results);
                
                let resultsArray = data.results

                resultsArray.forEach((product) => {
                let li = document.createElement('li');
                li.className = "collection-item avatar";
                a.innerHTML = product.title;
                resultsHolder.appendChild(a);
                })
            });
        };
    }); 
};



//event listener
searchBtn.addEventListener('click', search);


