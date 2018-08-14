<?php

/**
 * Created by PhpStorm.
 * User: Igor
 * Date: 14.06.2018
 * Time: 20:02
 */
class CombinatoricsBasic
{
    protected function factorial($x)
    {
        $size = $x;
        for ($i = 1; $i < $size - 1; $i++) {
            $x *= ($size - $i);
        }
        return $x <= 0 ? 1 : $x;
    }

    protected function risingFactorial($num, $pow)
    {
        $x = $num;
        for ($i = 0; $i < $pow - 1; $i++) {
            $num *= ($x + $i + 1);
        }
        return $pow === 0 ? 1 : $num;
    }

    protected function fallingFactorial($num, $pow)
    {
        $x = $num;
        for ($i = 0; $i < $pow - 1; $i++) {
            $num *= ($x - $i - 1);
        }
        return $pow === 0 ? 1 : $num;
    }

    // Only for natural numbers
    // Only when n >= k
    protected function naturalBinomial($n, $k)
    {
        if ($k != 0) {
            return self::factorial($n) / (self::factorial($k) * self::factorial($n - $k));
        } else {
            return 1;
        }
    }

    // More efficient method
    protected function binominal($r, $k)
    {
        if ($k != 0) {
            return self::fallingFactorial($r, $k) / self::factorial($k);
        } else {
            return 1;
        }
    }
}