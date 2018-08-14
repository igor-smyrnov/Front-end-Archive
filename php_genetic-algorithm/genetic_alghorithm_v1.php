<?php
/**
 * Created by PhpStorm.
 * User: Igor
 * Date: 22.04.2018
 * Time: 22:47
 */

const MUTATION_RATE = 0.03;
const TOTAL_POPULATION = 100;
const TOTAL_SELECTION = 50;

$result = false;

$targetPhrase = "Learn to walk before you run";
$population = [];
$fitness = [];
$genesLength = strlen($targetPhrase);

function setup()
{
    global $population;
    for ($i = 0; $i < TOTAL_POPULATION; $i++) {
        $population[$i] = generateDNA();
    }
}

function generateDNA()
{
    global $genesLength;
    $genes = "";
    for ($i = 0; $i < $genesLength; $i++) {
        $genes[$i] = chr(rand(32, 127));
    }
    return $genes;
}

function crossover($partnerA, $partnerB)
{
    global $genesLength;
    $childGenes = "";
    $midPoint = rand(0, $genesLength);
    for ($i = 0; $i < $genesLength; $i++) {
        if ($i > $midPoint) {
            $childGenes[$i] = $partnerA[$i];
        } else {
            $childGenes[$i] = $partnerB[$i];
        }
    }

    return $childGenes;
}

function calculateFitness($genes)
{
    global $genesLength, $targetPhrase;
    $score = 0;
    for ($i = 0; $i < $genesLength; $i++) {
        if ($genes[$i] === $targetPhrase[$i]) {
            $score++;
        }
    }

    return $score / strlen($targetPhrase);
}

function selection()
{
    global $population;
    for ($i = 0; $i < TOTAL_SELECTION; $i++) {
        $population[$i + TOTAL_SELECTION] = crossover($population[$i], $population[$i + 1]);
    }
}

function mutate($mutationRate)
{
    global $population, $genesLength;
    for ($i = 0; $i < count($population); $i++) {
        if (rand(0, 1) < $mutationRate) {
            $j = rand(0, $genesLength - 1);
            $population[$i][$j] = chr(rand(32, 128));
        }
    }
}

function sortPopulation()
{
    global $population, $result;

    usort($population, function ($a, $b) {
        global $result;
        $resA = calculateFitness($a);
        $resB = calculateFitness($b);
        if ($resA == 1 || $resB == 1) {
            $result = true;
        }
        return $resA <= $resB;
    });
}

function display()
{
    global $population;
    for ($i = 0; $i < count($population); $i++) {
        echo "[" . $i . "] " . $population[$i];
        echo " [" . (calculateFitness($population[$i]) * 100) . "%]\n";
    }
}

setup();
$i = 0;
while (!$result) {
    sortPopulation();
    if ($result) {
        break;
    }
    selection();
    mutate(MUTATION_RATE);
    $i++;
}
echo "The best result found in " . $i . "th population\n";
display();







