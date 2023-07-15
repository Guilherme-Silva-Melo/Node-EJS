const express = require('express')
const app = express()

app.set("view engine","ejs")

app.get("/",function(req,res){
    const itens = [
        {
            title:'E',
            messege: 'EJS para renderizar HTML'
        },
        {
            title:'A',
            messege: 'Adodorei utilizar tal pacote'
        },
        {
            title:'S',
            messege: 'Super facil de usar'  
        },
        {
            title:'Y',
            messege: 'Y LOVE NODE+EJS'
        }
    ]

    const subtitle = 'Estudo de EJS para a renderização de HTML utilizando JavaScript'
    res.render("pages/index",{qualities: itens, subtitle: subtitle});
})

app.get("/about",function(req,res){
    res.render("pages/about")
})




app.listen(8080)
console.log("RODANDO")
