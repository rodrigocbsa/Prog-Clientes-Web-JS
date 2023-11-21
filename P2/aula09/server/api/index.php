<?php
header('Access-Control-Allow-Origin: *');

$metodo = $_SERVER['REQUEST_METHOD'];
$url = $_SERVER['REQUEST_URI'];

if($metodo == 'GET' && $url == '/contatos'){
    header('Content-Type: application/json');
    echo '[{"id":1,"nome":"banana","telefone":"bananaphone"},{"id":1,"nome":"banana","telefone":"bananaphone"}]';
}

?>