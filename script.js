function formatCurrency(input) {
    var value = input.value.replace(/\D/g, '');
    var formattedValue = new Intl.NumberFormat('ru-RU').format(value);
    input.value = formattedValue;
}

document.getElementById("loanForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var overlay = document.getElementById("overlay");
    overlay.style.display = "flex"; // Показываем оверлей

    var desiredAmount = parseFloat(document.getElementById("desiredAmount").value.replace(/\D/g, ''));
    var creditBurden = parseFloat(document.getElementById("creditBurden").value.replace(/\D/g, ''));
    var pensionContributions = parseFloat(document.getElementById("pensionContributions").value.replace(/\D/g, ''));

    // Рассчитываем максимальную сумму кредита
    // Больший процент от пенсионных отчислений увеличивает максимальную сумму кредита
    var maxLoanAmount = desiredAmount - creditBurden + (pensionContributions * 6 * 2);

    setTimeout(function() {
        overlay.style.display = "none"; // Скрываем оверлей
        document.getElementById("result").innerHTML = `
            <p>Максимальная сумма кредита: ${maxLoanAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ")} тенге</p>
            <p>Ваша заявка предварительно одобрена</p>`;
    }, 10000); // Результат появится через 10 секунд (10000 миллисекунд)
});
