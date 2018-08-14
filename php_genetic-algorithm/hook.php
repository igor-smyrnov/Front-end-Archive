<?php
/**
 * Created by PhpStorm.
 * User: Igor
 * Date: 05.06.2018
 * Time: 03:52
 */

function f($x)
{
    return cos($x[0]) + cos($x[1]);
}

$startPoint = [0, 0];
$increment = [1, 1];
$accuracy = 0.3;
$step = 2;

$stop = sizeof($startPoint);
$prevResult = f($startPoint);
$currentPoint = $startPoint;

do {
    $currentPoint[0] += $increment[0];
    $result = f($currentPoint);
    if ($result < $prevResult) {
        $currentPoint[1] += $increment[1];
        $result = f($currentPoint);
        if ($result < $prevResult) {
            $currentPoint[1] -= $increment[1] * 2;
        }
    } else {
        $currentPoint[0] -= $increment[0] * 2;
    }

} while ($stop > $accuracy);