{
  let fname = "sandesh";

  {
        console.log(fname); // sandesh

        let lname = "gaikwad";

        {
        console.log(lname); // gaikwad
        console.log(fname); // sandesh
        }

  }

//   console.log(lname)               // error

  console.log(fname); //sandesh
}
