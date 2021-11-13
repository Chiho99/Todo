<?php

// ファイルの読み込み
require_once('Models/Task.php');
// データの受け取り
$title = $_POST['title'];
$contents = $_POST['contents'];
$deadline = $_POST['deadline'];
$list = $_POST['list'];
$currrentTime = date("Y/m/d H:i:s");

// DBへのデータ保存
$task = new Task();
$task->create([$title, $contents, $currentTime, $deadline, $list]);


// リダイレクト
header('location: index.php');
exit;