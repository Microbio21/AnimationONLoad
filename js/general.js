//Open menu mobil
function openMenu(){
    const menu = document.getElementsByClassName('NavList');
    menu[0].classList.toggle('open');
}

//Animations
window.onload = function() {
    const hidden = document.getElementById('HeaderHidden');
    let card1 = document.getElementById('card1');
    let card2 = document.getElementById('card2');
    let card3 = document.getElementById('card3');
    let primary = document.getElementById('primary');

    hidden.classList.add('HeaderStatick');
    primary.classList.add('primaryStatick');
    card1.classList.add('cardStatick');
    card2.classList.add('cardStatick');
    card3.classList.add('cardStatick');
}
