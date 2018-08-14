<?php

/**
 * Created by PhpStorm.
 * User: Igor
 * Date: 09.06.2018
 * Time: 04:42
 */
class HuffmanCoding
{
    private $table;
    private $str;
    private $debug;
    private $queue;
    private $tableTextDelimiter;

    /**
     * HuffmanCoding constructor.
     * @param bool $debug
     */
    public function __construct(bool $debug)
    {
        $this->debug = $debug;
        $this->table = array();
        $this->queue = new SplPriorityQueue();
        $this->queue->setExtractFlags(SplPriorityQueue::EXTR_BOTH);
        $this->tableTextDelimiter = "||";
    }

    /**
     * @param string $inputStr
     * @return string
     * @throws Exception
     */
    public function encode(string $inputStr): string
    {
        try {
            $this->str = $inputStr;
            $this->generateProbabilitiesTable();
            $this->generateBinaryTree();
            $this->generateCodesOfSymbols($this->queue->extract()["data"], "");
            $resultStr = "";
            for ($i = 0; $i < strlen($this->str); $i++) {
                $resultStr = $resultStr . $this->table[ord($this->str[$i])];
            }
            $resultStr .= "1";
            $tableCodes = http_build_query($this->table, null, "&", PHP_QUERY_RFC3986);
            $binary = $tableCodes . $this->tableTextDelimiter . PackerUtil::packBits($resultStr);

            return $binary;
        } catch (Exception $error) {
            throw $error;
        }
    }

    /**
     * @param string $inputStr
     * @return string
     * @throws Exception
     */
    public function decode(string $inputStr): string
    {
        try {
            $arr = explode($this->tableTextDelimiter, $inputStr);
            if (sizeof($arr) != 2) {
                throw $php_errormsg;
            }
            $head = strval($arr[0]);
            parse_str($head, $this->table);
            $inputStr = PackerUtil::unpackBits($arr[1]);
            $inputStr = substr($inputStr, 0, strrpos($inputStr, "1", 0));
            $res = "";
            $searchStr = "";
            for ($i = 0; $i < strlen($inputStr); $i++) {
                $searchStr = $searchStr . $inputStr[$i];
                $index = array_search($searchStr, $this->table, true);
                if (false !== $index) {
                    $res .= chr($index);
                    $searchStr = "";
                }
            }
            return $res;
        } catch (Exception $error) {
            throw $error;
        }
    }

    /**
     * @param array $first
     * @param array $second
     * @throws Exception
     */
    private function displayTree(array $first, array $second)
    {
        if (!$this->debug) {
            return;
        }
        echo $this->getSymbol($first) . "(" . $this->getPriority($first["priority"]) . ") + " . $this->getSymbol($second) . "(" . $this->getPriority($second["priority"]) . ")\n";
    }

    /**
     * @throws Exception
     */
    private function generateProbabilitiesTable()
    {
        try {
            foreach (count_chars($this->str, 1) as $i => $val) {
                if ($this->debug) {
                    echo chr($i) . ' ' . $val . "\n";
                }
                $this->queue->insert(chr($i), 1 - $val);
            }
        } catch (Exception $error) {
            throw $error;
        }
    }

    /**
     * @param $branch
     * @param string $strBinary
     * @throws Exception
     */
    private function generateCodesOfSymbols($branch, string $strBinary)
    {
        try {
            if (is_array($branch)) {
                if ($this->isAssoc($branch)) {
                    $branch = $branch["data"];
                    $this->generateCodesOfSymbols($branch, $strBinary);
                } else {
                    $arr1 = $branch[0];
                    $arr2 = $branch[1];
                    $this->generateCodesOfSymbols($arr1, $strBinary . "0");
                    $this->generateCodesOfSymbols($arr2, $strBinary . "1");
                }
            } else {
                $this->table[ord($branch)] = $strBinary;
                if ($this->debug)
                    echo "Symbol " . $branch . " = " . $strBinary . "\n";
            }
        } catch (Exception $error) {
            throw $error;
        }
    }

    /**
     * @param $priority
     * @return int
     * @throws Exception
     */
    private function getPriority($priority): int
    {
        return abs($priority - 1);
    }

    /**
     * @throws Exception
     */
    private function generateBinaryTree()
    {
        try {
            while ($this->queue->count() > 1) {
                $first = $this->queue->extract();
                $second = $this->queue->extract();
                $this->displayTree($first, $second);
                $newPriority = $this->getPriority($first["priority"]) + $this->getPriority($second["priority"]);
                $obj = array();
                array_push($obj, $first);
                array_push($obj, $second);
                $this->queue->insert($obj, 1 - $newPriority);
            }
        } catch (Exception $error) {
            throw $error;
        }
    }

    /**
     * @param $arr
     * @return bool
     * @throws Exception
     */
    private function isAssoc($arr): bool
    {
        if (array() === $arr) {
            return false;
        }
        return array_keys($arr) !== range(0, count($arr) - 1);
    }

    /**
     * @param $arr
     * @return string
     * @throws Exception
     */
    private function getSymbol($arr)
    {
        if (is_array($arr)) {
            if ($this->isAssoc($arr)) {
                return $this->getSymbol($arr["data"]);
            }
            return $this->getSymbol($arr[0]) . $this->getSymbol($arr[1]);
        }
        return $arr;
    }
}
