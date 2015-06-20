$(document).ready(setCookie,getCookie,checkCookie);
 function setCookie(cuserid, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cuserid + "=" + cvalue + "; " + expires;
 }

 function getCookie(cuserid) {
    var userid = cuserid + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(userid) == 0) return c.substring(userid.length, c.length);
    }
    return "";
    }

   function checkCookie(user) {
    var userid = getCookie("userid");
    console.log(user);
    if (userid != "") {

    } else {
        introJs().start();
        userid = user;
        if (userid != "" && userid != null) {
            setCookie("userid", userid, 365);
        }
    }
  }