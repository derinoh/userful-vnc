/* eslint-disable @typescript-eslint/no-var-requires */
// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process unless
// nodeIntegration is set to true in webPreferences.
// Use preload.js to selectively enable features
// needed in the renderer process.

//const win = remote.BrowserWindow()
const remote = require('electron').remote;
const win = remote.getCurrentWindow();
const axios = require('axios');
const child = require('child_process').execFile;

// When document has loaded, initialise
document.onreadystatechange = (event:Event) => {
    if (document.readyState == "complete") {
        handleWindowControls();
    }
};

window.onbeforeunload = (event:Event) => {
    /* If window is reloaded, remove win event listeners
    (DOM element listeners get auto garbage collected but not
    Electron win listeners as the win is not dereferenced unless closed) */
    win.removeAllListeners();
}

function handleWindowControls() {
    document.getElementById('min-button').addEventListener("click", (event:MouseEvent) => {
        win.minimize();
    });

    document.getElementById('max-button').addEventListener("click", (event:MouseEvent) => {
        win.maximize();
    });

    document.getElementById('restore-button').addEventListener("click", (event:MouseEvent) => {
        win.unmaximize();
    });

    document.getElementById('close-button').addEventListener("click", (event:MouseEvent) => {
        win.close();
    });

    toggleMaxRestoreButtons();
    win.on('maximize', toggleMaxRestoreButtons);
    win.on('unmaximize', toggleMaxRestoreButtons);

    function toggleMaxRestoreButtons() {
        if (win.isMaximized()) {
            document.body.classList.add('maximized');
        } else {
            document.body.classList.remove('maximized');
        }
    }
}

document.getElementById("send-payload").addEventListener("click", LaunchVNC, false);

function LaunchVNC(){
  const execPath = "C:\\Windows\\system32\\notepad.exe";
  SendPayload();
  child(execPath, async (err:any, data:any) => {
    if(err){
      console.error(err);
      return;
    } 
    
  })
}

function SendPayload(){
  //axios.post('http://localhost/')
  alert('sent payload to userful');
}