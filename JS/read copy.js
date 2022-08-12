read();

setInterval(read, 3000);

function read() {
    AjaxPost("PHP/read.php", completedAJAX);
}

function createAjaxRequestObject() {
    var xmlhttp;
    if(window.XMLHttpRequest) {xmlhttp = new XMLHttpRequest();}
    else {xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");}
    return xmlhttp;
}

function AjaxPost(ajaxURL, onComplete) {
    var http3 = createAjaxRequestObject();

    http3.onreadystatechange = function() {
        if(http3.readyState == 4 && http3.status == 200) {
            if(onComplete) {
                onComplete(http3.responseText);
            }
        }
    };

    http3.open("POST", ajaxURL, true);
    http3.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http3.send();
}

function completedAJAX(response) {
    document.getElementById("output").innerHTML = response;
}