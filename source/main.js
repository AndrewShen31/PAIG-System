"use strict";

const electron = require('electron')
const menuBar = require('./menu')
const { Menu, MenuItem, ipcMain } = electron

function createWindow () {

  // Create the browser window.
  let win = new electron.BrowserWindow({
    width: 800,
    height: 600,
    //fullscreen: true,  // fullscreen ? false = debug
    webPreferences: {
      nodeIntegration: true
    }
  })
  let contents = win.webContents
  // application's menu bar
  Menu.setApplicationMenu(Menu.buildFromTemplate(menuBar))

  // and load the index.html of the app.
  win.loadFile('index.html')

  // contents.openDevTools()  // **DEBUG**

}

electron.app.on('ready', createWindow)
