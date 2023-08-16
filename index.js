const { app, BrowserWindow } = require('electron')

// const createWindow = () => {
//     const win = new BrowserWindow({
//       width: 800,
//       height: 600
//     })
  
//     win.loadFile('index.html')
//   }

 let janelaPrincipal

 app.on('ready', () => {
    janelaPrincipal = new BrowserWindow({
        width: 800,
        height: 600
    })

    janelaPrincipal.loadURL(`file://${__dirname}/index.html`)
 })