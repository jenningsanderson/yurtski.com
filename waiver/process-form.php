<?php

$date = new DateTime();
$date->setTimezone(new DateTimeZone('America/Denver'));

$SIGNBOX = '<div id="signed" class="mt12 border border--green py6 px6">
  <p class="txt-s">I HAVE CAREFULLY READ, CLEARLY UNDERSTAND, AND VOLUNTARILY SIGN THIS WAIVER AND RELEASE AGREEMENT</p>
  <div class="signed mt12 align-center">
  <p>Signed By<br>
  <img src="' . $_POST['signature'] . '" alt="signature">
  <p style="font-family:cursive;font-size:16px;" id="clientName">'.$_POST['name'].'</p>

  <p>On <em><span id="date" class="color-red">'. $date->format('Y-m-d H:i:s') .'</span></em></p>

      <p>A copy of your completed waiver is being emailed to: <span style="font-family:sans-serif;font-size:16px;" id="clientEmail">'.$_POST['email'].'</p>
  </div>
</div>';

$HTML = $HTML .

include("template.class.php");

$page = new Template("waiver-template.html");

$page->set("initial-box-1", '<input class="input input--border-red mt12 w60 initials px6" value="'.$_POST['initials-1'].'" disabled>');

$page->set("initial-box-2", '<input class="input input--border-red mt12 w60 initials px6" value="'.$_POST['initials-2'].'" disabled>');

$page->set("initial-box-3", '<input class="input input--border-red mt12 w60 initials px6" value="'.$_POST['initials-3'].'" disabled>');

$page->set("initial-box-4", '<input class="input input--border-red mt12 w60 initials px6" value="'.$_POST['initials-4'].'" disabled>');

$page->set("signbox", $SIGNBOX);

$page->set('form-start','');
$page->set('form-end','');

$page->set("javascript", "");

$HTML = $page->output();

// Multiple recipients
$to = 'jennings.anderson@gmail.com';
// Subject
$subject = 'Completed Waiver';
// To send HTML mail, the Content-type header must be set
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=iso-8859-1';

// Additional headers
// $headers[] = 'To: Mary <mary@example.com>, Kelly <kelly@example.com>';
// $headers[] = 'From: YurtSki Waivers <waviers@yurtski.com>';
// $headers[] = 'Cc: waivers@yurtski.com';
// $headers[] = 'Bcc: birthdaycheck@example.com';

// Mail it
mail($to, $subject, $HTML, implode("\r\n", $headers));

echo $HTML;

?>
