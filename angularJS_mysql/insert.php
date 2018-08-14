<?php
    $data = json_decode(file_get_contents("php://input"));
    mysql_connect("localhost", "root", "");
    mysql_select_db("angular");

	$title = mysql_real_escape_string($data->title);
	$content = mysql_real_escape_string($data->content);
    $author = mysql_real_escape_string($data->author);

    mysql_query("INSERT INTO `posts`
        (`title`, `content`, `author`) 
        VALUES ('".$title."', '".$content."', '".$author."')");
    return $title." ".$content." ".$author;
?>