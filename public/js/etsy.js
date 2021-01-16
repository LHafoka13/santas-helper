//grabbing DOM elements
const searchBtn = document.getElementById('search-btn');
const productInputEl = document.getElementById('productName')

search = (event) => {
    event.preventDefault();
    
    let product = productInputEl.value.trim();
    etsyApiURL =`https://openapi.etsy.com/v2/listings/active?keywords=${product}&api_key=dzoouqyq8ghesfvn9jy7fj6b`;
    console.log(etsyApiURL);

    fetch(etsyApiURL).then((response) => {
        if (response.ok) {
            console.log(response);
            response.json().then((data) => {
                console.log(data);
            })
        }
    })
    
   
}



//event listener
searchBtn.addEventListener('click', search);


