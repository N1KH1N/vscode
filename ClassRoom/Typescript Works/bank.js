var Bank = /** @class */ (function () {
    //static variable,intsance variable
    function Bank(acno, acType, name) {
        this.branchName = "Thrissur Main Branch";
        this.acno = acno;
        this.acType = acType;
        this.name = name;
        this.balance = 3000;
    }
    Bank.prototype.displayDetail = function () {
        console.log(this.acno, this.name, this.balance);
    };
    Bank.prototype.deposit = function (amount) {
        this.balance += amount;
        console.log("your account ".concat(this.acno, " has been creadited by Rs").concat(amount, "/- and the Available Balance is ").concat(this.balance, "/-"));
    };
    Bank.prototype.withdraw = function (amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            var date = new Date().toLocaleDateString();
            console.log("".concat(amount, "/- has been withdrawn from your account ").concat(this.acno, " on ").concat(date, " and the Available Balance is ").concat(this.balance, "/-"));
        }
        else {
            console.log("Transaction Failed");
        }
    };
    Bank.prototype.balanceEnquiry = function () {
        var date = new Date().toLocaleDateString();
        console.log("The Available Balance on ".concat(date, " is: ").concat(this.balance, "/-"));
    };
    Bank.prototype.fundTransfer = function (toAccno, amount) {
        var date = new Date().toLocaleDateString();
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log("".concat(amount, " have been transfered to ").concat(toAccno, " on ").concat(date, " and the current balance is ").concat(this.balance));
        }
        else {
            console.log("Insufficient Amount Available");
        }
    };
    return Bank;
}());
var acc1 = new Bank("375223", "savings", "ajith");
acc1.displayDetail();
acc1.deposit(4670);
acc1.withdraw(2500);
acc1.balanceEnquiry();
acc1.fundTransfer("7353836", 1000);
