// let user = {
//     fullname: function (){
//       return this.fname + this.lname
//     }
//   }

// let value = {
//     fname:"abc",
//     lname:"def"
// }

//   let generaluser = user.fullname.bind(value);
//   console.log(generaluser());



let user = {
    fullname: function (){
      return this.func();
    }
  }

let value = {
    func(){
        return 5;
    }
}



  let generaluser = user.fullname.bind(value);
  console.log(generaluser());