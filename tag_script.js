const logo = document.getElementById('logo');
const recipient_name = document.getElementById('name');
const address = document.getElementById('address');
const house_number = document.getElementById('house_number');
const complement = document.getElementById('complement');
const postal_code = document.getElementById('postal_code');
const city = document.getElementById('city');
const state = document.getElementById('state');

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

let logos = {
	"Monstrosol": "assets/logo-monstrosol.png",
  	"MaskPro": "assets/logo_maskpro.png"
};

let logo_path = logos[readCookie('company')];
logo.setAttribute('src', logo_path);
recipient_name.innerText = readCookie('recipient_name')
address.innerText = readCookie('address')
house_number.innerText = readCookie('house_number')
complement.innerText = readCookie('complement')
if (complement.innerText === "") {complement.innerText = "-"}
postal_code.innerText = readCookie('postal_code')
city.innerText = readCookie('city')
state.innerText = readCookie('state')

