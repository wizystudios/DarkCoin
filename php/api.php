<?php
$from = $_GET['from'];
$to = $_GET['to'];
$apiKey = 'YOUR_API_KEY'; // Replace with your API key
$url = "https://v6.exchangerate-api.com/v6/{$apiKey}/pair/{$from}/{$to}";

$response = file_get_contents($url);
$data = json_decode($response, true);

if ($data['result'] === 'success') {
  echo json_encode(['rate' => $data['conversion_rate']]);
} else {
  echo json_encode(['error' => 'Unable to fetch data']);
}
?>