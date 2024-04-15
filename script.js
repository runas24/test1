function formatCurrency(input) {
    var value = input.value.replace(/\D/g, '');
    var formattedValue = new Intl.NumberFormat('ru-RU').format(value);
    input.value = formattedValue;
}

document.getElementById("loanForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var overlay = document.getElementById('overlay');
    overlay.style.display = 'flex'; // Показываем оверлей

    // Добавляем задержку для имитации загрузки
    setTimeout(function() {
        var submitButton = document.querySelector('button[type="submit"]');
        submitButton.disabled = false; // Включаем кнопку после загрузки

        var desiredAmount = parseFloat(document.getElementById("desiredAmount").value.replace(/\D/g, ''));
        var creditBurden = parseFloat(document.getElementById("creditBurden").value.replace(/\D/g, ''));
        var pensionContributions = parseFloat(document.getElementById("pensionContributions").value.replace(/\D/g, ''));

        // Рассчитываем максимальную сумму кредита
        // Больший процент от пенсионных отчислений увеличивает максимальную сумму кредита
        var maxLoanAmount = desiredAmount - creditBurden + (pensionContributions * 6 * 2);

        // Скрываем оверлей и обновляем результат
        overlay.style.display = 'none';
        document.getElementById("maxLoanAmount").innerText = "Максимальная сумма кредита: " + maxLoanAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " тенге";

        // Показываем сообщение об одобрении заявки
        document.getElementById("overlayText").innerText = "Ваша заявка предварительно одобрена";
        overlay.style.display = 'flex';
    }, 10000); // Результат появится через 10 секунд (10000 миллисекунд)
});
