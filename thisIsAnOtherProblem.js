// https://www.codewars.com/kata/547f1a8d4a437abdf800055c
class NamedOne {
  constructor(first, last) { 
    this.firstName = first
    this.lastName = last 
  }
  
  get fullName() { 
    return `${this.firstName} ${this.lastName}` 
  }
  
  set fullName(value) { 
    if (/ /.test(value)) {
      [this.firstName, this.lastName] = value.split(' ')
    } 
  }
}