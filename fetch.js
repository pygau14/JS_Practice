async function show(){
    await fetch('https://api.jsonbin.io/v3/b/6459232f9d312622a35a2c53').then((res)=>{
        res.json();
    }).then((data)=>{
        console.log(data);
    }).catch((e)=>{
        console.log(error);
    })



}