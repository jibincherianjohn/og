//  users=[
//     {id:100,first_name:"ram",email:"ram@gmail.com",dept:"sales",salary:25000},
//     {id:101,first_name:"ravi",email:"ravi@gmail.com",dept:"it",salary:28000},
//     {id:102,first_name:"raju",email:"raju@gmail.com",dept:"ba",salary:35000},
//     {id:103,first_name:"rahul",email:"rahul@gmail.com",dept:"devop",salary:45000},
//     {id:104,first_name:"akhil",email:"akhil@gmail.com",dept:"devop",salary:55000},
//     {id:105,first_name:"aravind",email:"aravind@gmail.com",dept:"qa",salary:65000},
//     {id:106,first_name:"ajay",email:"ajay@gmail.com",dept:"qa",salary:28000},

// ]


// console.log(users.length);

// console.log(users.filter((i)=>i.dept=="devop").map(i=>i.first_name));

// console.log(users.filter((i)=>i.id==102).map(i=>i.email));
// console.log(users.find(i=>i.id==102).email);

// console.log(users.reduce((a,b)=>a.salary>b.salary?a:b).dept);

//  console.log(users.filter((i)=>i.dept=="devop").map(i=>i.salary));

// console.log(users.sort((a,b)=>a.salary-b.salary));

// console.log(users.reduce((a,b)=>a.salary<b.salary?a:b));


 accounts = [
    {
      acno: 1000, ac_type: "savings", balance: 5000, transactions: [
        { to: 1001, amount: 500, note: "ebill", method: "g-pay" },
        { to: 1002, amount: 600, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
      ]
    },
    {
      acno: 1001, ac_type: "savings", balance: 6000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
 
      ]
    },
    {
      acno: 1002, ac_type: "current", balance: 8000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1001, amount: 5000, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
 
      ]
    },
    {
      acno: 1003, ac_type: "current", balance: 16000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1001, amount: 100, note: "erchrge", method: "phone-pay" }
 
      ]
    },
 
  ]

// //   1.Print all gpay transactions?
// console.log("Print all gpay transactions?");
// console.log(accounts.map((i)=>i.transactions).flat().filter(i=>i.method=='g-pay'));
// console.log("------------------------------------------------------------------");
// // 2. print all transaction whose amount>3000?
// console.log("print all transaction whose amount>3000");
// console.log(accounts.map((i)=>i.transactions).flat().filter(i=>i.amount>3000));

// console.log("----------------------------------------------------------------");

// //3.print credit transaction of account 1002?

// console.log(".print credit transaction of account 1002?");

// console.log(accounts.map((i)=>i.transactions).flat().filter(i=>i.to==1002));

// console.log("-----------------------------------------------------------------------");

// // 4.print debit transaction of account 1002?

// console.log("print debit transaction of account 1002?");

// console.log(accounts.filter((i)=>i.acno==1002).map((i)=>i.transactions));
// console.log(accounts.find(i=>i.acno==1002).transactions);

// // 5.print highest balance ac details?

// console.log("5.print highest balance ac details?");

// console.log(accounts.reduce((a,b)=>a.balance>b.balance?a:b));
// console.log("---------------------------------------------");

// s="hello hi hello luminar"
// count={}
// // console.log(s.map((i)=>i in count ? count[i]=1:count[i]=1).split(""));


// s.split(" ").map( i=>i in count ? count[i]+=1:count[i]=1)
// console.log(count);