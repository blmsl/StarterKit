const { app, BrowserWindow } = require('electron')
var path = require('path')

console.log(path.join(__dirname, '../assets/favicons/favicon.ico'));
let win;
function createWindow () {

  // Create the browser window.
  win = new BrowserWindow({
    icon: path.join(__dirname, '../assets/desktop-windows-icon.ico')
  })

  win.webContents.openDevTools();
  // load the index.html of the app
  win.loadURL('http://localhost:4200/')

  //// uncomment below to open the DevTools.
  // win.webContents.openDevTools()
  // Event when the window is closed.
  win.on('closed', function () {
    win = null
  })
}
// Create window on electron intialization
app.on('ready', createWindow)
// Quit when all windows are closed.
app.on('window-all-closed', function () {

  // On macOS specific close process
  if (process.platform !== 'darwin') {
    app.quit()
  }

})
app.on('activate', function () {

  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }

})

app.on('browser-window-created',function(e,window) {
      window.setMenu(null);
  });
