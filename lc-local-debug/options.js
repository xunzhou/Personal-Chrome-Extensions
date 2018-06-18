function apply_options() {
    var st = new Object();
    st.editor = document.getElementById("editor").value;
    st.path = document.getElementById('path').value;
    st.lang = document.getElementById('lang').value;

    chrome.storage.sync.set(st, function() {
      // Update status to let user know options were saved.
      var status = document.getElementById('status');
      status.textContent = 'Options applied.';
      setTimeout(function() {
        status.textContent = '';
      }, 1000);
    });
}

function restore_options(){
    // Use default value
    chrome.storage.sync.get(
        {'editor':'subl','path':'/user/home/Desktop/','lang':'.cpp'}
    , function(items) {
        document.getElementById('editor').value = items.editor;
        document.getElementById('path').value = items.path;
        document.getElementById('lang').value = items.lang;
    });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('apply').addEventListener('click',apply_options);