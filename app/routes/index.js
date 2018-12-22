const fs = require('fs')
const path = require('path')
const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
  const langCodeFromBaseUrl = req.baseUrl.replace('/', '')
  // res.locals.lang_code = _checkLang(langCodeFromBaseUrl) ? langCodeFromBaseUrl : default_lang
  // res.locals.url = req.path

  next()
})

router.get('/', (req, res) => {
  const tpl = 'index.html'
  res.render(tpl, {})
})