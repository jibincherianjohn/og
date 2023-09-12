
//single Inhertiance
// class A{   //Parent ,Base,Super class
//     methoda(n){
//      this.n=n
//      console.log("yor",this.n);
//     }
// }
// class B extends A{   // Child, Derived,sub class
//     methodw(){
//         console.log("inside b",this.n);
//     }
// }
// objk=new B()
// objk.methoda(4)
// objk.methodw()

// Multilevel Inehrtiance

class A{   //Parent ,Base,Super class
    methoda(){

     console.log("yor");
    }
}
class B extends A{   // Child, Derived,sub class
    methodw(){
        console.log("inside b");
    }
}
class C extends B{
    methodc(){
        console.log("jkjiu");
    }
}
objk=new C()
objk.methoda()
objk.methodw()
objk.methodc()