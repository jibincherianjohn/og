phone=[ 
    {name :"nokia",nw:"4g",display:"lcd",price:12000},

    {name :"samsung",nw:"5g",display:"led",price:45000},

    {name :"oppo",nw:"4g",display:"lcd",price:7000},
    {name :"vivo",nw:"4g",display:"lcd",price:10000},
    {name :"apple",nw:"5g",display:"led",price:59000},
    {name :"mi",nw:"4g",display:"lcd",price:15000}
    ]
    console.log(phone);

    // display all mobile name
    console.log(phone.map(i=>i.name));

    console.log("-----------");
    // detail of 5g mobile

    console.log(phone.filter(i=>i.nw=="5g"));

    console.log("-------------");

    // find price of mobiles with lcd display

    console.log(phone.filter(i=>i.display=="lcd").map(i=>i.price ) );
    
    console.log("---------------");
    // find mobile with lowest price
console.log(phone.reduce((a,b)=>a.price<b.price?a:b).name);

console.log("----------------");
    // sort mobiles in descinding order of  price
console.log(phone.sort((a,b)=>b.price-a.price));
console.log("-------------");
    // find total no of mobiles
console.log(phone.length);
console.log("------------");
    // find total price of all mobiles
console.log(phone.map(i=>i.price ).reduce((a,b)=>a+b));
console.log("-----------------");
    //check the avalibilty (present or not) of mobiles withj give featuers  nw=5g display=led price<50000

    console.log(phone.some(i=>i.nw=="5g"&&i.display=="led"&&i.price<=50000));