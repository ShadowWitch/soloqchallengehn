
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
        jugador: "Desconocido",
        rol: 'jgl',
        opgg: 'https://lan.op.gg/summoner/userName=l+CrisTG+l+',
        id: "W5fTve7lzXTUiqOLk29fWVA6UdpxwxC1Mxva0LHZQgiiXaA",
        accountId: "vfWWjEop3F4c3jZweHFQgg8VukqU06xDECDqs5wJS_ozeG_k0-LkHgrX",
        puuid: "N41t3JDgXRnyAkb4K0mUThh_v8ZxEY2_vPCiWox2RMSRxr4WvHgkz_8umykk9Hq-cv2r_-slyKOoUg",
        name: "l CrisTG l ",
        profileIconId: 3367,
        revisionDate: 1642293258054,
        summonerLevel: 62
    },
    {
        jugador: "Desconocido",
        rol: 'mid',
        opgg: 'https://lan.op.gg/summoner/userName=FBGG+MurilloSama',
        id: "caJGhxpN5xVwfEOaZY67KKeV52o3Tof3UTRhS99YaZUJ",
        accountId: "IvLreDgtN7-y_caNcoIWT6u7ozCqIMqS6KHDPHODNh1C258",
        puuid: "qOH2H6w_g1do5TvkdL7WIVE757X5zbdfP5M4RDGiEaqgtjlg807b-ymOddLFKNr2ajDBF_sXkSG5bA",
        name: "FBGG MurilloSama",
        profileIconId: 3817,
        revisionDate: 1641934173000,
        summonerLevel: 158
    },
    {
        jugador: "Desconocido",
        rol: 'adc',
        opgg: 'https://lan.op.gg/summoner/userName=GOT+Catan',
        id: "Ck77LA-9r87xHZZ8-cWBux6yJKJgEjOCOavDO54f5XCNKRs",
        accountId: "Iq60zl_Wr1k_teoxnVZnvoNYAnw7p1ZT8zfhjKSwYSu3fRw",
        puuid: "-T9zs_x6X5tyJRScA6yKuOhQqAHp08JR_m1foNCJCpgz2Kwy446kfvxbC6DDwW8BsfYyoadtGsTjwg",
        name: "GOT Catan",
        profileIconId: 3230,
        revisionDate: 1642177551000,
        summonerLevel: 434
    },
    {
        jugador: "Desconocido",
        rol: 'adc',
        opgg: 'https://lan.op.gg/summoner/userName=Seik',
        id: "VRiwhSK7TjBcU2F_HJIqniWLNH_3wBOdCz_rJquEBsF1",
        accountId: "mYVjz7FxZp8q8wdEqG3WTN4O8jZCrcJJVE0LLo34HXBRHRY",
        puuid: "dbzYlqwH1GywnkP67EAR9qrlVMXHPQfWGggEV8tr838E7GZLdPVNI2SvnwJBdybEpol3tTvc4xee3Q",
        name: "Seik",
        profileIconId: 3329,
        revisionDate: 1641936903000,
        summonerLevel: 378
    },
    {
        jugador: "Desconocido",
        rol: 'sup',
        opgg: 'https://lan.op.gg/summoner/userName=Steve',
        id: "S9xaF2xDgcAi9404eepVGU_dEPN9S-r_wPqWpDIGBIe5gw0",
        accountId: "QObFfrLeEviVNOo_2EKVC7ehv72GayJxUCOZVc5VUKRWHFazCNT58mzE",
        puuid: "GmO5C4e9Ak_sR1CEtVOxZfmflw4nBAMi_pQEIKjZk8T5wGV0Kev0rQgOaJdJ8pii9PgRFJkHR5ZfhA",
        name: "Steve",
        profileIconId: 3458,
        revisionDate: 1642298719110,
        summonerLevel: 69
    },
    {
        jugador: "Desconocido",
        rol: 'sup',
        opgg: 'https://lan.op.gg/summoner/userName=blacks',
        id: "NrDnYSB3NR7D7shVp4lGJ1t9ipmgY0SVxBhgXTDRkbrtE_l6eufWygDdLA",
        accountId: "BYZ76cJcE--DYdXntSm0Lfoe2dz_0drryfZgZFQfh9GnbwH7iYZl8S9A",
        puuid: "TYClgzZ2abydsubQ2lXhxYew2MFXVjQnWKyDZtXtROjQuSA0l7zo7IKqQZ9paQaNMOxuR_otch2FcA",
        name: "blacks",
        profileIconId: 3212,
        revisionDate: 1642087366000,
        summonerLevel: 34
    },
    {
        jugador: "Desconocido",
        rol: 'adc',
        opgg: 'https://lan.op.gg/summoner/userName=RisilexTV',
        id: "zRVvAMDc36eZ6RER2GUY-QSpTk5G2vqSIcY-Wa-zfTZFPYc",
        accountId: "ggMr1wuBC3RytNYvugzzMIIT1Fja_kr5e7UcEp1m4NKD9CbuZ53FsTSL",
        puuid: "qpBJdWCgud8MceEFtODNpXCO26-aNRPTBtxnkUpe3Sw8SzUQwE8CkCBkSHxVwlvfgjQ5FpdiHHH9kA",
        name: "RisilexTV",
        profileIconId: 3934,
        revisionDate: 1642111274000,
        summonerLevel: 319
    }
]

// Middlewares
app.get('/',  (req, res) =>{

    const resultado_datos = [];

    for (const nick_name of participantes) {
        const {id, name, profileIconId, accountId, summonerLevel, jugador, rol, opgg} = nick_name;
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
                console.log('Error en la consultassss')
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