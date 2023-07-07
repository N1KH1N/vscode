class Person{

    setPerson(name,age,gender){
        this.name=name
        this.gender=gender
        this.age=age
    }

    printPerson(){
        console.log(this.name,this.gender,this.age);
    }
}

var p=new Person()

p.setPerson("aji",23,"male")
p.printPerson()