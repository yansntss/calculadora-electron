const { app, BrowserWindow, Tray } = require("electron");

function createWindow() {
  const getIcon = new Tray(__dirname + "/src/assets/calculadora.png");

  // Cria uma janela de navegação.
  const win = new BrowserWindow({
    width: 300,
    height: 360,
    icon: __dirname + "/src/assets/calculadora.png",
    
    webPreferences: {
      nodeIntegration: true,
    },
  });

  //remover menu da aplicação
  
  
  // e carrega o arquivo index.html do seu aplicativo.
  win.loadFile("index.html");
}

app.whenReady().then(createWindow);
