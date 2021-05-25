
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
        jugador: "Don Palote",
        rol: "sup",
        opgg: "https://lan.op.gg/summoner/userName=hagert",
        id: 'l7vvQ8liJhwZx7AjsxRmGzy8qtymarI2FLkpZaiGTK7kpQ',
        accountId: 'U3weh4vm6iGtm73My8vHtCHgIcjCYZ7wra6Yw8bWRnv0ZdI',
        puuid: 'Naf3XLEpYKY-2d545hlXX9UeFfE7ZxgzTbbu6tIoH3-wJuM_WniAc1p8icl9QX73adFSbBzvWMp77w',
        name: 'hagert',
        profileIconId: 10,
        revisionDate: 1620616930000,
        summonerLevel: 520,
    },
    {
        jugador: "Oscar Delarca",
        rol: "top",
        opgg: "https://lan.op.gg/summoner/userName=xlegenda",
        id: 'hMpFhWRo2X_nAa1oyO7KBHx_TycmTUYY7II_lu0GB44gBf8',
        accountId: '-ztbtX-ctT0ZwMUH0Y95-Rz9pm-SeQnr5rK8WvuVubHgW9Y',
        puuid: 'X93PfZABYSLEfQtHVa5KHYFGysybzGIS-aD7jlJAk90X_gXFXQu-L07LBm-Zq2HYxjRnE1bbJ8knlQ',
        name: 'xlegenda',
        profileIconId: 3614,
        revisionDate: 1620433750000,
        summonerLevel: 445
    },
    {
        jugador: "Yafeth",
        rol: "jgl",
        opgg: "https://lan.op.gg/summoner/userName=shadowwitch",
        id: 'H7US2SKNyfUVSqLpAAZVn_nhVLydrVRJsrICSieVEdX9Ew',
        accountId: 'oRA_SX9EnEgeHekOKy6qp-bDB-7CvF7wWQbkgsoPKMTcMqA',
        puuid: 'YQhYIsjR4PqNR7yXMMr7T74XqV3nKCJ9yKVbMlymAHINFkAdmHmLpcAoUClYT3iJVaaJjqMcKDpFVw',
        name: 'ShadowWitch',
        profileIconId: 3151,
        revisionDate: 1620675059000,
        summonerLevel: 312
    },
    {
        jugador:"Daniel",
        rol:"top",
        opgg: "https://lan.op.gg/summoner/userName=raktax",
        id: "bHDS-VBINwabwM-qhOmZVC2ahwxQEQFp_M-rENbYX5ASTZI",
        accountId: "28FC51grV7yvRKNnyepg6zI-WLbSG6wJwHx1T2Qi93BVSj4",
        puuid: "izK8IO3e1xopJzSyjccpkYy5NaSaGH51x4bGRzV7AIqvuYVr2jw5w_wO3bkrA3vxdEAaE7xHiMjAbA",
        name: "Raktax",
        profileIconId: 1429,
        revisionDate: 1620691382000,
        summonerLevel: 226
    },
    {
        jugador: "Randel Alfonzo",
        rol: "mid",
        opgg: "https://lan.op.gg/summoner/userName=cerbero+hn",
        id: "T7pLG92MIdnAXps7U2maSWOD3dFPjj49AzyUHVO-KEiQDIs",
        accountId: "eFZwVTSQxpAq0v8X_5KlOp--7IRWCfE2WkOfJ23g8mV0PEzFP85C4UJ-",
        puuid: "sYirBmMDlJ5B3rtoHqqia_gxqtddhPYO_J8rZi3VR1yPNsqPM7LRpG32QfgUMA8lJjWjB5X6bprsXw",
        name: "CERBERO%20HN",
        profileIconId: 2093,
        revisionDate: 1620790389442,
        summonerLevel: 231
    },
    {
        jugador: "Oscar Delarca",
        rol: "top",
        opgg: "https://lan.op.gg/summoner/userName=arlelle",
        id: "YWy6X8V-GDZQYYvO6dYCoFR2gOoqp8A4wnGhorOBECx-7gI",
        accountId: "RPEvhWcz-Je9DiIAYS3DQJVv9JrUtBQ1B0SFauGAq5aYVUE",
        puuid: "byaBpOtuuRWxi6869ZaeNJQ-dEC-RJAT1tkiEXzxa4pJ4hm-2RyVbR7LUI4m2TuyJ4ft9POs1CQtaA",
        name: "arlelle",
        profileIconId: 1426,
        revisionDate: 1620170628000,
        summonerLevel: 161
    },
    {
        jugador: "Luis Jose",
        rol: "jgl",
        opgg: "https://lan.op.gg/summoner/userName=darkw4lker",
        id: "gooDvp714NHbWJK18x40x0GmE9RMaTgKNwqbBAQJRpokMhM",
        accountId: "sNc1GJFC9fzjRW9yEyBoGeCYTtdgXfjDATkQXrFaBxUAkpg",
        puuid: "hzxKKzM3VIn89j-oVWrla0P_Syov9Ys8-SudzCtMhaWcWNPL70gELXSvHf1XZUJ1vJQBlDJubR1PtA",
        name: "DarkW4lker",
        profileIconId: 1386,
        revisionDate: 1620880417641,
        summonerLevel: 237
    },
    {
        jugador: "Oscar Delarca",
        rol: "top",
        opgg: "https://lan.op.gg/summoner/userName=xalienxx",
        id: "ICtZoCLGGaZZAXDmQjOep_WKT1LF7TnSejEW_xaeQI5Jx-8",
        accountId: "_DER5sf27-q82dQxPQiRjqu3KKb2lBaWuKsFxlonW9KglcdtBOE7NaRK",
        puuid: "Fq36ijChX9OJom4l8OXqgauAv7ic0LIpa_zYF0XXtbqqy9--zsAeedj5ec1dWH9Ul3peUZI-qVIKCA",
        name: "xAlienXx",
        profileIconId: 4372,
        revisionDate: 1620678369000,
        summonerLevel: 143
    },
    {
        jugador: "Antonelly",
        rol: "mid",
        opgg: "https://lan.op.gg/summoner/userName=khyng",
        id: "UyGa55YIR916lWOSKxWFzTgrk176CLft1BK39ldpjB9jA7Q",
        accountId: "JSjt-Q9AAOV5jGeTcvK8VQf1oed9KtfCVUjhdR9luZ_CBLg",
        puuid: "-D-h7Bj5hpj65Xydbe4Yj8flsRMexd0qCgwyQd0AcyDgAVgMoTd2fnmPkn0g--JQn-nXEcQcNIZcAA",
        name: "Khyng",
        profileIconId: 4372,
        revisionDate: 1620859287922,
        summonerLevel: 559
    },
    {
        jugador: "Oscar",
        rol: "sup",
        opgg: "https://lan.op.gg/summoner/userName=Thanatos%20OLP",
        id: "wqA6cgG8oRqTu2uhGKc62ehASRRP_lDeqGn3Bazr6VNpbJg",
        accountId: "OrT9WDfym5uYgypzifrKMfNpV47i2G6GKo52l_GMFgGYcwyCqNZ5lNl-",
        puuid: "kSmjhkewdO9eqF8Z80NYOcuaPZUaw8xuvz11mKNZR5PfULVG1VBWGB8hrWJC4OGiEWAKMjfqQw0uFA",
        name: "Thanatos OLP",
        profileIconId: 10,
        revisionDate: 1621667640867,
        summonerLevel: 113
    },
    {
        jugador: "Ivan",
        rol: "adc",
        opgg: "https://lan.op.gg/summoner/userName=ivan+hn",
        id: "gjtHlXrogvojg8twrE7NXPGV3hap3zlKmy74IusjgpFTC-Y",
        accountId: "uUoEFTTF_Msw25RYpHOqRb9FJRqfe5CRYUk0OO3Nh79foxb8oagoGwd7",
        puuid: "G7GbgJvJFL-H_4oVltSN88cpxd6E5lqLSxP0cyZgl3qwNKNn3vhlrIWGYdQutx_UQMpIkIuzPdMMKA",
        name: "Ivan HN",
        profileIconId: 1107,
        revisionDate: 1621794696342,
        summonerLevel: 75
    },
    {
        jugador: "Narandiel",
        rol: "adc",
        opgg: "https://lan.op.gg/summoner/userName=erurainon",
        id: "NVlkcqpQ6JuSPQHJ99qXh-jzO3AO36tEb4cv66tK4m4iJQ",
        accountId: "12wncoGwyY6vjTYru1OsqjgYsWX7KZ8g4NyswdHZBstMf40",
        puuid: "-wulK-JpoDU_TJnhiuodB4TfpbVCQJYDP_DjYpA93pmONtLP_jePscJMkfwM_1qjW0Ua9btSiZZ9eA",
        name: "Erurainon",
        profileIconId: 3353,
        revisionDate: 1621823383705,
        summonerLevel: 317
    },
    {
        jugador: "Desconocido",
        rol: "mid",
        opgg:"https://lan.op.gg/summoner/userName=Pacify",
        id: "amBlS-Wiyq7jiWmsRAbGSlnV6Cn8Du4cJR86fs3n3Ya3lA",
        accountId: "02Q9iezhnqr0wlAwpDHY_4A05AkOlrtABnvBxcWAysIhYDQ",
        puuid: "9s5vZQB0v31EJezMj9J3wdWhqgXyHj9wA4Sm5FY3EajGQVfK9NkOsyH-aL2n1TK8VbhXrmCvCb9NLg",
        name: "Pacify",
        profileIconId: 3353,
        revisionDate: 1621705777000,
        summonerLevel: 368
    },
    {
        jugador: "Desconocido",
        rol: "top",
        opgg:"https://lan.op.gg/summoner/userName=Osvalrod",
        id: "CqlcBOMevHx1S0kuVs2t_3XQXON02QXgaMy9SMtTRw1_Eag",
        accountId: "keQ1CmvUd4UXeaXPpevA3w8oINjai0kBUdeKjFy9LMo_RLo",
        puuid: "dweb3SI7430jyHDCrGJACuGwhHjzcb08DBBLvS_o90XD60waoK5CextnsRjAV9P7deHY8VCBkdEkPg",
        name: "Osvalrod",
        profileIconId: 4476,
        revisionDate: 1621204504000,
        summonerLevel: 480
    },
    {
        jugador: "Desconocido",
        rol: "jgl",
        opgg:"https://lan.op.gg/summoner/userName=juacoso",
        id: "OtEyt6ehZLHB2DBBV2R6Qe3yl5LuwilS3VERuWp0dVY9bw",
        accountId: "51gm07aeR8LchUyMnStZI7V0a5edBR_3ZSosAedSNvW9pUs",
        puuid: "7ZoUjvEdXZcJRKL4ZO2jeSLNU2xrmoNE3eQUpvIQ2nMvXii--NmwwEoK1aydNZtH_UZ2Sgm-zs1zGw",
        name: "juacoso",
        profileIconId: 2092,
        revisionDate: 1621333127000,
        summonerLevel: 413
    },
    {
        jugador: "Desconocido",
        rol: "adc",
        opgg:"https://lan.op.gg/summoner/userName=Rowyn",
        id: "LVmzqlxb6q7DTqvNq7zVt8fASh2yCWv976dSBRaxtWf0IA",
        accountId: "aUb211GueJlIdPZVbnk6pBHWuDNOlpxhdnfTJrU-JxdPhRE",
        puuid: "FqPEw1BnYOmvJsDYnGevpo_k1r21InoFNYT4FBpUnfM7Ym4XuC21ImuNueAa7ra_tMO3AtDAKGqXDQ",
        name: "Rowyn",
        profileIconId: 55,
        revisionDate: 1621192826000,
        summonerLevel: 373
    },
    {
        jugador: "Desconocido",
        rol: "sup",
        opgg:"https://lan.op.gg/summoner/userName=Öld",
        id: "piWvw5-tiMeOqqJoTeEWEy2o-r2PzyJLrPSOe4WUQtu3bw",
        accountId: "KXiC3HmF1atAL0Kvc7bA056EqZLqnkerEQHYwtIOiX8t9-Y",
        puuid: "Qplcc_N36ihvd9t-Ja7FgikJ0lwEfog7BGIB_wICHhglyF4u16sh7rXP6t4H08kATVRoCgtA-6-jPQ",
        name: "Öld",
        profileIconId: 3507,
        revisionDate: 1621288241000,
        summonerLevel: 216
    },
    {
        jugador: "Desconocido",
        rol: "mid",
        opgg:"https://lan.op.gg/summoner/userName=Deklok",
        id: "imwLQB3nIhsmYiAJ-qMJqlqo2L90NbPVRl6ZfdhW7xY",
        accountId: "uWdAYr84N9V0LNQRH7wyGCoFpWb2Gvpd5F90jZIncT5XOdY",
        puuid: "iND22mgdSFk_uz_aL3aF_xkba8F91xCRRWxQZcbBgynuuYPkY38uwEmcACWj9jzslo9YvkMatIGCEA",
        name: "Deklok",
        profileIconId: 4074,
        revisionDate: 1621592481000,
        summonerLevel: 292
    },
    {
        jugador: "Juan",
        rol: "adc",
        opgg:"https://lan.op.gg/summoner/userName=SDE Juanito",
        id: "M26VhX5pVLNboLuNcqrd9krIJUyQYKYGJJTsLiVONDic",
        accountId: "knRTXy93bS-fAvY4c4y-rXpYfWgwSxhAkdQn7oWnKajY11g",
        puuid: "HxCvB7237shcp1p6aTl2VbYeDBxHhQ7ljTO5UWmq4J54hhp0Jlc4OXvj_pYx1upsQTQWRe1kGAnEuw",
        name: "SDE Juanito",
        profileIconId: 3460,
        revisionDat: 1621481417000,
        summonerLevel: 326
    },
    {
        jugador: "Desconocido",
        rol: "jgl",
        opgg:"https://lan.op.gg/summoner/userName=Ascedios",
        id: "JTn7q566xyrl2P6YQXtyNkcFHaKLKHwMoePvAu9dPZaPjgLR2jJc0zXz7w",
        accountId: "CKqqkLHVCodjJDob0gFwisH8xbULdc5wd-FdH_CMem5ca3jAacBnTAjf",
        puuid: "-TdPael834bXmadSTdkfX3kWTX4T8M-Mvma3eVj4WAYrhKn9LP1HSSurw6X_ChFMK053a7GqqFKjkg",
        name: "Ascedios",
        profileIconId: 1211,
        revisionDate: 1621712782000,
        summonerLevel: 48
    }
]


// Middlewares
app.get('/', async (req, res) =>{

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