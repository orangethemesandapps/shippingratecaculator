  var xhttp = new XMLHttpRequest();
  if (xhttp.withCredentials !== undefined)
  {
    // make cross-site requests
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        //document.getElementById("demo").innerHTML = xhttp.responseText;
        console.log(xhttp.responseText);
      }
    };
    xhttp.open("GET", "https://geolocationservice.orangethemesandappsweb.workers.dev/", true);
    xhttp.send();
    }
