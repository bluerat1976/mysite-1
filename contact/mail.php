
$nameError = $emailError = $phoneError = "";
$name = $emeil = $phone = $message = "";

<!-- if(htmlspecialchars($_SERVER["REQUEST_METHOD"] == POST)) {
    $name = testData($_POST["name"]);
    $email = testDta($_POST["email"]);
    $phone = testData($_POST["phone"]);
    $message = testData($_POST["message"]);
} -->

function testData($data) {
    $data = trim($data);
    $data = htmlspecialchars($data);
    return($data);
}

if($_SERVER["REQUEST_METHOD"] == "POST") {
    if(empty($_POST["name"])) {
        $nameError = "Имя обязательно";
    } else {
        $name = testData($_POST["name"]);
    }

    if(empty($_POST["emeil"])) {
        $emailError = "Емейл обязателен";
    } else {
        $emeil = testData($_POST["emeil"]);
    }

    if(empty($_POST["phone"])) {
        $phoneError = "";
    } else {
        $phone = testData($_POST["phone"]);
    }

    if(empty($_POST["message"])) {
        $messageError = "";
    } eslse {
        $message = testData($_POST["message"]);
    }
}

echo "<h2>Введенные пользователем данные</h2>"
echo $name;
echo $emeil;
echo $phone;
echo $message;