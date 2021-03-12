// https://www.codewars.com/kata/57d1f36705c186d018000813
const gordon = a => a.toUpperCase().replace(/[A]/gi,'@').replace(/[aeiuo]/gi,'*')
   .split(` `).map(v=>v+'!!!!').join(` `)