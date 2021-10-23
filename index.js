const express =require('express');
const cors = require('cors');
app.use(cors());
const app= express();
const port=5000;
app.get('/',(req,res)=>{
    res.send('wow!!! siblu ttt 55 this Hello form my second node express');
});
const users=[
        {id:0, name:'tanvir',email:'tanvir@gmail.com',Phone:'017111111111'},
        {id:1, name:'osman',email:'osman@gmail.com',Phone:'017111111111'},
        {id:3, name:'mukta',email:'mukta@gmail.com',Phone:'017111111111'},
        {id:4, name:'umaia',email:'umaia@gmail.com',Phone:'017111111111'},
        {id:4, name:'tasfia',email:'tasfia@gmail.com',Phone:'017111111111'},
        {id:4, name:'ayesha',email:'ayesha@gmail.com',Phone:'017111111111'},
    
]
app.get('/users',(req,res)=>{
  const search=req.query.search;
  if(search){
const searchResult=users.fillter(user=> user.name.toLocaleLowerCase().includes(search));
res.send(searchResult);
  }
  else{
    res.send(users);
  }

});
app.get('/users/:id',(req,res)=>{
const  id =res.params.id;
  const user=users[id];
  res.send(user);
});
app.get('/fruits',(req,res)=>{
  res.send(['mango','apple','para']);
})
app.get('/fruits/mango/fazli',(req,res)=>{
  res.send('yami yami ore tok');
})
app.listen(port,()=>{
    console.log('litening to my port',port)
})