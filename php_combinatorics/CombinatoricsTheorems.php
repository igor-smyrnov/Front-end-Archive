<?php

/**
 * Created by PhpStorm.
 * User: Igor
 * Date: 14.06.2018
 * Time: 18:44
 */

require_once "CombinatoricsBasic.php";

final class CombinatoricsTheorems extends CombinatoricsBasic
{
    // PL: dodawanie
    private function additionPrinciple($r, $k): bool
    {
        // k is int
        return is_int($k) && self::binominal($r, $k) === (self::binominal($r - 1, $k) + self::binominal($r - 1, $k - 1));
    }

    // PL: mnożenie
    private function multiplicationPrinciple($r, $m, $k): bool
    {
        // m is int
        // k is int
        return is_int($m) && is_int($k) && self::binominal($r, $m) * self::binominal($m, $k) === (self::binominal($r, $k) * self::binominal($r - $k, $m - $k));
    }

    // PL: symetria
    private function bijectiveProof($n, $k): bool
    {
        // n is int
        // n >= 0
        // k is int
        return is_int($n) && $n >= 0 && is_int($k) && self::binominal($n, $k) === self::binominal($n, $n - $k);
    }

    // PL: Tożsamość Cauch'ego
    private function vandermondeConvolution($r, $s, $n): bool
    {
        $sum = 0;
        for ($k = 0; $k <= $n; $k++) {
            $sum += self::binominal($r, $k) * self::binominal($s, $n - $k);
        }

        // n is int
        return is_int($n) && $sum === self::binominal($r + $s, $n);
    }

    // PL: Sumowanie równoległe
    private function seDiagonal($r, $n): bool
    {
        $sum = 0;
        for ($k = 0; $k <= $n; $k++) {
            $sum += self::binominal($r + $k, $k);
        }

        // n is int
        return is_int($n) && $sum === self::binominal($r + $n + 1, $n);
    }

    // PL: Górne sumowanie
    private function columnSum($n, $m): bool
    {
        $sum = 0;
        for ($k = 0; $k <= $n; $k++) {
            $sum += self::binominal($k, $m);
        }

        // n is int
        // m is int
        return is_int($n) && is_int($m) && $sum === self::binominal($n + 1, $m + 1);
    }

    // PL: Pochłanianie
    private function absorption($r, $k): bool
    {
        // k is int
        // k !== 0
        return is_int($k) && $k !== 0 && self::binominal($r, $k) === intval($r / $k * self::binominal($r - 1, $k - 1));
    }

    // PL: Górna negacja
    private function columnInversion($r, $k): bool
    {
        // k is int
        return is_int($k) && self::binominal($r, $k) === pow(-1, $k) * self::binominal($k - $r - 1, $k);
    }

    //PL: Wzór dwumianowy
    private function binomialPattern($r, $x, $y): bool
    {
        $sum = 0;
        for ($k = 0; $k <= $r; $k++) {
            $sum += self::binominal($r, $k) * pow($x, $k) * pow($y, $r - $k);
        }

        // r is int
        // r >= 0
        return is_int($r) && $r >= 0 && $sum === pow($x + $y, $r);
    }

    public static function check()
    {
        // k is int
        if (self::additionPrinciple(5, 2) === true) {
            echo "Success: addition principle is working!\n";
        } else {
            echo "Error: addition principle is not working!\n";
        }

        // m is int
        // k is int
        if (self::multiplicationPrinciple(5, 3, 2) === true) {
            echo "Success: multiplication principle is working!\n";
        } else {
            echo "Error: multiplication principle is not working!\n";
        }

        // n is int
        // n >= 0
        // k is int
        if (self::bijectiveProof(5, 2) === true) {
            echo "Success: bijective proof is working!\n";
        } else {
            echo "Error: bijective proof is not working!\n";
        }

        // n is int
        if (self::vandermondeConvolution(15, 10, 5) === true) {
            echo "Success: Vandermonde convolution is working!\n";
        } else {
            echo "Error: Vandermonde convolution is not working!\n";
        }

        // n is int
        if (self::seDiagonal(5, 2) === true) {
            echo "Success: SE Diagonal is working!\n";
        } else {
            echo "Error: SE Diagonal is not working!\n";
        }

        // n is int
        // m is int
        if (self::columnSum(5, 2) === true) {
            echo "Success: column sum is working!\n";
        } else {
            echo "Error: column sum is not working!\n";
        }

        // k is int
        // k !== 0
        if (self::absorption(5, 2) === true) {
            echo "Success: absorption is working!\n";
        } else {
            echo "Error: absorption is not working!\n";
        }

        // k is int
        if (self::columnInversion(5, 2) === true) {
            echo "Success: column inversion is working!\n";
        } else {
            echo "Error: column inversion is not working!\n";
        }

        // r is int
        // r >= 0
        if (self::binomialPattern(5, 2, 3) === true) {
            echo "Success: binomial pattern is working!\n";
        } else {
            echo "Error: binomial pattern is not working!\n";
        }
    }

}