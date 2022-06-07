//require express
const { request } = require('express');
const express = require('express');
//allows you to easily use express methods
const app = express();
//allows server to use local file.
const cors = require('cors');
const PORT = 8000;
app.use(cors())
const cats = {
    1: {
        'name': 'Toby',
        'age': 'Adult',
        'dateOfBirth': 'unknown',
        'sex': 'Female'      
    },
    2:{
        'name': 'Nell',
        'age': 'Kitten',
        'dateOfBirth': '2022-04-13',
        'sex': 'Female'      
    },
    3:{
        'name': 'Edison',
        'age': 'Kitten',
        'dateOfBirth': '2022-04-13',
        'sex': 'Male'      
    },
    4:{
        'name': 'Raymond',
        'age': 'Kitten',
        'dateOfBirth': '2022-04-13',
        'sex': 'Male'      
    },
    5:{
        'name': 'Harry',
        'age': 'Kitten',
        'dateOfBirth': '2022-04-13',
        'sex': 'Male'      
    },
    6:{
        'name': 'Blanche',
        'age': 'Kitten',
        'dateOfBirth': '2022-04-13',
        'sex': 'Female'      
    },
}

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/index.html');
})

app.get('/api', (req,res)=>{
    res.json(cats)
})

app.get('/api/:name', (req,res)=>{
    const catName = req.params.name.toLowerCase()
    if (cats[catName]){
        res.json(cats[catName])  
        console.log(cats[catName].birthName)  
    } else {
        console.log(`Unknown cat ${catName}`)
        res.json(cats['unknown'])
    }
})


app.listen(process.env.PORT || PORT,()=>{
    console.log(`runaway server!!!`)
})