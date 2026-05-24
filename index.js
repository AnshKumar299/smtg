import express  from 'express';
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
  return res.json({msg:"'Hello from Server vers3. If this works, it means that the CI/CD pipeline is working correctly and the new version of the server has been deployed successfully."});
});

app.listen(PORT,"0.0.0.0", () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
