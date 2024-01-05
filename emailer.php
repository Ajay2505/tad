
<?php

$message = '';
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents('php://input'));
    $clientEmail = $data->email;

    $to = $clientEmail;
    $subject = 'Contact Us Details from nimaya.in Website';
    $messageBody = 'Thank you for submitting!';

    $headers = 'From: ajaykumar.tetramind@gmail.com' . "\r\n" .
               'Reply-To: ajaykumar.tetramind@gmail.com' . "\r\n" .
               'X-Mailer: PHP/' . phpversion();

    if (mail($to, $subject, $messageBody, $headers)) {
        $message = '<div class="alert alert-success">Details Successfully Submitted</div>';
    } else {
        $message = '<div class="alert alert-danger">There is an Error</div>';
    }
}

?>