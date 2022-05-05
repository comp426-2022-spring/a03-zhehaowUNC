import * as coin from './coin.mjs'
import express from 'express'
import minimist from 'minimist'
const args = minimist((process.argv.slice(2)))
args["port"]
const app = express()
const port = args.port || 5000
console.log(port)
app.get('/app/flip/', (req, res) => {
    res.json({"flip":coin.coinFlip()})
})
  app.get('/app/', (req, res) => {
    res.send("200 OK")
  })
app.get('/app/flip/call/heads/', (req, res) => {
    res.json(coin.flipACoin("heads"))
})
app.get('/app/flip/call/tails/', (req, res) => {
    res.json(coin.flipACoin("tails"))
})
app.get('/app/flips/:number', (req, res) => {
  var arr = coin.coinFlips(req.params.number)
	res.json({"raw":arr,"summary":coin.countFlips(arr)})
});

app.use((req, res) => {
  res.status(404).send('404 Not Found')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })