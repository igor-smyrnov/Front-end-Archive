<?php

/**
 * Created by PhpStorm.
 * User: Igor
 * Date: 09.06.2018
 * Time: 04:44
 */
class FileUtl
{
    /**
     * @param $filePath
     * @return bool|string
     * @throws Exception
     */
    public static function LoadFromFile($filePath)
    {
        return file_get_contents($filePath);
    }

    /**
     * @param $filePath
     * @param $text
     * @throws Exception
     */
    public static function SaveToFile($filePath, $text)
    {
        file_put_contents($filePath, $text);
    }
}
