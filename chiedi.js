$(document).ready(function(e) {
 while(true){
 //Chiamata Ajax
  $.ajax({
 //URL a cui viene mandata la richiesta
  url : "server.php",
  //Tipo doi richiesta (GET o POST)
  type : "GET",
  //Imposta il tipo di risposta da ricevere dal server
  dataType : "json",
  //Sa la chiamata è asincrona (true) oppure sincrona (false) e quindi blocca tutti gli altri codici
  async : false,
  //Imposta una funzione se la richiesta ha successo
  success : function(data) {riceviDati(data)}
 });
 });
});

function riceviDati(data){
 //Carico i dati estratti nella pagina
  var suono = data.dato;
  if(suono === 'A'){
  document.write("   ai vostri posti   ");
  }
  if(suono === 'B'){
  document.write("pronti   ");
  }
  if(suono === 'C'){
    document.write("via   ");
  }
  
 );
}
