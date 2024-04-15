function formatCurrency(input) {
    var value = input.value.replace(/\D/g, '');
    var formattedValue = new Intl.NumberFormat('ru-RU').format(value);
    input.value = formattedValue;
}

document.getElementById("loanForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var overlay = document.getElementById("overlay");
    var progressBar = document.getElementById("progress-bar");
    var overlayMessage = document.getElementById("overlay-message");
    var submitButton = document.querySelector('button[type="submit"]');
    
    overlay.style.display = "block"; // Показываем оверлей
    
    // Запускаем анимацию прогресс бара
    var width = 1;
    var progressInterval = setInterval(function() {
        if (width >= 100) {
            clearInterval(progressInterval);
        } else {
            width++;
            progressBar.style.width = width + "%";
        }
    }, 100);

    // Показываем сообщение о загрузке
    overlayMessage.innerText = "Заявка на рассмотрении...";

    // Симулируем рассчет с задержкой в 10 секунд
    setTimeout(function() {
        clearInterval(progressInterval); // Останавливаем анимацию прогресс бара
        overlay.style.display = "none"; // Скрываем оверлей
        submitButton.disabled = false; // Включаем кнопку после загрузки

        // Показываем результат и сообщение
        var desiredAmount = parseFloat(document.getElementById("desiredAmount").value.replace(/\D/g, ''));
        var creditBurden = parseFloat(document.getElementById("creditBurden").value.replace(/\D/g, ''));
        var pensionContributions = parseFloat(document.getElementById("pensionContributions").value.replace(/\D/g, ''));

        // Рассчитываем максимальную сумму кредита
        // Больший процент от пенсионных отчислений увеличивает максимальную сумму кредита
        var maxLoanAmount = desiredAmount - creditBurden + (pensionContributions * 6 * 2);

        document.getElementById("maxLoanAmount").innerText = "Максимальная сумма кредита: " + maxLoanAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " тенге";
        overlayMessage.innerText = "Ваша заявка предварительно одобрена";
    }, 10000); // Результат появится через 10 секунд (10000 миллисекунд)
});
