import express  from 'express';
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
  return res.json({msg:"'Hello from Server"});
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
