import express  from 'express';
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
  return res.json({msg:"'Hello from Server vers2"});
});

app.listen(PORT,"0.0.0.0", () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
