//problem statement:

//here we can access the values from outside but aim is we can not access the value externally

class employee{
constructor(fn,ln,age,basicSalary){
    this.firstName=fn
        this.lastName=ln
        this.age=age
        this.basicSalary=basicSalary
        this.bonus=500
}
updatetotalSalary(){
   this.totalSalary= this.basicSalary+this.bonus
}
getTotalSalary(){
    console.log(this.totalSalary)
}
}
let archana=new employee("archana","nimonkar",22,10000)
archana.bonus=30000
archana.updatetotalSalary=function(){
    this.totalSalary= this.basicSalary+this.bonus+this.basicSalary
}
archana.updatetotalSalary()
archana.getTotalSalary()


//   solution  :use function constructor

class employee1{
    constructor(fn,ln,age,basicSalary){
        this.firstName=fn
            this.lastName=ln
            this.age=age
            this.basicSalary=basicSalary
            let bonus=500
    
       let  updateSalary=function(){
       this.totalSalary= this.basicSalary+bonus;
    };
   this.getTotalSalary=function(){
         updateSalary()
        console.log(this.totalSalary)
    };
    }
}
    let archana1=new employee1("archana","nimonkar",22,10000)
    
    console.log(archana1.bonus)
   console.log (archana1.updateSalary())         //we cannot access these two outsode the class
   archana1.getTotalSalary()                         //output:50000
   
    
    
    //   solution  :
    
    


























