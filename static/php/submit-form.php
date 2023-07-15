<?php
if(isset($_POST['submit'])){
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];
  $to = 'antoine.ntalumeso@gmail.com'; // Replace with your email address
  $subject = 'New Message from R-Instat Contact Form';
  $headers = "From: $name <$email>" . "\r\n" .
             "Reply-To: $email" . "\r\n" .
             "X-Mailer: PHP/" . phpversion();
  $mailBody = "Name: $name\nEmail: $email\n\n$message";

  if(mail($to, $subject, $mailBody, $headers)){
    echo '<p>Thank you for contacting us. We will get back to you soon!</p>';
  }else{
    echo '<p>Sorry, an error occurred. Please try again later.</p>';
  }
}
?>
