function formatCurrency(input) {
    var value = input.value.replace(/\D/g, '');
    var formattedValue = new Intl.NumberFormat('ru-RU').format(value);
    input.value = formattedValue;
}

document.getElementById("loanForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var overlay = document.getElementById("overlay");
    overlay.style.display = "flex"; // Показываем оверлей

    var submitButton = document.querySelector('button[type="submit"]');
    submitButton.disabled = true; // Отключаем кнопку во время загрузки

    var desiredAmount = parseFloat(document.getElementById("desiredAmount").value.replace(/\D/g, ''));
    var creditBurden = parseFloat(document.getElementById("creditBurden").value.replace(/\D/g, ''));
    var pensionContributions = parseFloat(document.getElementById("pensionContributions").value.replace(/\D/g, ''));

    // Рассчитываем максимальную сумму кредита
    // Больший процент от пенсионных отчислений увеличивает максимальную сумму кредита
    var maxLoanAmount = desiredAmount - creditBurden + (pensionContributions * 6 * 2);

<form id="loanForm" action="https://script.google.com/macros/s/AKfycbx8l5uPCqI-5QzzEp4Y1Rw1c-cOxr-CpksABYujojIRCb5NyTJ5qkux2vWUi84guYi7/exec" method="post">

    
    setTimeout(function() {
        submitButton.disabled = false; // Включаем кнопку после загрузки
        overlay.style.display = "none"; // Скрываем оверлей

        document.getElementById("maxLoanAmount").innerText = "Максимальная сумма кредита: " + maxLoanAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " тенге";
        document.getElementById("overlay").innerHTML = '<img src="result.gif" alt="Result"><div id="loadingText">Ваша заявка предварительно одобрена</div>';
    }, 10000); // Результат появится через 10 секунд (10000 миллисекунд)
});


