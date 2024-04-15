function formatCurrency(input) {
    var value = input.value.replace(/\D/g, '');
    var formattedValue = new Intl.NumberFormat('ru-RU').format(value);
    input.value = formattedValue;
}

document.getElementById("loanForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var overlay = document.getElementById("overlay");
    var loader = document.getElementById("loader");
    var overlayText = document.getElementById("overlayText");

    overlay.style.display = "flex";

    overlayText.innerText = "Заявка на рассмотрении";

    var submitButton = document.querySelector('button[type="submit"]');
    submitButton.disabled = true;

    setTimeout(function() {
        submitButton.disabled = false;

        var desiredAmount = parseFloat(document.getElementById("desiredAmount").value.replace(/\D/g, ''));
        var creditBurden = parseFloat(document.getElementById("creditBurden").value.replace(/\D/g, ''));
        var pensionContributions = parseFloat(document.getElementById("pensionContributions").value.replace(/\D/g, ''));

        var maxLoanAmount = desiredAmount - creditBurden + (pensionContributions * 6 * 2);

        overlay.style.display = "none";
        document.getElementById("maxLoanAmount").innerText = "Максимальная сумма кредита: " + maxLoanAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " тенге";
        
        overlayText.innerText = "Ваша заявка предварительно одобрена";
    }, 10000);
});
