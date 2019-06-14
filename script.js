function posti()
{
   $.post(
       'server.php',
       { Dato: 'A'},
       function( data )
       {
           alert(data);
       });
}

function pronti()
{
   $.post(
       'server.php',
       { Dato : 'B' },
       function( data )
       {
           alert(data);
       });
}

function via()
{
   $.post(
       'server.php',
       {Dato : 'C' },
       function( data )
       {
           alert(data);
       });
}
// Collego la funzione al click di un oggetto
$("#posti").click(posti);
$("#pronti").click(pronti);
$("#via").click(via);
