'use strict'

const fs = require('fs')

module.exports = function customStyle(window,Ais){
  window.webContents.on('did-finish-load', function() {
    fs.readFile(__dirname+ '/style.css', "utf-8", function(error, data) {
      if(!error){
        var formatedData = data.replace(/\s{2,10}/g, ' ').trim()
        formatedData = formatedData.replace(/;/gm ," !important;")
        window.webContents.insertCSS(formatedData)
        console.log(formatedData)
      }
      else {
        console.log(error)
      }
    })
  })
  console.log("Custom CSS loaded")
}