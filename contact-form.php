<?php
    $message = '';
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $data = json_decode(file_get_contents('php://input'));
        $clientEmail = $data->email;
		$clientName = $data->name;
        $to = $clientEmail;
		$subject = $data->subject;
		$emailBody = $data->emailBody;
        $messageBody = '<div style="color: black;">
            <h3>Dear '. $clientName .',</h3>
            <br>
            '. $emailBody .'
        </div>';

        $headers = 'From: ajaykumar.tetramind@gmail.com' . "\r\n" .
                'Reply-To: ajaykumar.tetramind@gmail.com' . "\r\n" .
                'X-Mailer: PHP/' . phpversion() . "\r\n" .
                 'Content-Type: text/html; charset=UTF-8\r\n';

        if (mail($to, $subject, $messageBody, $headers)) {
            $message = '<div class="alert alert-success">Details Successfully Submitted</div>';
        } else {
            $message = '<div class="alert alert-danger">There is an Error</div>';
        }
    }
?>