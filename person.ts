export class Person{
  firstName: string;
  middleName: string;
  lastName: string;
  age: number;

  constructor(firstName: string, middlename: string, lastName: string, idade: number){
    this.firstName = "Christian";
    this.middleName = "Alves";
    this.lastName = "Pinheiro";
    this.age = 28;
  }


  getFullName(){
    return "Nome: "+ this.firstName + " " + this.middleName + " " + this.lastName;
  }

  getBirthdayYear(){
    return "Idade: "+ this.age + " " +"anos.";
  }
}