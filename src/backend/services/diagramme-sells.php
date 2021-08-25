<?php
// Diagramme sells Count API PAS COMPLET JE BLOCK :(
include_once '../config/headers.php';
include_once '../config/bd.php';
include_once '../config/classes/Autoloader.php';
include_once '../config/classes/splite-date.php';
Autoloader::register();

$monday = strtotime("last monday");

$monday = date('w', $monday)==date('w') ? $monday+7*86400 : $monday;

$sunday = strtotime(date("Y-m-d",$monday)." +6 days");

$this_week_sd = date("Y-m-d",$monday);

$this_week_ed = date("Y-m-d",$sunday);

$reqQuantities = $pdo->prepare("SELECT sell_date FROM sells WHERE sell_date <= ? AND sell_date >= ?");
$reqQuantities->execute([
    $this_week_ed,
    $this_week_sd
  ]);
$Quantities = $reqQuantities->fetchAll();
echo json_encode(new ReqResponse([$Quantities]));