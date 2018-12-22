const fs = require('fs')
const path = require('path')
const express = require('express')
const routes = require('./routes')
const logger = require('morgan')
const app = express()

const PORT = 12808

app.set('view engine', 'ejs')
app.set('views', './views')
app.engine('html', require('ejs').renderFile)
app.enable('trust proxy')
app.use(express.static('../public/html'))

// function setLogger () {

//   const logPath = fs.createWriteStream(path.normalize(gConfig.log_dir + '/access.log'), {flags: 'a'})
//   app.use(logger('combined', {stream: logPath}))
// }

function setCloudfrontVar (app) {
  const manifestPath = path.join(__dirname, '../public/dist/bundle/manifest.json')
  return JSON.parse(fs.readFileSync(manifestPath, 'utf8'))
}

app.locals.manifest = setCloudfrontVar()
app.use(logger('dev'))
// setLogger()

app.route('/', routes)


app.use((req, res, next) => {
  res.status(404).send({ error: 'Not Found' });
});

app.use((err, req, res, next) => {
  console.log(err)
  if (err.message === '400' || err.code === 400) return res.status(400).send({ error: 'Bad Request' })
  res.status(500).send('Internal Server Error')
})

app.listen(PORT, () => {
  console.log(`Listening ${PORT} port!`)
})