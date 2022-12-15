const tag_form = document.getElementById('tag_data');
const company = tag_form.elements['company'];
const recipient_name = tag_form.elements['name'];
const address = tag_form.elements['address'];
const house_number = tag_form.elements['house_number'];
const district = tag_form.elements['district'];
const complement = tag_form.elements['complement'];
const postal_code = tag_form.elements['postal_code'];
const city = tag_form.elements['city'];
const state = tag_form.elements['state'];
const nf = tag_form.elements['nf'];

function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        var expires = "; expires=" + date.toGMTString();
    }
    else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}

const states = {
    "AC": "Acre",
    "AL": "Alagoas",
    "AP": "Amapá",
    "AM": "Amazonas",
    "BA": "Bahia",
    "CE": "Ceará",
    "DF": "Distrito Federal",
    "ES": "Espírito Santo",
    "GO": "Goiás",
    "MA": "Maranhão",
    "MT": "Mato Grosso",
    "MS": "Mato Grosso do Sul",
    "MG": "Minas Gerais",
    "PA": "Pará",
    "PB": "Paraíba",
    "PR": "Paraná",
    "PE": "Pernambuco",
    "PI": "Piauí",
    "RJ": "Rio de Janeiro",
    "RN": "Rio Grande do Norte",
    "RS": "Rio Grande do Sul",
    "RO": "Rondônia",
    "RR": "Roraima",
    "SC": "Santa Catarina",
    "SP": "São Paulo",
    "SE": "Sergipe",
    "TO": "Tocantins"
}

postal_code.addEventListener('blur', (event) => {
    const value = postal_code.value.replace(/[^0-9]+/, '');
    const url = `https://viacep.com.br/ws/${value}/json/`;
    fetch(url)
        .then( response => response.json())
        .then( json => {
        if(json.logradouro) {
            address.value = json.logradouro;
            district.value = json.bairro;
            city.value = json.localidade;
            state.value = states[json.uf];
        }
    });
})


tag_form.addEventListener('submit', (event) => {
    createCookie("company", company.value, 1);
    createCookie("recipient_name", recipient_name.value, 1);
    createCookie("address", address.value, 1);
    createCookie("house_number", house_number.value, 1);
    createCookie("district", district.value, 1);
    createCookie("complement", complement.value, 1);
    createCookie("postal_code", postal_code.value, 1);
    createCookie("city", city.value, 1);
    createCookie("state", state.value, 1);
    createCookie("nf", nf.value, 1);
});
