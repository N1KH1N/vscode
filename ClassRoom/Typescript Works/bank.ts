class Bank{
    acno:string
    balance: number
    acType:string
    branchName:string="Thrissur Main Branch"
    name:string
    //static variable,intsance variable

    constructor(acno,acType,name){
        this.acno=acno
        this.acType=acType
        this.name=name
        this.balance=3000
    }

    displayDetail(){
        console.log(this.acno,this.name,this.balance);
        
    }

deposit(amount:number){
    this.balance+=amount
    console.log(`your account ${this.acno} has been creadited by Rs${amount}/- and the Available Balance is ${this.balance}/-`);
    
}

withdraw(amount:number){
    if(amount<=this.balance){
    this.balance-=amount
    let date=new Date().toLocaleDateString()
        console.log(`${amount}/- has been withdrawn from your account ${this.acno} on ${date} and the Available Balance is ${this.balance}/-`);
    }

    else{
        console.log("Transaction Failed");
    }
}

balanceEnquiry(){
    let date=new Date().toLocaleDateString()
    console.log(`The Available Balance on ${date} is: ${this.balance}/-`);
    
}

fundTransfer(toAccno:string,amount){
    let date=new Date().toLocaleDateString()
    if(amount<=this.balance){
        this.balance-=amount
        console.log(`${amount} have been transfered to ${toAccno} on ${date} and the current balance is ${this.balance}`);
    }
    else{
        console.log("Insufficient Amount Available");
        
    }
}

}

var acc1=new Bank("375223","savings","ajith")
acc1.displayDetail()
acc1.deposit(4670)
acc1.withdraw(2500)
acc1.balanceEnquiry()
acc1.fundTransfer("7353836",1000)
