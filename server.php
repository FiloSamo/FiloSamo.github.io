<?php
   if($_POST)
   {
       $informazione = $_POST["dato"];
   }
?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>atleta</title>
  </head>
  <body>
    <div class="Contenitore">
      <div class="Finestra">
        <h1>ATTENDI DI PARTIRE</h1>
      </div>
      <?php if ($informazione == 'A'): ?>
        <p>ai vostri posti</p>
      <?php else if ($informazione == 'B'): ?>
        <p>pronti</p>
      <?php else if ($informazione == 'C'): ?>
        <p>via</p>
        <?php ?>
        <?php else: ?>
      <?php endif ?>
    </div>
  </body>
</html>
