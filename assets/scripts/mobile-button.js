let mobile_button = document.querySelector('[data-mobile-button]');
let navbar = document.querySelector('[data-navbar]');
console.log()

let menu = false;

mobile_button.addEventListener('click', ()=>{   
    //navbar.classList.toggle("mobileON");
    if(!menu){
        navbar.classList.remove('buttonMobileClose');
        navbar.classList.add('buttonMobileOpen');
        menu = true;
        console.log(menu) 
    }else{
        navbar.classList.remove('buttonMobileOpen');
        navbar.classList.add('buttonMobileClose');
        menu = false;
        console.log(menu)
    }       
})



