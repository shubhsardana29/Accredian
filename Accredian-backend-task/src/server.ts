import app from "./app";

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Server is up and running!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
