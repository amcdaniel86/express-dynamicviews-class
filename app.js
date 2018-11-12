var express = require('express');
var app = express();
var hbs = require('hbs');



hbs.registerPartials(__dirname + '/views/partials');



// where to look for views, which file
app.set('views', __dirname + '/views');




// lets express know they're hbs files, try to find variable instead of error when seeing a curly brace.
app.set('view engine', 'hbs');




// res.render for all of our apps. google this term. use res.render as long as ('blah') has a .hbs file. i.e. blah.hbs, random_name.hbs
app.get('/', (req, res, next) => {
  
  let data = {name: "bob", secretWord: "neptune"}
  // database style let data = db.animals.find() - tomorrow

  if(data.secretWord === 'neptune'){
    data.isSecret = true
  }
  
  // views should have as little logic as possible. They should ONLY show what was chosen out of the logic tree.
  
  res.render('blah', {name: "bob", secretWord: "neptune"});
});
//res.render passes in variables into the hbs file.
// 2 arguments, 1st arg string - tells which file to render

// name in variable in .hbs file is = to key in the object in the app.js file in res.render section.
// 2nd arg is an object - 
// ALWAYS LIKE ABOVE 

app.get('/animals', (req, res, next) =>{

    let data = {list: ['dog', 'cat', 't-rex', 'crocodile', 'pangolin', 'scallop', 'crow']}


    res.render('animals', data)
})


app.get('/cars', (req, res, next) => {
  let data = {}
  let blah = [
        {make: "BMW", model: "X3", hp: "300+", gasMileage: "not great"}
        {make: "Mercedes", model: "E Class", hp: "250+", gasMileage: "not great"}
        {make: "Nissan", model: "Leaf", hp: "not much", gasMileage: "a/a"}
        {make: "Acura", model: "TL", hp: "300+", gasMileage: "decent"}
        {make: "Jeep", model: "Wrangler", hp: "240", gasMileage: "horrific"}
        {make: "Cadillac", model: "Escalade", hp: "400+", gasMileage: "gallons per mile"}
        {make: "Honda", model: "Civic", hp: "110", gasMileage: "37"}

  ]



        data.cars = blah

        res.render('cars', data)

        
})












app.listen(3000);
