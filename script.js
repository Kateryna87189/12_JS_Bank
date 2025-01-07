const bank = [];

//Debit card без можливості залізти в мінус
const bankAccount = {
  accountNumber: "123456789",
  accountHolderName: "Alice",
  balance: 0,
  deposit(sum) {
    sum >= 5 && sum <= 5000
      ? (this.balance += sum)
      : alert("Введена сума для поповнення балансу не коректна");
  },
  withdraw(sum) {
    //зняття коштів
    sum > 0 && sum <= this.balance
      ? (this.balance -= sum)
      : alert("Недостатньо коштів або некоректна сума для зняття.");
  },
  checkBalance() {
    alert(this.balance + "€");
  },
};
// bankAccount.deposit(100);
// console.log(bankAccount.balance);
// bankAccount.withdraw(50);
// console.log(bankAccount.balance);

function createAccount() {
  //при натиснені кнопки createAccount
  const nameInput = document.getElementById("name"); //отримали силку на елемент
  const name = nameInput.value.trim();

  if (name) {
    //якщо ім'я введено
    bank.push({
      //додаєм інфо
      ...bankAccount, //копія всієї інфи банк-акаунта (шаблон)
      accountNumber: `${bank.length + 1}`, //вручну змінюємо те що мало змінитись
      accountHolderName: name,
    });
    updateAccountsList();
  } else {
    alert("Enter your name");
  }
  nameInput.value = ""; //стирає попередню записану інфу
}

function showAccounts() {
  //при натиснені кнопки showAccounts
  updateAccountsList();
}

function updateAccountsList() { //обновити список акаунтів

  const accountsList = document.getElementById("accountsList"); //елементи в секції
  const show = document.getElementById("show");

  accountsList.innerHTML = ""; //зачистити список

  if (bank.length > 0) {  //якщо з'являється хоча б один банк акаунт
    show.style.display = "block";
    for (const account of bank) { //ітерація усіх банківських акаунтів
      const li = document.createElement("li"); //додається новий елемент списку
      li.textContent = `ID: ${account.accountNumber}, Name: ${account.accountHolderName}, Balance: ${account.balance}`;//наповнюєм список контентом
      accountsList.appendChild(li);//додали елемент в список
    }
  } else {
    show.style.display = "none";
  }
}

//HW
//event listener(кожен елемент може слідкувати за собитієм який може з ним відбуватись)
         // button
const withdrawBtn = document.getElementById('withdraw');
const deposit = document.getElementById('deposit');

withdrawBtn.onclick = function () {
  //TODO: (опис того що відбуватиметься після кліка на дану кнопку()
}

depositBtn.onclick = function () {
  //TODO: (опис того що відбуватиметься після кліка на дану кнопку()
}
