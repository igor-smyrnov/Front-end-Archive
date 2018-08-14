<?php

/**
 * Created by PhpStorm.
 * User: Igor
 * Date: 14.06.2018
 * Time: 18:38
 */

require_once "CombinatoricsTheorems.php";
require_once "CombinatoricsBasic.php";

final class Combinatorics extends CombinatoricsBasic
{
    function __construct(bool $checkTheorems = false)
    {
        if ($checkTheorems) {
            CombinatoricsTheorems::check();
        }
    }

    // PL: Permutacje bez powtrzeń
    public static function permutation($n)
    {
        return self::factorial($n);
    }

    // PL: Permutacje z powtórzeniami
    public static function permutationWR($n, array $k)
    {
        if ($k > 0) {
            $product = 1;
            for ($i = 0; $i < sizeof($k); $i++) {
                $product *= self::factorial($k[$i]);
            }

            return self::factorial($n) / $product;
        }

        return 0;
    }

    // PL: Wariacje bez powtrzeń
    public static function variation($n, $k)
    {
        return self::factorial($n) / self::factorial($n - $k);
    }

    // PL: Wariacje z powtórzeniami
    public static function variationWR($n, $k)
    {
        return pow($n, $k);
    }

    // PL: Kombinacje bez powtrzeń
    public static function combination($n, $k)
    {
        return self::naturalBinomial($n, $k);
    }

    // PL: Kombinacje z powtórzeniami
    public static function combinationWR($n, $k)
    {
        return self::factorial($n + $k - 1) / (self::factorial($k) * self::factorial($n - 1));
    }

}