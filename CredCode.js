function checkCreds() {
    var FirstName = document.getElementById("FirstName").value;
    var LastName = document.getElementById("LastName").value;
    
    var eventInfo = FirstName + " " + LastName;
    if (FirstName.length > 20 || FirstName.length < 4) {
   
        // if (eventInfo.length > 20 || eventInfo.length < 2) {
          document.getElementById("loginStatus").innerHTML = "First Name has invalid number of characters!";
    } 
    else if (LastName > 20 || LastName < 2) {
        document.getElementById("loginStatus").innerHTML = "Last Name has an invalid number of characters!";
    }
    else {
        alert("Access Granted, Welcome " + eventInfo + "!");
        location.replace("Better Countdown.html");}
    }