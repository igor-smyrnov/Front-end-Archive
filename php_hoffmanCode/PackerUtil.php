<?php

/**
 * Created by PhpStorm.
 * User: Igor
 * Date: 09.06.2018
 * Time: 04:37
 */
class PackerUtil
{
    /**
     * @param $inputStrBits
     * @return string
     * @throws Exception
     */
    public static function packBits($inputStrBits): string
    {
        try {
            $binary = "";
            $tmp = "";
            $len = strlen($inputStrBits);
            $n = ceil($len / 8);
            $inputStrBits = str_pad($inputStrBits, $n * 8, "0");
            for ($i = 0; $i < strlen($inputStrBits); $i++) {
                $tmp .= $inputStrBits[$i];
                if (strlen($tmp) == 8) {
                    $a = bindec($tmp);
                    $binary .= pack("C", $a);
                    $tmp = "";
                }
            }
            return $binary;
        } catch (Exception $error) {
            throw $error;
        }
    }

    /**
     * @param $binary
     * @return string
     * @throws Exception
     */
    public static function unpackBits($binary): string
    {
        try {
            $res = "";
            $un = unpack("C*", $binary);
            for ($i = 1; $i <= sizeof($un); $i++) {
                $num = decbin($un[$i]);
                $num = str_pad($num, 8, "0", STR_PAD_LEFT);
                $res .= $num;
            }
            return $res;
        } catch (Exception $error) {
            throw $error;
        }
    }
}
