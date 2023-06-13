const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const { userRouter } = require('./Routes');

app.set('view engine', 'jade');

app.use(express.json());
app.use(express.urlencoded());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(`${__dirname}/public`));

app.use('/user', userRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
