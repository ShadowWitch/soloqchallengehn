
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const request = require('request');
const { json } = require('body-parser');

// Configuracion Ejs y public
app.set('view engine', 'ejs')
app.set('views', __dirname + "/views")
app.use(express.static(__dirname + "/public"))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Dotenv configuracion
require('dotenv').config()
const apiKey = process.env.APIKEY;
const port = process.env.PORT || 3000;


const participantes = [
    {
        jugador: "Jorge Reyes",
        rol: "sup",
        opgg: "https://lan.op.gg/summoner/userName=hagert",
        id: 'El3DwxD3xOCu_pX93-tl_K0mGcurcQ2SEMptsx8dTG1ZqA',
        accountId: '7bEukfh53fVICAXa15j1UAcdt2jNOi4uxxMf4d1nlS1TkBA',
        puuid: 'Naf3XLEpYKY-2d545hlXX9UeFfE7ZxgzTbbu6tIoH3-wJuM_WniAc1p8icl9QX73adFSbBzvWMp77w',
        name: 'hagert',
        profileIconId: 10,
        revisionDate: 1620616930000,
        summonerLevel: 520,
    }
]


// Middlewares
app.get('/',  (req, res) =>{

    const resultado_datos = [];

    for (const nick_name of participantes) {
        const {id, name, profileIconId, summonerLevel, jugador, rol, opgg} = nick_name;
        // console.log(id)
        // console.log(name)

        request({
            url: `https://la1.api.riotgames.com/lol/league/v4/entries/by-summoner/${id}?api_key=${apiKey}`,
            json: true,
        }, (error, respuesta, body) => {
            if(!error && respuesta.statusCode == 200){
                // console.log(body[0].queueType)
                // console.log(body[0].summonerName)
                // console.log(body[1])

                const bugCorregirElosSoloQFlex = (toParse) =>{
                    const {tier, rank, summonerName, leaguePoints, wins, losses, inactive} = toParse;

                    resultado_datos.push({
                        rol,
                        jugador,
                        opgg,
                        tier,
                        rank,
                        summonerName,
                        leaguePoints,
                        wins,
                        losses,
                        inactive,
                        profileIconId
                    })
                }


                if(body[0].queueType == "RANKED_SOLO_5x5"){ // En caso de que encuentre que es "SoloQ"
                    // const toParse = body[0]; // Esto es para corregir el Bug ya que algunas veces se solicitan al revez los datos de la API (osea solicita primero flex o soloQ)
                    // console.log(body[0].summonerName)
                    const toParse = body[0]
                    bugCorregirElosSoloQFlex(toParse)
                    
                }else{  // En caso de que sea "Flex", que tome los datos del "body[1]" ya que estan al revez y por lo tanto ahi estaran los datos del "soloQ" entonces...
                    const toParse = body[1]
                    bugCorregirElosSoloQFlex(toParse)
                }

                // const toParse = body[0];
                

                
            }else{
                console.log('Error en la consulta')
            }
        })
    }

    setTimeout(() =>{
        // console.log(resultado_datos)

        res.render('index',{
            resultado_datos
        })

    }, 3500)
    
})



// Error 404
app.use((req, res, next) =>{
    res.status(404).end('Error 404')
})




app.listen(port, () =>{
    console.log(`Servidor iniciado en el puerto ${port}`)
})









// qwe