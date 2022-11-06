/*------------------------------------
  Country name show service.html
--------------------------------------*/


document.getElementById('test1').innerHTML = countries.map(index => {
    return (
        `<div class='col-xl-3 country-name'>
             <a href=${index.value.toLowerCase()}.html class='country-flag'>
                <img src=${`https://cdn.jsdelivr.net/npm/svg-country-flags@1.2.10/svg/${index.value.toLowerCase()}.svg`} alt='icon' />
                <h6 class='cName'> ${index.text}</h6>
            </a>
        </div>`)
}).join('')


