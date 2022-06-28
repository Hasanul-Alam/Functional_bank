document.getElementById('deposit-submit-btn').addEventListener('click', function(){
    const inputText = document.getElementById('deposit-field');
    const inputValue = parseFloat(inputText.value);

    // Get the current deposit amount
    const currentDeposit = document.getElementById('deposit-amount');
    const currentDepositValue = parseFloat(currentDeposit.innerText);

    // Set input value to deposit amount
    currentDeposit.innerText = inputValue + currentDepositValue;

    // Update balance
    const currentBalance = document.getElementById('balance-amount');
    const currentBalanceValue = parseFloat(currentBalance.innerText);
    currentBalance.innerText = currentBalanceValue + inputValue;
    // Clear deposit input field
    inputText.value = '';
});