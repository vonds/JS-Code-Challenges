// https://www.codewars.com/kata/55e5253dcd20f821c400008e
function Node(data) {
    this.data = data === undefined ? null : data;
    this.next = null;
}
  
function shuffleMerge(first, second) {
    let arr1 = []
    let arr2 = []
    while (first){
      arr1.push(first.data)
      first=first.next
    }
      while (second){
      arr2.push(second.data)
      second=second.next
    }
    let arr3 = []
    for (let i=0;arr1.length||arr2.length;i++){
      if (arr1.length) {arr3.push(arr1.shift())}
      if (arr2.length) {arr3.push(arr2.shift())}
    }
    let push = (list,data)=>{
      let newNode = new Node(data)
      newNode.next = list
      return newNode
    }
    let list = null
    arr3.reverse().map(v=>list=push(list,v))
    return list
}