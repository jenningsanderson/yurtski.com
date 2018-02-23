<?php

$SIGNBOX = <<<EOD
<div id="signbox" class="sign mt12">
  <p class="txt-s txt-bold">I HAVE CAREFULLY READ, CLEARLY UNDERSTAND, AND VOLUNTARILY SIGN THIS WAIVER AND RELEASE AGREEMENT</p>

  <div class="signbox mt12 align-center">

    <div id="signature-box">
      <p style="float:left;">Please Sign Here</p>
      <button style="float:right; margin-bottom:3px;" type="button" class="btn btn--s btn--red ml24" id="clear">Clear</button></p>

      <div id="signature-pad" class="signature-pad signature-pad--body my12">
        <canvas></canvas>
      </div>
      <input id='signature' name='signature' type="hidden" value=""></input>
    </div>

    <input required id="name" name="name" class='input input--border-red w300' style="font-family:cursive;" placeholder='Full Name' />

    <input required type="email" id="email" name="email" class='mt6 input input--border-red w300' placeholder='Email'/>

    <button class="btn btn--green mt6 w300 align-center" type="submit" id="agree">I Agree</button>

  </div>
</div>
EOD;

include("template.class.php");

$page = new Template("waiver-template.html");

$page->set('form-start','<form action="process-form.php" method="POST" onsubmit="return completeWaiver()">');

$page->set("initial-box-1", '<input required name="initials-1" class="input input--border-red mt12 w60 initials px6" placeholder="Initial">');
$page->set("initial-box-2", '<input required name="initials-2" class="input input--border-red mt12 w60 initials px6" placeholder="Initial">');
$page->set("initial-box-3", '<input required name="initials-3" class="input input--border-red mt12 w60 initials px6" placeholder="Initial">');
$page->set("initial-box-4", '<input required name="initials-4" class="input input--border-red mt12 w60 initials px6" placeholder="Initial">');

$page->set("signbox", $SIGNBOX);

$page->set('form-end','</form>');

$page->set("javascript", "app.js");

echo $page->output();

?>
