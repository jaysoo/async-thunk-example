import * as express from 'express';

const app = express();

let apiValue = 0;

app.get('/api', (req, res) => {
  res.send({ message: 'Hello' });
});

// Add some delay to our response to simulate reading from DB and network latency.
function delay() {
  return new Promise(res => setTimeout(res, Math.random() * 1000));
}

app.get('/api/counter', async (req, res) => {
  await delay();
  res.send({ value: apiValue });
});

app.post('/api/increment', async (req, res) => {
  const updated = ++apiValue;
  await delay();
  res.send({ value: updated });
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
