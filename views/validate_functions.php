<?php

$nombre = $_POST['email'];
$password = $_POST['password'];


$conn = new mysqli("Localhost", "root", "", "apis");


$consulta = mysqli_query($conn, "SELECT * FROM users WHERE user = '$nombre' AND password = '$password' LIMIT 1");

if (!$consulta) {
    header("location: index.php");
    $mysqli = null;
    echo mysqli_error($mysqli);

}

if ($user = mysqli_fetch_assoc($consulta)) {
    header("location: tramites.html");
} else {
    header("location: index.html");
}