//require express
const { request } = require('express');
const express = require('express');
//allows you to easily use express methods
const app = express();
const PORT = 8000;

const cats = {
    '21 savage': {
        'age': 29,
        'birthName': 'Sheyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },
    'chance the cat':{
        'age': 29,
        'birthName': 'Chancelor Bennett',
        'birthLocation': 'Chicago, Illinois'
    },
    'unknown':{
        'age': 0,
        'birthName': 'unknown',
        'birthLocation': 'unknown'
    }
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