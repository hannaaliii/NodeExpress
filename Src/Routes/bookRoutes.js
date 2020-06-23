const express = require('express');
const bookRouter = express.Router();

function book(nav){
    var books = 
[{
    title:'Lord of The Rings',
    author: 'J.R.R.Tolkien',
    gender:'Epic High-Fantasy Novel',
    img: "Ringstrilogyposter.jpg"
},
{
    title:'Paathumayude Aadu',
    author: 'Vaikom Muhammad Basheer',
    gender:'Novel',
    img: "417YWGnX6eL._SX354_BO1,204,203,200_.jpg"
},
{
    title:'Harry Potter',
    author: 'J K Rowling',
    gender:'Fantasy',
    img: "MV5BMjIyZGU4YzUtNDkzYi00ZDRhLTljYzctYTMxMDQ4M2E0Y2YxXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg"
}]
bookRouter.get('/',function (req,res){
    res.render("book",{
        nav,
        title:'Library',books});
});

bookRouter.get('/:id',function(req,res){
    const id = req.params.id
    res.render('book1',{nav,
    title:'Library',book1: books[id]
});
});
return bookRouter;
}
module.exports = book;

