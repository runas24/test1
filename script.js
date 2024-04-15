function formatCurrency(input) {
    var value = input.value.replace(/\D/g, '');
    var formattedValue = new Intl.NumberFormat('ru-RU').format(value);
    input.value = formattedValue;
}

document.getElementById("loanForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var submitButton = document.querySelector('button[type="submit"]');
    submitButton.disabled = true; // Отключаем кнопку во время загрузки

    var overlay = document.getElementById('overlay');
    overlay.style.display = 'flex'; // Показываем оверлей

    var progressBar = document.getElementById('progressBar');
    var overlayText = document.getElementById('overlayText');
    progressBar.style.width = '0%'; // Устанавливаем начальную ширину прогресс бара

    var desiredAmount = parseFloat(document.getElementById("desiredAmount").value.replace(/\D/g, ''));
    var creditBurden = parseFloat(document.getElementById("creditBurden").value.replace(/\D/g, ''));
    var pensionContributions = parseFloat(document.getElementById("pensionContributions").value.replace(/\D/g, ''));

    var maxLoanAmount = desiredAmount - creditBurden + (pensionContributions * 6 * 2);

    var progress = 0;
    var interval = setInterval(function() {
        progressBar.style.width = progress + '%'; // Обновляем ширину прогресс бара
        progress++;
        if (progress >= 100) {
            clearInterval(interval); // Останавливаем интервал после достижения 100%
            setTimeout(function() {
                submitButton.disabled = false; // Включаем кнопку после загрузки
                overlay.style.display = 'none'; // Скрываем оверлей
                document.getElementById("maxLoanAmount").innerText = "Максимальная сумма кредита: " + maxLoanAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " тенге";
                overlayText.innerText = "Ваша заявка предварительно одобрена"; // Обновляем текст оверлея
            }, 1000); // Дополнительная задержка перед отображением результата
        }
    }, 100); // Интервал обновления
