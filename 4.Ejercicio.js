class BankAccount {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

   
    deposit(amount) {
        this.balance += amount;
        console.log(`Depositado ${amount} CAD. Nuevo saldo: ${this.balance} CAD`);
    }

   
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Retirado ${amount} CAD. Nuevo saldo: ${this.balance} CAD`);
        } else {
            console.log("Saldo insuficiente. No se permite el retiro.");
        }
    }
}


const myAccount = new BankAccount("123456", 1000);

myAccount.deposit(500);


myAccount.withdraw(200);


myAccount.withdraw(1000);
