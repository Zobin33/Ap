const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')
const app = express()
const port = 3000

app.get('/', await(req, res) => {
const hasil = []
const url = `https://m.dream.co.id/jadwal-salat/bandung`
const resp = await axios.get(url)
const $ = cheerio.load(resp.data)
const a = $('table').find('tbody > tr > td')
const emror = "_[ ! ] Error Daerah Tidak DiTemukan_"
const daerah = url.split('/')[4]
const tanggal = $(a).eq(0).text()
const shubuh = $(a).eq(1).text()
const dzuhur = $(a).eq(2).text()
const ashar = $(a).eq(3).text()
const maghrib = $(a).eq(4).text()
const isya = $(a).eq(5).text()
hasil.push({ daerah, tanggal, shubuh, dzuhur, ashar, maghrib, isya})
}) 
res.send(hasil)
}) 
app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
}) 
