const api_key = '62e75e86b830e8bfa3321bb9';
const url = "https://v6.exchangerate-api.com/v6/" + api_key;


const currency_one = document.getElementById('currency_one');
const currency_two = document.getElementById('currency_two');
const list_one = document.getElementById('list_one');
const list_two = document.getElementById('list_two');
const amount = document.getElementById('amount');
const calculate = document.getElementById('calculate');
const result = document.getElementById('result');

fetch(url + "/codes")
    .then(res => res.json())
    .then(data => {
        const items=data.supported_codes;

        let options;
        
        for(let item of items){
            options += `<option value=${item[0]} > ${item[1]}</option>`;
        }

        list_one.innerHTML = options;
        list_two.innerHTML = options
    })

calculate.addEventListener('click', () => {
    const doviz1 = currency_one.value;
    const doviz2 = currency_two.value;
    const amount_value = amount.value;

    fetch(url + "/latest/" + doviz1)
        .then(res => res.json())
        .then(data => {

            const rate = data.conversion_rates[doviz2] * amount_value;
            result.innerHTML = `
            <div class="card border-primary">
                    <div class="card-body text-center" style="font-size:30px;">
                        ${amount_value} ${doviz1} =${rate} ${doviz2}
                    </div>
            `;
        })

})