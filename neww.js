//no,district,+ve cases,death rate,cured rate,1st dose vaccine,2nd dose vaccine]
covid_data = [
    [1,'Ernakulam',34000,2000,23000,20000,2000],
    [2,'Idukki',14000,3000,25000,30000,1000],
    [3,'Thrissur',24000,4000,33000,24000,2500],
    [4,'Pathanamthitta',20000,2000,45000,22000,1500],
    [5,'Kozhikode',44000,5000,12000,21000,500],
    [6,'Palakkad',12000,1000,20000,23000,3400],
    [7,'Kottayam',27000,1500,27000,14000,1000],
    [8,'Kollam',14000,2500,25000,18000,2700]

]

console.log(covid_data.reduce((a,b)=>a[2]>b[2]?a:b)[1])

console.log(covid_data.reduce((a,b)=>a[5]>b[5]?a:b)[1])

console.log(covid_data.reduce((a,b)=>a[3]<b[3]?a:b)[1])

console.log(covid_data.sort((a,b)=>a[2]-b[2]))

console.log(covid_data.filter((i=>i[2]>15000)).map(i=>i[1]));

console.log(covid_data.sort((a,b)=>b[5]-a[5]))

console.log(covid_data.filter((i=>i[1]=="Thrissur")));

console.log(covid_data.map(i=>i[2]).reduce((a,b)=>a+b));

console.log(covid_data.map(i=>i[4]).reduce((a,b)=>a+b));


console.log(covid_data.filter(i=>i[1]=="Idukki").map(i=>i[4]));