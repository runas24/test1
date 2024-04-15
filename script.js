function formatCurrency(input) {
    var value = input.value.replace(/\D/g, '');
    var formattedValue = new Intl.NumberFormat('ru-RU').format(value);
    input.value = formattedValue;
}

document.getElementById("loanForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var submitButton = document.querySelector('button[type="submit"]');
    submitButton.disabled = true; // Отключаем кнопку во время загрузки

    // Показываем прогресс
    document.getElementById("progressBar").style.display = "block";
    document.getElementById("progressText").style.display = "block";
    document.querySelector(".progress").style.width = "0%";

    var desiredAmount = parseFloat(document.getElementById("desiredAmount").value.replace(/\D/g, ''));
    var creditBurden = parseFloat(document.getElementById("creditBurden").value.replace(/\D/g, ''));
    var pensionContributions = parseFloat(document.getElementById("pensionContributions").value.replace(/\D/g, ''));

    // Рассчитываем максимальную сумму кредита
    // Больший процент от пенсионных отчислений увеличивает максимальную сумму кредита
    var maxLoanAmount = desiredAmount - creditBurden + (pensionContributions * 6 * 2);

    setTimeout(function() {
        submitButton.disabled = false; // Включаем кнопку после загрузки

        document.getElementById("maxLoanAmount").innerText = "Максимальная сумма кредита: " + maxLoanAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " тенге";
        
        // Скрываем прогресс и надпись прогресса
        document.getElementById("progressBar").style.display = "none";
        document.getElementById("progressText").style.display = "none";

        // Показываем надпись результата
        var resultText = document.createElement("div");
        resultText.className = "result-text";
        resultText.innerText = "Ваша заявка предварительно одобрена";
        document.querySelector(".container").appendChild(resultText);
    }, 10000); // Результат появится через 10 секунд (100

document.getElementById("loanForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var submitButton = document.querySelector('button[type="submit"]');
    submitButton.disabled = true; // Отключаем кнопку во время загрузки

    // Показываем прогресс и текст "Заявка на рассмотрении"
    document.getElementById("overlay").style.display = "flex";
    document.querySelector(".progress").style.width = "0%";
    document.getElementById("statusText").innerText = "Заявка на рассмотрении";

    var desiredAmount = parseFloat(document.getElementById("desiredAmount").value.replace(/\D/g, ''));
    var creditBurden = parseFloat(document.getElementById("creditBurden").value.replace(/\D/g, ''));
    var pensionContributions = parseFloat(document.getElementById("pensionContributions").value.replace(/\D/g, ''));

    // Рассчитываем максимальную сумму кредита
    // Больший процент от пенсионных отчислений увеличивает максимальную сумму кредита
    var maxLoanAmount = desiredAmount - creditBurden + (pensionContributions * 6 * 2);

    setTimeout(function() {
        submitButton.disabled = false; // Включаем кнопку после загрузки

        document.getElementById("maxLoanAmount").innerText = "Максимальная сумма кредита: " + maxLoanAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " тенге";

        // Скрываем прогресс и меняем текст на "Ваша заявка предварительно одобрена"
        document.getElementById("overlay").style.display = "none";
        document.getElementById("statusText").innerText = "Ваша заявка предварительно одобрена";
    }, 10000); // Результат появится через 10 секунд (10000 миллисекунд)
});

                                                     
