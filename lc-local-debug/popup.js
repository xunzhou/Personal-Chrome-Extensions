function copyToClipboard(text){
  var dummy = document.createElement("input");
  document.body.appendChild(dummy);
  dummy.setAttribute('value', text);
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
  alert(text + "\t(copied!)");
}

var e,p,l,f;
var result;

chrome.runtime.onMessage.addListener(
  function(request, sender) {
    if (request.action == "getPref"){
      e = editor.innerText = request.payload.editor;
      p = path.innerText = request.payload.path;
      l = ext.innerText = request.payload.lang;
      result = document.querySelector('#result').innerText = e+" "+p+"/"+f+"."+l;
      copyToClipboard(result);
      console.log("pref get: " + request.payload);
    }
  
    else if (request.action == "getSource") {
      f = filename.innerText = request.source;
      console.log("source get: " + request.source);
    }
  }
);
  
function onWindowLoad() {

  var editor = document.querySelector('#editor');
  var path = document.querySelector('#path');
  var filename = document.querySelector('#filename');
  var ext = document.querySelector('#ext');
  var line = document.querySelector('#result');

  chrome.tabs.executeScript(null, {
    file: "buildLine.js"
  }, function() {
    if (chrome.runtime.lastError) {
      editor.innerText = 'There was an error injecting script : \n' + chrome.runtime.lastError.message;
    }
  });  
}

window.onload = onWindowLoad;