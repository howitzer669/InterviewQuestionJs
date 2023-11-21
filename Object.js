var student = {
  name : "David Rayy",
  sclass : "VI",
  rollno : 12,
  info: {
  	email: "abc@gmail.com",
    phone: 8877445678,
    address: {
    	dis: "Pratapgarh",
      state: "UP",
      country: ""
    }
  },
  marks: 83,
  sections: {
  	student: {
    	aman: true,
      sita: false
    }
  }
};

let s = ''
let result = []

/* function getObjectKeys(student){

  if(typeof student == 'object'){
      for(let key in student){
        if(typeof student[key] == 'object'){
          result.push(key);
          getObjectKeys(student[key])
        }else{
          result.push(key);
        }
    }
    }
    
    if(typeof student == 'object' && student != null){
      for(let [key,value] of Object.entries(student)){
        if(typeof value == 'object' && student != null){
          result.push(key);
          getObjectKeys(value);
        }else{
          result.push(key);
        }
      }
    }
} */


const [name] = {...student};

console.log(data);

getObjectKeys(student);
console.log(result);
