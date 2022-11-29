// shallow copy

const person = {
    name: "sachin",
    age: 22,
    address: {
      pin: 828207,
      city: "wassepur",
      abc: [12, 34]
    }
  };
  
  //const person2 = JSON.parse(JSON.stringfy(person))   deep copy
  
  const person2 = JSON.parse(JSON.stringify(person));
  // const person2 = {
  //     ...person,
  //     address:{
  //         ...person.address,
  //         abc:[...person.abc]
  //     }
  // }
  
  // person2.name = "amit"
  // person2.address.pin = 828204
  // console.log("person", person)
  // console.log("person2", person2)