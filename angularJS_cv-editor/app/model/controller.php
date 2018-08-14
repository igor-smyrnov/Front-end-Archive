<?php
/**
 * Created by PhpStorm.
 * User: stelmakh
 * Date: 28.10.2015
 * Time: 10:24
 */

class Controller
{
    private function auth($auth)
    {
        require_once("admin.php");
        $admin = new Admin();
        $admin->auth($auth->name,$auth->pass);
    }

    private function getdata($act)
    {
        require_once("getinfo.php");
        $getInfo = new GetInfo();
       switch($act) {
            case "fields":$getInfo->getFields();
                break;
            default: $getInfo->getAll();
        }

    }

    private function setdata($data,$act)
    {
        require_once("setinfo.php");
        $setInfo = new SetInfo();
        switch($act)
        {
            case "addCat": $setInfo->addCat($data);
                break;
            case "addRecord": $setInfo->addRecord($data);
                break;
            default : echo "error";
        }
    }

    public function __construct()
    {
        $postdata = file_get_contents("php://input");
        $data = json_decode($postdata);
        switch(true)
        {
            case isset($data->auth): $this->auth($data->auth);break;
            case isset($data->getdata):$this->getdata($data->act);break;
            case isset($data->setdata):$this->setdata($data->data,$data->setdata);break;
            default : echo "ERROR";
        }
    }
}
$control = new Controller();

?>