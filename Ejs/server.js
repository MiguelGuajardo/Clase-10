const express = require("express")
const app = express()

/* --Establezco el motor de plantilla-- */
app.set("view engine", "ejs");
/* --Establezco directorio de la plantilla-- */
app.set("views", "./views");
app.use(express.urlencoded({ extended: true }));

//----------------------------------

let products = [];
let id = 0;

app.post("/", (req, res) => {
    let product = { ...req.body, id: ++id };
    products.push(product);
    res.redirect("/products");
  });
  
  app.get("/", (req, res) => {
    res.render("form");
  });
  
  app.get("/products", (req, res) => {
    const existProduct = products.length > 0 ? true : false;
    res.render("list", { products: products, existProduct });
  });
  
  //--------------------------------
  
  const PORT = 8080;
  
  const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
  });
  server.on("error", (error) => console.log(`Error en servidor ${error}`));
  