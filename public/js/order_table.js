
 const liga = {
    'SILVER IV' : 5,
    'SILVER III' : 10,
    'SILVER II' : 15,
    'SILVER I' : 20,

    'GOLD IV' : 25,
    'GOLD III' : 30,
    'GOLD II' : 35,
    'GOLD I' : 40,

    'PLATINUM IV' : 45,
    'PLATINUM III': 50,
    'PLATINUM II': 55,
    'PLATINUM I': 60,

    'DIAMOND IV': 65,
    'DIAMOND III': 70,
    'DIAMOND II': 80,
    'DIAMOND I': 90,

    'MASTER I': 100,
    'GRANDMASTER I': 200,
    'CHALLENGER I': 300
}


const tbody = document.getElementById('tbody')
const ganador_div = document.getElementById('ganador_div')

let primer_lugar_top;
let puntaje_total;
const datos_tabla = [];
let element_anterior = 0;
let ganador = "";


for(const i of tbody.children){
    const nombre_invocador = i.children[1].children[0].textContent
    const liga_invocador = i.children[4].children[1].textContent;
    const tier_invocador = liga_invocador.split(' ')[0]
    const rank_invocador = liga_invocador.split(' ')[1]
    const puntaje_liga = liga_invocador.split(' ')[2].split('(')[1]
    const img_cuenta = i.children[3].children[0]
    const cuenta = i.children[3].childNodes[2].textContent
    const img_liga = i.children[4].children[0]


    puntaje_total = 0;

    if(tier_invocador == "SILVER" && rank_invocador == "IV"){
        puntaje_total = 5 + parseInt(puntaje_liga);
        datos_tabla.push({
            nombre_invocador,
            puntaje_total,
            liga_invocador,
            tier_invocador,
            rank_invocador,
            puntaje_liga,
            cuenta,
            img_cuenta,
            img_liga
        })
    }else if(tier_invocador == "SILVER" && rank_invocador == "III"){
        puntaje_total = 10 + parseInt(puntaje_liga);
        datos_tabla.push({
             nombre_invocador,
            puntaje_total,
            liga_invocador,
            tier_invocador,
            rank_invocador,
            puntaje_liga,
            cuenta,
            img_cuenta,
            img_liga
        })
    }else if(tier_invocador == "SILVER" && rank_invocador == "II"){
        puntaje_total = 15 + parseInt(puntaje_liga);
        datos_tabla.push({
             nombre_invocador,
            puntaje_total,
            liga_invocador,
            tier_invocador,
            rank_invocador,
            puntaje_liga,
            cuenta,
            img_cuenta,
            img_liga
        })
    }else if(tier_invocador == "SILVER" && rank_invocador == "I"){
        puntaje_total = 20 + parseInt(puntaje_liga);
        datos_tabla.push({
             nombre_invocador,
            puntaje_total,
            liga_invocador,
            tier_invocador,
            rank_invocador,
            puntaje_liga,
            cuenta,
            img_cuenta,
            img_liga
        })
    }else if(tier_invocador == "GOLD" && rank_invocador == "IV"){
        puntaje_total = 25 + parseInt(puntaje_liga);
        datos_tabla.push({
             nombre_invocador,
            puntaje_total,
            liga_invocador,
            tier_invocador,
            rank_invocador,
            puntaje_liga,
            cuenta,
            img_cuenta,
            img_liga
        })
    }else if(tier_invocador == "GOLD" && rank_invocador == "III"){
        puntaje_total = 30 + parseInt(puntaje_liga);
        datos_tabla.push({
             nombre_invocador,
            puntaje_total,
            liga_invocador,
            tier_invocador,
            rank_invocador,
            puntaje_liga,
            cuenta,
            img_cuenta,
            img_liga
        })
    }else if(tier_invocador == "GOLD" && rank_invocador == "II"){
        puntaje_total = 35 + parseInt(puntaje_liga);
        datos_tabla.push({
             nombre_invocador,
            puntaje_total,
            liga_invocador,
            tier_invocador,
            rank_invocador,
            puntaje_liga,
            cuenta,
            img_cuenta,
            img_liga
        })
    }else if(tier_invocador == "GOLD" && rank_invocador == "I"){
        puntaje_total = 40 + parseInt(puntaje_liga);
        datos_tabla.push({
             nombre_invocador,
            puntaje_total,
            liga_invocador,
            tier_invocador,
            rank_invocador,
            puntaje_liga,
            cuenta,
            img_cuenta,
            img_liga
        })
    }else if(tier_invocador == "PLATINUM" && rank_invocador == "IV"){
        puntaje_total = 45 + parseInt(puntaje_liga);
        datos_tabla.push({
             nombre_invocador,
            puntaje_total,
            liga_invocador,
            tier_invocador,
            rank_invocador,
            puntaje_liga,
            cuenta,
            img_cuenta,
            img_liga
        })
    }else if(tier_invocador == "PLATINUM" && rank_invocador == "III"){
        puntaje_total = 45 + parseInt(puntaje_liga);
        datos_tabla.push({
             nombre_invocador,
            puntaje_total,
            liga_invocador,
            tier_invocador,
            rank_invocador,
            puntaje_liga,
            cuenta,
            img_cuenta,
            img_liga
        })
    }else if(tier_invocador == "PLATINUM" && rank_invocador == "II"){
        puntaje_total = 50 + parseInt(puntaje_liga);
        datos_tabla.push({
             nombre_invocador,
            puntaje_total,
            liga_invocador,
            tier_invocador,
            rank_invocador,
            puntaje_liga,
            cuenta,
            img_cuenta,
            img_liga
        })
    }else if(tier_invocador == "PLATINUM" && rank_invocador == "I"){
        puntaje_total = 55 + parseInt(puntaje_liga);
        datos_tabla.push({
             nombre_invocador,
            puntaje_total,
            liga_invocador,
            tier_invocador,
            rank_invocador,
            puntaje_liga,
            cuenta,
            img_cuenta,
            img_liga
        })
    }else if(tier_invocador == "PLATINUM" && rank_invocador == "IV"){
        puntaje_total = 60 + parseInt(puntaje_liga);
        datos_tabla.push({
             nombre_invocador,
            puntaje_total,
            liga_invocador,
            tier_invocador,
            rank_invocador,
            puntaje_liga,
            cuenta,
            img_cuenta,
            img_liga
        })
    }else if(tier_invocador == "PLATINUM" && rank_invocador == "III"){
        puntaje_total = 65 + parseInt(puntaje_liga);
        datos_tabla.push({
             nombre_invocador,
            puntaje_total,
            liga_invocador,
            tier_invocador,
            rank_invocador,
            puntaje_liga,
            cuenta,
            img_cuenta,
            img_liga
        })
    }else if(tier_invocador == "PLATINUM" && rank_invocador == "II"){
        puntaje_total = 70 + parseInt(puntaje_liga);
        datos_tabla.push({
             nombre_invocador,
            puntaje_total,
            liga_invocador,
            tier_invocador,
            rank_invocador,
            puntaje_liga,
            cuenta,
            img_cuenta,
            img_liga
        })
    }else if(tier_invocador == "PLATINUM" && rank_invocador == "I"){
        puntaje_total = 75 + parseInt(puntaje_liga);
        datos_tabla.push({
             nombre_invocador,
            puntaje_total,
            liga_invocador,
            tier_invocador,
            rank_invocador,
            puntaje_liga,
            cuenta,
            img_cuenta,
            img_liga
        })
    }else if(tier_invocador == "DIAMOND" && rank_invocador == "IV"){
        puntaje_total = 80 + parseInt(puntaje_liga);
        datos_tabla.push({
             nombre_invocador,
            puntaje_total,
            liga_invocador,
            tier_invocador,
            rank_invocador,
            puntaje_liga,
            cuenta,
            img_cuenta,
            img_liga
        })
    }else if(tier_invocador == "DIAMOND" && rank_invocador == "III"){
        puntaje_total = 85 + parseInt(puntaje_liga);
        datos_tabla.push({
             nombre_invocador,
            puntaje_total,
            liga_invocador,
            tier_invocador,
            rank_invocador,
            puntaje_liga,
            cuenta,
            img_cuenta,
            img_liga
        })
    }else if(tier_invocador == "DIAMOND" && rank_invocador == "II"){
        puntaje_total = 90 + parseInt(puntaje_liga);
        datos_tabla.push({
             nombre_invocador,
            puntaje_total,
            liga_invocador,
            tier_invocador,
            rank_invocador,
            puntaje_liga,
            cuenta,
            img_cuenta,
            img_liga
        })
    }else if(tier_invocador == "DIAMOND" && rank_invocador == "I"){
        puntaje_total = 95 + parseInt(puntaje_liga);
        datos_tabla.push({
             nombre_invocador,
            puntaje_total,
            liga_invocador,
            tier_invocador,
            rank_invocador,
            puntaje_liga,
            cuenta,
            img_cuenta,
            img_liga
        })
    }else if(tier_invocador == "MASTER" && rank_invocador == "I"){
        puntaje_total = 100 + parseInt(puntaje_liga);
        datos_tabla.push({
             nombre_invocador,
            puntaje_total,
            liga_invocador,
            tier_invocador,
            rank_invocador,
            puntaje_liga,
            cuenta,
            img_cuenta,
            img_liga
        })
    }else if(tier_invocador == "CHALLENGER" && rank_invocador == "I"){
        puntaje_total = 200 + parseInt(puntaje_liga);
        datos_tabla.push({
             nombre_invocador,
            puntaje_total,
            liga_invocador,
            tier_invocador,
            rank_invocador,
            puntaje_liga,
            cuenta,
            img_cuenta,
            img_liga
        })

    }
    // console.log(tier_invocador)
    // console.log(rank_invocador)
    // console.log(puntaje_liga)
    // console.log(nombre_invocador)
    // console.log(img_liga)
}

datos_tabla.forEach(element =>{
    
    if(element.puntaje_total > element_anterior){
        element_anterior = element.puntaje_total
        ganador = element;
    }
})

// console.log(ganador.liga_invocador)
// console.log(ganador.img_cuenta.src)
// console.log(ganador.cuenta)

ganador_div.innerHTML = `
    <h2>TOP 1 ACTUAL</h2>
    <strong>Jugador: </strong><span class="top_datos"> ${ganador.nombre_invocador}</span></br>
    <strong>Cuenta: </strong><span class="top_datos"> <img src="${ganador.img_cuenta.src}" class="img_invocador rounded-circle" /> ${ganador.cuenta}</span></br>
    <strong>Elo: </strong><span class="top_datos"> <img src="${ganador.img_liga.src}" class="img_invocador rounded-circle" /> ${ganador.liga_invocador}</span>
`



// qwe