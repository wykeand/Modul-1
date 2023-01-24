const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(cors())

    app.post("/kubus", (req,res) => {
        let sisi = Number(req.body.sisi)
        let luas = 6 * sisi * sisi
        let volume = sisi * sisi * sisi

        let response = {
            Sisi: sisi,
            Luas: luas,
            Volume: volume
        }

        res.json(response)
    })

    app.post("/tabung", (req,res) => {
        let ruas = Number(req.body.ruas)
        let tinggi = Number(req.body.tinggi)
        let luas = 22/7 * ruas * ruas * tinggi
        let volume = (2 * 22/7 * ruas * tinggi) + (2 * 22/7 * ruas * ruas * tinggi)

        let response = {
            Ruas: ruas,
            Tinggi: tinggi,
            Luas: luas,
            Volume: volume
        }
        res.json(response)
    })

    app.post("/balok", (req,res) => {
        let panjang = Number(req.body.panjang)
        let lebar = Number(req.body.lebar)
        let tinggi = Number(req.body.tinggi)
        let luas = 2 * (panjang + lebar + tinggi)
        let volume = panjang * lebar * tinggi

        let response = {
            Panjang: panjang,
            lebar: lebar,
            tinggi: tinggi,
            Luas: luas,
            Volume: volume
        }

        res.json(response)
    })

    app.post("/lingkaran", (req,res) => {
        let ruas = Number(req.body.ruas)
        let luas = 4 * 22/7 * ruas * ruas
        let volume = 4/3 * 22/7 * ruas * ruas * ruas

        let response = {
            Ruas: ruas,
            Luas: luas,
            Volume: volume
        }

        res.json(response)
    })



    app.listen(8000, () => {
        console.log("Berhasil");
    })