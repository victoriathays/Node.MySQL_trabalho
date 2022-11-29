const express = require("express");

/*const db = require('./models/db')*/

const products = require('./models/products');
const app  = express();

app.use(express.json());


//LISTAR
app.get("/products", async (req, res) => {

    await products.findAll({
        attributes: ['id', 'name', 'price'],
        order: [['id', 'DESC']]}).then((products) =>{
        return res.json({
            erro: false,
            products
        });
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Nenhum produto encontrado!"
        });
    });

    
});

//VISUALIZAR
//ROTA PARA VISUALIZAR DETALHES DO REGISTRO
app.get("/product/:id", async (req, res) => {
    const { id } = req.params;
   
    await products.findByPk(id)
    .then((product) =>{
        return res.json({
            erro: false,
            product
        });
    }).catch(() =>{
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Nenhum produto encontrado!"
        });
    });
   
});

//CADASTRAR
//Rota com o método post para cadastrar 
app.post("/product", async (req, res) => {
    const { name, price } = req.body;
    

    await products.create(req.body).
    then(() => {
        return res.json({
            
            erro: false,
            mensagem: "Produto cadastrado com sucesso!"
        });
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Produto não cadastrado com sucesso!"
        });
    });    
});


//EDITAR
app.put("/product", async (req, res) => {
    const { id } = req.body;
    await products.update(req.body, {where: {id: id}})
    .then(() =>{
        return res.json({
            erro: false,
            mensagem: "Produto editado com sucesso!"
        });
    }).catch(() =>{
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Produto não editado com sucesso!"
        });
    })
    
});

//APAGAR
app.delete("/product/:id", async (req, res) => {
    const { id } = req.params;

    await products.destroy({where: {id}})
    .then(()=> {
        return res.json({
            erro: false,
            mensagem: "Produto apagado com sucesso!"
        });
    }).catch(()=>{
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Produto não apagado com sucesso!"
        });
    })
   
});

/*app.listen(8080);*/
app.listen(8080, () =>{
    console.log("Servidor iniciado na porta 8080: http://localhost:8080 ")
});