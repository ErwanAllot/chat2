read();

setInterval(read, 3000);

function read() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("output").innerHTML = this.responseText;  
        }
    };
    xmlhttp.open("POST", "PHP/read.php", true);
    xmlhttp.send();
}