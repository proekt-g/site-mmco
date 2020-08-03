<?php

if (isset($_POST["date"]) && isset($_POST["plus"]) && isset($_POST["sergey"]) && isset($_POST["sergey"])) { 
    // Это тестовый файл php который нужно будет заменить на реальный, тут я просто имитирую
    // деятельность серверной стороны для ajax, чтобы показать что все работает
    
    // Формирую массив для JSON ответа
    $result = array(
    	'date' => $_POST["date"],
        'plus' => $_POST["plus"],
        'sergey' => $_POST["sergey"],
        'search' => $_POST["search"]
    ); 

    // Перевожу массив в JSON
    echo json_encode($result); 
}

?>