const express = require('express');
const taskRouterMiddleware = require('./routes/taskRouter');
const bodyParser = require('body-parser');

const app = express();
const port = 8000;

app.use('/api', bodyParser.json());
app.use('/api', taskRouterMiddleware);

app.get('/api/test', (req, res) => {
  console.log(req.body);
  res.json('Bitch Iam Listening');
});

app.listen(8000, () => {
  console.log('Listening');
});
