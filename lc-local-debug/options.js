function apply_options() {
    var edtr, ppath, lang;
    window.onload = function(){
        edtr = document.getElementById("editor").value;
        ppath = document.getElementById('path').value;
        lang = document.getElementById('plang').value;
    }
    chrome.storage.sync.set({
      editor: edtr,
      path: ppath,
      prolang: lang
    }, function() {
      console.log("{"+edtr+", "+ppath+", "+lang+"}");
      // Update status to let user know options were saved.
      var status = document.getElementById('status');
      status.textContent = 'Options applied. {'+edtr+", "+ppath+", "+lang+"}";
      setTimeout(function() {
        status.textContent = '';
      }, 1000);
    });
}

function restore_options(){
    // Use default value
    chrome.storage.sync.get(
        ["editor","path","prolang"]
    , function(items) {
        window.onload = function(){
        document.getElementById('editor').value = items.editor;
        document.getElementById('path').value = items.path;
        document.getElementById('plang').value = items.prolang;
        };
    });
}

window.onload = function(){
    document.addEventListener('DOMContentLoaded', restore_options);
    document.getElementById('apply').addEventListener('click',apply_options);
}
