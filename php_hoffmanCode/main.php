<?php

/**
 * Created by PhpStorm.
 * User: Igor
 * Date: 06.06.2018
 * Time: 20:16
 */
require_once "FileUtl.php";
require_once "HuffmanCoding.php";
require_once "PackerUtil.php";

$str = FileUtl::LoadFromFile("txt/input2.txt");
$hoffmanMethod = new HuffmanCoding(true);

$encoded = $hoffmanMethod->encode($str);
FileUtl::SaveToFile("txt/encoded.txt", $encoded);
echo "File encoded\n";

$decoded = $hoffmanMethod->decode($encoded) . "\n";
FileUtl::SaveToFile("txt/decoded.txt", $decoded);
echo "File decoded\n";
