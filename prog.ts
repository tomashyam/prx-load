import * as exp from "express";
const app =  exp()
let counter = 0;
app.get("/isalive" , (req,res)=> {
  console.log(true)
  res.send(true)
  res.end();
})

app.get("/inc", (req,res)=> {
  counter++;
  console.log(counter);
  res.end()
});

app.listen(90, ()=> {
  console.log ("hit me iam redy");
});