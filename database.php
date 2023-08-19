<?php

$connection = mysqli_connect(
  'localhost', 'root', '123', 'tasks-app'
);

if($connection) {
  echo 'database is connected';
} 

?>