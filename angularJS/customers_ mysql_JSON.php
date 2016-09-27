<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("localhost", "root", "mysql", "Northwind");

$result = $conn->query("SELECT Company, City, Country_Region FROM Customers");

$outp = "";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {$outp .= ",";}
    $outp .= '{"Name":"'  . $rs["Company"] . '",';
    $outp .= '"City":"'   . $rs["City"]        . '",';
    $outp .= '"Country":"'. $rs["Country_Region"]     . '"}'; 
}
$outp ='{"records":['.$outp.']}';
$conn->close();

echo($outp);
?>