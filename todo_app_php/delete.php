<?php 
// deleteの処理内容を以下に書く

// 1. ファイルの読み込み
require_once('Models/Task.php');

// 2. データの受け取り
$task = new Task();
$id = $_POST['id'];
// 3. DBからデータの削除
$task->delete([$id]);

// 4. リダイレクト
header('location: index.php');
exit;
