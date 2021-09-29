const express = require('express')
const router = express.Router();
const request = require('express')

// Dotenv
require('dotenv').config()
const apiKey = process.env.APIKEY;

const participantes = [
    {
        id: 'l7vvQ8liJhwZx7AjsxRmGzy8qtymarI2FLkpZaiGTK7kpQ',
        accountId: 'U3weh4vm6iGtm73My8vHtCHgIcjCYZ7wra6Yw8bWRnv0ZdI',
        puuid: 'Naf3XLEpYKY-2d545hlXX9UeFfE7ZxgzTbbu6tIoH3-wJuM_WniAc1p8icl9QX73adFSbBzvWMp77w',
        name: 'hagert',
        profileIconId: 4832,
        revisionDate: 1620616930000,
        summonerLevel: 520
    },
    {
        id: 'hMpFhWRo2X_nAa1oyO7KBHx_TycmTUYY7II_lu0GB44gBf8',
        accountId: '-ztbtX-ctT0ZwMUH0Y95-Rz9pm-SeQnr5rK8WvuVubHgW9Y',
        puuid: 'X93PfZABYSLEfQtHVa5KHYFGysybzGIS-aD7jlJAk90X_gXFXQu-L07LBm-Zq2HYxjRnE1bbJ8knlQ',
        name: 'xlegenda',
        profileIconId: 3614,
        revisionDate: 1620433750000,
        summonerLevel: 445
    }
]


router.get('/', (req, res) =>{

    request({
        url: `https://la1.api.riotgames.com/lol/league/v4/entries/by-summoner/l7vvQ8liJhwZx7AjsxRmGzy8qtymarI2FLkpZaiGTK7kpQ?api_key=${apiKey}`,
        json: true,
    }, (error, respuesta, body) => {
        if(!error && respuesta.statusCode == 200){
            const toParse = body;
            console.log(toParse)
        }else{
            console.log('Error en la consulta')
        }
    })

    /*
    for (const nick_name of participantes) {
        const {id, name, profileIconId, summonerLevel} = nick_name;
        console.log(id)
        // console.log(name)
    }
*/

})




module.exports = router;



// qwe