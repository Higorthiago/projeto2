const button = document.querySelector('.convert-button')
const currencySelect = document.querySelector('.currency-select')

function convertValues(){
    const inputCurrencyValue = document.querySelector('.input-currency').value
    const currencyValuetoconvert = document.querySelector('.currency-value-to-convert')
    const currencyValuetoconverted = document.querySelector('.currency-value')

    
    const dolarToday = 5.2
    const euroToday = 6.2
    

    if(currencySelect.value == 'dolar'){
        currencyValuetoconverted.innerHTML = new Intl.NumberFormat('en-US',{
            style: 'currency',
            currency: 'USD'
    
        }).format(inputCurrencyValue / dolarToday
        )

    }

    if(currencySelect.value == 'euro'){
        currencyValuetoconverted.innerHTML = new Intl.NumberFormat('de-DE',{
            style: 'currency',
            currency: 'EUR'
        }).format(inputCurrencyValue / euroToday)
        

    }

    currencyValuetoconvert.innerHTML = new Intl.NumberFormat('pt-BR',{
        style: 'currency',
        currency: 'BRL'
    }).format(inputCurrencyValue)

    

    
}


button.addEventListener('click', convertValues)