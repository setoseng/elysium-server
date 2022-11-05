const express =  require('express');
const app = express();

app.set('view engine', 'ejs')

app.get('/', (req, res) => { 
  res.render('index', { text: "World" });
});

const userRouter = require('./routes/users.js');

app.use('/users', userRouter);

app.listen(3000)
console.log("Now listening on port 3000...");