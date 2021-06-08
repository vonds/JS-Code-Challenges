// https://www.codewars.com/kata/524c6a2e55025e3fba00020f
MyNamespace = MyNamespace || {}

MyNamespace.MyClass = class{
  constructor(arg){
    this.arg = arg
  }
  
  sayHello(){
    return this.arg
  }
}