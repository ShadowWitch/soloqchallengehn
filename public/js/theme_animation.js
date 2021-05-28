
const btn_sun = document.getElementById('btn_sun')
const btn_moon = document.getElementById('btn_moon')

const navbar_container = document.getElementById('navbar_container')
const navbar = document.getElementById('navbar')
const select = document.getElementById('select')
const table = document.getElementById('table')
const body = document.getElementById('body')

const footer_container = document.getElementById('footer_container')

const ganador_div_theme = document.getElementById('ganador_div')

btn_sun.addEventListener('click', () =>{

    if(!navbar.classList.contains('navbar_theme_light')){
        navbar.classList.add('navbar_theme_light')
    }

    if(!body.classList.contains('body_theme_light')){
        body.classList.add('body_theme_light')
    }


    // Elementos del menu
    const elemento_1 = navbar_container.children[1].children[1];
    const elemento_2 = navbar_container.children[2].children[1];
    const elemento_3 = navbar_container.children[3].children[1];

    if(!elemento_1.classList.contains('itemnavbar_theme_light') && !elemento_2.classList.contains('itemnavbar_theme_light') && !elemento_3.classList.contains('itemnavbar_theme_light')){
        elemento_1.classList.add('itemnavbar_theme_light')
        elemento_2.classList.add('itemnavbar_theme_light')
        elemento_3.classList.add('itemnavbar_theme_light')
    }
    
    if(!select.classList.contains('select_theme_light')){
        select.classList.add('select_theme_light')
    }

    if(table.classList.contains('table-dark')){
        table.classList.remove('table-dark')
    }
    

    if(!footer_container.classList.contains('footer_container_theme_light')){
        footer_container.classList.add('footer_container_theme_light')
    }ganador_div_theme


    if(!ganador_div_theme.classList.contains('ganador_div_theme_light')){
        ganador_div_theme.classList.add('ganador_div_theme_light')
    }


})

btn_moon.addEventListener('click', () =>{
    if(navbar.classList.contains('navbar_theme_light')){
        navbar.classList.remove('navbar_theme_light')
    }
  
    if(body.classList.contains('body_theme_light')){
        body.classList.remove('body_theme_light')
    }

    // Elementos del menu
    const elemento_1 = navbar_container.children[1].children[1];
    const elemento_2 = navbar_container.children[2].children[1];
    const elemento_3 = navbar_container.children[3].children[1];
 
    
    if(elemento_1.classList.contains('itemnavbar_theme_light') && elemento_2.classList.contains('itemnavbar_theme_light') && elemento_3.classList.contains('itemnavbar_theme_light')){
        elemento_1.classList.remove('itemnavbar_theme_light')
        elemento_2.classList.remove('itemnavbar_theme_light')
        elemento_3.classList.remove('itemnavbar_theme_light')
    }
    
    if(select.classList.contains('select_theme_light')){
        select.classList.remove('select_theme_light')
    }

    if(!table.classList.contains('table-dark')){
        table.classList.add('table-dark')
    }


    if(footer_container.classList.contains('footer_container_theme_light')){
        footer_container.classList.remove('footer_container_theme_light')
    }

    if(ganador_div_theme.classList.contains('ganador_div_theme_light')){
        ganador_div_theme.classList.remove('ganador_div_theme_light')
    }

})




// qwe