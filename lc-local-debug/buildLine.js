// var editor = "code";
// var path = "/home/user/practice/LeetCode/";
// var ext = "java";
var editor = "UnchangedEditor";
var path = "UnchangedPath";
var ext = "UnchangedExt";
var file = null;
// var res = null;

function getPref(callback){
    chrome.storage.sync.get({'editor':'subl','path':'/user/home/Desktop/','lang':'.cpp'}, callback);
}

getPref(function(value){
    console.log(value);
    chrome.runtime.sendMessage({
        action: "getPref",
        payload: value
    }, function(){console.log("pref sent");});
});

function getProb(document) {
    var prob = null;
    if (document.getElementsByTagName("h3").length == 1){
        prob = document.getElementsByTagName("h3")[0].innerHTML.split(".");
        file = "LC"+prob[0]+"_"+prob[1].trim().replace(/ /g, "_");
        // console.log("h3:" + prob);
        // console.log("h3 file: " + file);
    }
    else if (document.getElementsByTagName("h2").length ==1){
        prob = document.getElementsByTagName("h2")[0].innerHTML.split("\n")[0].split(".");
        file = "LC"+prob[0]+"_"+prob[1].trim().replace(/ /g, "_");
        console.log("h2: " + prob);
        console.log("h2 file: " + file);
    }
    else{
        console.log("Prob neither h2/h3");
        return "err";
    }  
    console.log("[getProb] "+ file);
    return file;
}

chrome.runtime.sendMessage({
    action: "getSource",
    source: getProb(document)
}, function(){console.log("source sent");});

