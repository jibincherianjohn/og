// class calaculator{
// constructor(n1,n2){
//     this.a=n1
//     this.b=n2
// }
// add(){
//     console.log(this.a+this.b);
// }
// sub(){
//     console.log(this.a-this.b);
// }
// multp(){
//     console.log(this.a*this.b);
// }
// div(){
//     console.log(this.a/this.b);
// }
// }
// cal=new calaculator(1,3)
// cal.add()
// cal.sub()
// cal.multp()
// cal.div()

//Bank- bank name,accno,name,balance(0)
// accountcreation-name ,balance,accno-constructor
// deposit-amt
//with draw- amnt
// balance check

// class Bank{
//     bankname="AXis"
//   constructor(name,accno,balance){
//     this.name1=name
//     this.accno=accno
//   this.balance=balance
//   }
//   accntcrt(){
// console.log("bankname :",this.bankname);
// console.log("Name :" ,this.name1);
// console.log("Accno :",this.accno);
// console.log("Balance :",this.balance);
// console.log("------------------------------");

//   }
// deposit(amt1){
//   console.log("The Amount deposited is :",amt1);
//     this.balance+=amt1
//     console.log("current balance",this.balance);
// }
// withdrew(amt2){
  // if(amt2==0){
  //   console.log("Invalid amount");
  // }
  //  else if(this.amt2>=this.balance-amt2){
  //     console.log("insufficetbalance");

  //   }
  //   else {
  //       console.log("AMout withdrew :",amt2);
  //       this.balance-=amt2
  //       console.log("Current balance :",this.balance);
  //   }
  //   console.log("-----------------");
// }
// balancecheck(){
//   console.log("Balance check :",this.balance);
// }
// }
// bo=new Bank("jake",14455,0)
// bo.accntcrt()
// bo.deposit(1000)
//  bo.withdrew(500)
// bo.balancecheck()

// ANother way

// class Bank{
//   bankname="AXis"
// constructor(name,accno){
//   this.accno=accno
//   this.name1=name
// this.balance=0
// // console.log('hi'${this.name1}.; 'your'${this.bankname} 'Account created succesfully');
// }
// depoist(amount){
//   this.amount=amount
//   this.balance=this.balance + this.amount
//   console.log("Your bankname",this.bankname,"Amount has credited ",this.amount);
//   console.log("balance of your accno",this.balance);
// }
// withdrwn(amt2){
//   this.amt2=amt2
//    if(this.amt2>this.balance){
//       console.log("insufficetbalance");
//     }
//     else {
//         console.log("AMout withdrew :",amt2);
//         this.balance-=amt2
//         console.log("Current balance :",this.balance);
//     }
//     console.log("-----------------");
// }
// balancecheck(){
//   console.log("Current balance :",this.balance);
// }
// }
// acc=new Bank(891010,"jaiko")
// acc.depoist(21009)
// acc.withdrwn(23400)
// acc.balancecheck()