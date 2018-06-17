var editor = "code";
var path = "/home/user/practice/LeetCode/";
var file = null;
var ext = ".java";
var res = null;

function copyToClipboard(text){
    var dummy = document.createElement("input");
    document.body.appendChild(dummy);
    dummy.setAttribute('value', text);
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}

function getProb(document) {
    var prob = document.getElementsByTagName("h3")[0].innerHTML.split(".");
    file = "LC"+prob[0]+"_"+prob[1].trim().replace(/ /g, "_");
    res = editor+" "+path+file+ext;
    copyToClipboard(res);
    return res;
}

chrome.runtime.sendMessage({
    action: "getSource",
    source: getProb(document)
});