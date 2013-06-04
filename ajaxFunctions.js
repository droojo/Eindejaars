<script type="text/javascript">
  function ajaxNaam(Naam) {
        var xmlHttp;
        try {
          // Firefox, Opera 8.0+, Safari
          xmlHttp=new XMLHttpRequest();
        }
        catch (e) {
          // Internet Explorer
          try {
            xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
          }
          catch (e) {
            try {
              xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch (e) {
              alert("Your browser does not support AJAX!");
              return false;
            }
          }
        }
        xmlHttp.onreadystatechange=function() {
          if (xmlHttp.readyState==4) {
            document.getElementById('rapport').innerHTML = xmlHttp.responseText;
          }
        }
        xmlHttp.open("GET","DataRapport.php?NaamKeuze="+naam,true);
        xmlHttp.send(null);
      }

  function ajaxControle(Vraag, Antwoord, Naam) {
        var xmlHttp;
        try {
          // Firefox, Opera 8.0+, Safari
          xmlHttp=new XMLHttpRequest();
        }
        catch (e) {
          // Internet Explorer
          try {
            xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
          }
          catch (e) {
            try {
              xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch (e) {
              alert("Your browser does not support AJAX!");
              return false;
            }
          }
        }
        xmlHttp.onreadystatechange=function() {
          if (xmlHttp.readyState==4) {
            document.getElementById('rapport').innerHTML = xmlHttp.responseText;
          }
        }
        xmlHttp.open("GET","DataRapport.php?Vraag="+Vraag+"&Antwoord="+Antwoord+"&NaamKeuze="+naam,true);
        xmlHttp.send(null);
      }

  function ajaxNaamCategory(HoofdCategory, SideCategory, Naam) {
        var xmlHttp;
        try {
          // Firefox, Opera 8.0+, Safari
          xmlHttp=new XMLHttpRequest();
        }
        catch (e) {
          // Internet Explorer
          try {
            xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
          }
          catch (e) {
            try {
              xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch (e) {
              alert("Your browser does not support AJAX!");
              return false;
            }
          }
        }
        xmlHttp.onreadystatechange=function() {
          if (xmlHttp.readyState==4) {
            document.getElementById('rapport').innerHTML = xmlHttp.responseText;
          }
        }
        xmlHttp.open("GET","DataRapport.php?HoofdCategory="+HoofdCategory+"&SideCategory="+SideCategory+"&NaamKeuze="+naam,true);
        xmlHttp.send(null);
      }                
</script>      