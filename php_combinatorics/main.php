<?php
/**
 * Created by PhpStorm.
 * User: Igor
 * Date: 01.05.2018
 * Time: 14:32
 */

require_once "Combinatorics.php";
use Combinatorics as cs;

// 3a, 3p
// 5d, 1d = 1
// {a, a, p, p, p}
// P(5) / (P(2) * P(3))
echo "exercise: 1 \n";
echo cs::permutation(5) / (cs::permutation(2) * cs::permutation(3)) . "\n";

// 3spec: 4w, 6m, 3w || 3m
// 14app: 6w, 8m
// C(6,4) * C(8,6) * C(4,3)
echo "exercise: 2 \n";
echo cs::combination(6, 4) * cs::combination(8, 6) * cs::combination(4, 3) . "\n";

// 9wag, 4pass
// {null, null, null, m, m, m, m, null, null)
// A(9, 4)
echo "exercise: 3 \n";
echo cs::variation(9, 4) . "\n";

// 9group
// >=2, 2+7, 3+6, 4+5 (7+2, 6+3, 5+4)
// C(9, 2) + C(9, 3) + C(9, 4)
echo "exercise: 4 \n";
echo cs::combination(9, 2) + cs::combination(9, 3) + cs::combination(9, 4) . "\n";

// Группу из 20 студентов нужно разделить на 3 бригады, причем в первую бригаду должны входить 3 человека, во вторую — 5 и в третью — 12. Сколькими способами это можно сделать.
// 20stud, 3brig 3 || 5 || 12
// C(3, 20) * C(5, 17)
echo "exercise: 5 \n";
echo cs::permutation(20) / (cs::permutation(3) * cs::permutation(5) * cs::permutation(12)) . "\n";

// Для участия в команде тренер отбирает 5 мальчиков из 10. Сколькими способами он может сформировать команду, если 2 определенных мальчика должны войти в команду?
// 3/8boys
echo "exercise: 6 \n";
echo cs::combination(8, 4) . "\n";
echo cs::variation(8, 4) / cs::permutation(4) . "\n";

echo "exercise: 7 \n";
// В шахматном турнире принимали участие 15 шахматистов, причем каждый из них сыграл только одну партию с каждым из остальных. Сколько всего партий было сыграно в этом турнире?
echo cs::combination(15, 2) . "\n";

echo "exercise: 8 \n";
// Сколько различных дробей можно составить из чисел 3, 5, 7, 11, 13, 17 так, чтобы в каждую дробь входили 2 различных числа? Сколько среди них будет правильных дробей?
echo cs::combination(6, 2) . "\n";

echo "exercise: 9 \n";
// Сколько слов можно получить, переставляя буквы в слове Гора и Институт?
//и = 2 т = 3 н = 1 с = 1 у = 1
echo cs::permutation(4) . "\n";
echo cs::permutationWR(8, array(3, 2, 1, 1, 1)) . "\n";

// Каких чисел от 1 до 1 000 000 больше: тех, в записи которых встречается единица, или тех, в которых она не встречается?
echo "exercise: 10 \n";
echo var_export((cs::variationWR(9, 6) - 1) < (1000000 / 2)) . "\n";

// Ile liczb pięciocyfrowych o różnych cyfrach można utworzyć z cyfr 1,2,3,4,5?
// Сколько пятизначных чисел с разными цифрами можно составить из цифр 1,2,3,4,5?
echo "exercise: 11 \n";
echo cs::permutation(5) . "\n";

// W wyścigu chartów bierze udział sześć psów. Zakład polega na wytypowaniu właściwej kolejności psów na mecie (przy założeniu, że wszystkie dobiegają do mety i nie ma remisu). Ile zakładów trzeba zawrzeć, aby mieć pewność wygranej?

// Шесть собак принимают участие в гонке борзых. Ставка заключается в прогнозировании правильного порядка собак на финише (при условии, что все они достигают финишной черты, и нет ничьи). Сколько ставок вы должны сделать, чтобы быть уверенными в выигрыше?
echo "exercise: 12 \n";
echo cs::permutation(6) . "\n";

echo "exercise: 13 \n";
echo cs::variationWR(100, 8);
