function formatCurrency(input) {
    var value = input.value.replace(/\D/g, '');
    var formattedValue = new Intl.NumberFormat('ru-RU').format(value);
    input.value = formattedValue;
}

document.getElementById("loanForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var submitButton = document.querySelector('button[type="submit"]');
    submitButton.disabled = true; // Отключаем кнопку во время загрузки

    var desiredAmount = parseFloat(document.getElementById("desiredAmount").value.replace(/\D/g, ''));
    var creditBurden = parseFloat(document.getElementById("creditBurden").value.replace(/\D/g, ''));
    var pensionContributions = parseFloat(document.getElementById("pensionContributions").value.replace(/\D/g, ''));

    // Рассчитываем максимальную сумму кредита
    // Больший процент от пенсионных отчислений увеличивает максимальную сумму кредита
    var maxLoanAmount = desiredAmount - creditBurden + (pensionContributions * 6 * 2);

    setTimeout(function() {
        submitButton.disabled = false; // Включаем кнопку после загрузки

        document.getElementById("maxLoanAmount").innerText = "Максимальная сумма кредита: " + maxLoanAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " тенге";
    }, 10000); // Результат появится через 10 секунд (10000 миллисекунд)
});

document.getElementById("loanForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var submitButton = document.getElementById('calculateButton');
    submitButton.disabled = true;

    var progressCircle = document.querySelector('.progress-ring__circle');
    progressCircle.classList.add('in-progress');

    setTimeout(function() {
        progressCircle.classList.remove('in-progress');
        progressCircle.classList.add('complete');

        setTimeout(function() {
            submitButton.disabled = false;
            progressCircle.classList.remove('complete');
        }, 1000); // Длительность анимации зависит от CSS
    }, 3000); // Продолжительность времени загрузки
});
