<?php
/**
 * Created by PhpStorm.
 * User: Igor
 * Date: 31.05.2018
 * Time: 16:17
 */

// f
function targetFunction($x)
{
    return cos($x[0]) + cos($x[1]);
}

function pointEq($n, $p1, $p2)
{
    $counter = 0;
    for ($i = 0; $i < $n; $i++) {
        if ($p1[$i] === $p2[$i]) {
            $counter++;
        }
    }
    if ($n === $counter) return true;
    else return false;
}

// n
const SIZE = 2;
// x
$endPoint = [1, 1];
// x0
$prevPoint = [0, 0];
// xn
$currentPoint = [0, 0];
// t
$stepLength = 2;
// b
$stepMultiplier = 3;
// e
$calculationAccuracy = 0.3;
// y
$funcResult = 0;
// y0
$prevFuncResult = targetFunction($prevPoint);
$stop = SIZE;

// x0 = x;
//$startPoint = $currentPoint;

do {
    // sampling (probkowanie)
    for ($i = 0; $i < SIZE; $i++) {
        // x = x-x[i-1]
        $currentPoint[0]++;
        $funcResult = targetFunction($currentPoint);
        if ($funcResult < $prevFuncResult) {
            // xn = new x
            for ($i = 0; $i < SIZE; $i++) {
                $currentPoint[$i] = $endPoint[$i];
            }
            $prevFuncResult = $funcResult;

        } else {
            for ($j = 0; $j < SIZE; $j++) {
                $currentPoint[$j] = $prevPoint[$j];
                $currentPoint[$i] -= $stepLength;
            }
            $funcResult = targetFunction($currentPoint);

            if ($funcResult < $prevFuncResult) {
                for ($i = 0; $i < SIZE; $i++) {
                    $currentPoint[$i] = $endPoint[$i];
                }
                $prevFuncResult = $funcResult;
            } else {
                for ($i = 0; $i < SIZE; $i++) {
                    $currentPoint[$i] = $prevPoint[$i];
                }

            }
        }
    }

    if (!pointEq(SIZE, $currentPoint, $prevPoint)) {
        for ($i = 0; $i < SIZE; $i++) {
            $endPoint[$i] = $currentPoint[$i] * 2 - $prevPoint[$i];
        }
        $funcResult = targetFunction($endPoint);

        if ($funcResult < $prevFuncResult) {
            for ($i = 0; $i < SIZE;
                 $i++) {
                $prevPoint[$i] = $endPoint[$i];
            }
            $prevFuncResult = $funcResult;
        } else {
            for ($i = 0; $i < SIZE;
                 $i++) {
                $prevPoint[$i] = $currentPoint[$i];
            }
        }
    } else {
        $stop = $stepLength;
        $stepLength = $stepMultiplier / $stepLength;
    }
} while ($stop > $calculationAccuracy);

for ($i = 0; $i < SIZE; $i++) {
    echo $prevPoint[$i];
}