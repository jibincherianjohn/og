//Polymorphism
// many forms

// methods
//  overloadding
// over riding

// overloadding  javascript dosent support
// class A{   s
//     methoda(n){
//  this.n=n
//      console.log("yor",this.n);
//     }
//     methoda(){
//         console.log("inside b",this.n);
//     }
//     }
//  obk=new A()
//  obk.methoda()
//  obk.methoda(7)

//  Overriding

class A{   
    methoda(){
 
     console.log("inside b");
    }
}
    class B extends A{
    methoda(){
        console.log("inside b");
    }
    }

 obk=new B()
 obk.methoda()
