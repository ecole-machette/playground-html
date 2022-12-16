<?php

include('index.html');

$var = file_get_contents('index.html');

// echo $var;
echo "TECHIO> open --port 8080 /project/target/pages/index.html";

echo("TECHIO> success true \r\n");
echo("TECHIO> message --channel Super! Une solution facilement adaptable. \r\n");

?>