<?php
   if($_POST)
   {
       $informazione = $_POST["dato"];

   }

 header('Content-Type : application/json');
  $dato = $informazione;
  print json_encode($dato);
?>
