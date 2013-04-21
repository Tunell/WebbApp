var xmlHttp= createXmlHttpRequestObject();

function createXmlHttpRequestObject(){
   var xmlHttp;
   
   if(window.ActiveXObject){
      try{
         xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
         }catch(e){
            xmlHttp =false;
            }
      }else{
         try{
            xmlHttp= new XMLHttpRequest();
            }catch(e){
               xmlHttp =false;
               }
         }
      if(!xmlHttp)
            alert("Can't create object!");
      else
            return xmlHttp;
   }
   
function Calculator(){   
    if(xmlHttp.readyState==0 || xmlHttp.readyState==4){
      num1=encodeURIComponent(document.getElementById("userInput1").value );
      num2=encodeURIComponent(document.getElementById("userInput2").value );
      xmlHttp.open("GET", "http://team-flashkick.com/Pelle/test/calc.php?num1="+num1+"&num2="+num2, true);
      xmlHttp.onreadystatechange = handleServerResponse;
      xmlHttp.send(null);
      }else{
         setTimeout('Calculator()', 1000);
         }
   }
   
   
function handleServerResponse(){
   if(xmlHttp.readyState==4){
            if(xmlHttp.status==200){
               message=xmlHttp.responseText;
               document.getElementById('underInput').innerHTML=message ;
               setTimeout('Calculator()', 1000);
         }else{
            alert('Something went wrong!');
            }
      }
   }