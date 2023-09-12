
// a=[10,20,20,10,20]
// count={}
// // for(i of a){
// //     if(i in count){
// //         count[i]+=1
// //     }
// //     else{
// //         count[i]=1
// //     }
// // }


// a.map( i=>i in count ? count[i]=1:count[i]=1);
// console.log(count);


//split method

// s="hi vertba"
// a=s.split(" ")
// console.log(a);

// s="a thin wire that is stretched across a musical "


// console.log(s.split(" ").reduce((a,b)=>a.length>b.length?a:b));

// questions
// 1
s="abcabcd"
// recursive element-abc
// frist and last recursive elemnt
obj={}
rec=""
for(i of s){
    if(i in obj){
        rec=rec+i
    }
    else{
        obj[i]=1
    }
}
console.log(rec[0]);
console.log(rec.length-1);


// 2
s="hello hi hello luminar"
count={}
//word count object {hello:2 hi:1 luminar:1}
// console.log(s.split(" ").map( i=>i in count ? count[i]+=1:count[i]=1));
a=s.split("")
a.map(i=>i in count?count[i]+=1:count[i]=1)
console.log(count);

// figma tail wind -like bootstrap frame work