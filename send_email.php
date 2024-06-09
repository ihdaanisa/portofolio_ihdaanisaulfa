<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Dapatkan data dari form
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Tentukan alamat email penerima
    $to = "ihdaanisaulfa@gmail.com";
    $subject = "New message from $name";

    // Buat isi email
    $body = "Name: $name\n";
    $body .= "Email: $email\n\n";
    $body .= "Message:\n$message\n";

    // Tentukan header email
    $headers = "From: $email";

    // Kirim email
    if (mail($to, $subject, $body, $headers)) {
        echo "Email sent successfully!";
    } else {
        echo "Failed to send email.";
    }
} else {
    echo "Invalid request method.";
}
?>
