/** @format */

let arr = [
    { id: 1, name: "john", age: "18", marks: 80 },
    { id: 2, name: "jack", age: "20", marks: 85 },
    { id: 3, name: "karen", age: "19", marks: 35 },
  ];
  
  function PrintStudentswithMap() {
    //Write your code here , just console.log
    arr.map(function(student){
        if( student.marks > 50 ){
          console.log(student);
        }
      });
  }
  
  function PrintStudentsbyForEach() {
    //Write your code here , just console.log
    arr.forEach(function(student){
        if(student.marks > 50 ){
          console.log(student)
        }
      });
  }
  
  function addData() {
    //Write your code here, just console.log
    let newStudent = {id:4, name:"susan", age:"20" , marks:45};
    arr.push(newStudent);
    console.log(arr);
  }
  
  function removeFailedStudent() {
    //Write your code here, just console.log
    let failed_Students = arr.filter((student) => student.marks < 50)
    console.log(failed_Students);
   }
  function concatenateArray() {
    //Write your code here, just console.log
    let new_Arr = [
        { id: 4, name: "ADITYA", age: "24", marks: 90 },
        { id: 5, name: "AMAN", age: "26", marks: 50 },
        { id: 6, name: "ARVIND", age: "26", marks: 50 },
      ];
    
      let concatenatedArr = arr.concat(new_Arr);
      console.log(concatenatedArr);
  }