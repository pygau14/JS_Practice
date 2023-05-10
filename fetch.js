// URl - https://api.npoint.io/aee14bc5a3f1e5ac2c7d
// object - 
// {
//     "name": "Handcrafted Trees Mug",
//     "slug": "Handcrafted-Trees-Mug",
//     "tags": [
//       "Trees"
//     ],
//     "added": 1485723766805,
//     "price": 10.99,
//     "filename": "400_002e1ecb8bd2.jpg",
//     "imageUrl": "http://www.resplashed.com/img/400_002e1ecb8bd2.jpg",
//     "itemType": "mug",
//     "imageHash": "2b1d5b5ef4b37b4f5d0dccade1b69987",
//     "productImg": "mug-400_002e1ecb8bd2.jpg",
//     "description": "enim corporis voluptatibus laudantium possimus alias dolorem voluptatem similique aut aliquam voluptatem voluptatem omnis id consequatur",
//     "imageCredit": {
//       "link": "http://www.resplashed.com/photographer/martin_wessely/",
//       "artist": "Martin Wessely"
//     },
//     "manufacturer": "OHara-Group"
//   }
// USE 
// when we data in frontend - we use fetch - built in functions - handle API's 
// API's - URL - which points to the data in backend.


// fetch(URL, function ())

// fetch another syntax - 
// fetch(URL).then(()=>{
    //fucntion when promise is ful filled || data retrive 
// }).catch(()=>{
    // function when promise is not fulfilled || data is not there
// })

// async -await -> fetch krke , it will retrieve , it will take time so we want code to wait for sometime.



 //your task -> // DOm manipulation - name , imageurl -> 

 // fetch is promise in js - 
 // promise fulfill - complete - data retrieve kr lega 
 // promise will not full fill - error - data 

 async function show(){
    
    await fetch(' https://api.npoint.io/aee14bc5a3f1e5ac2c7d').then((res)=>{//res is an argument so when fetch will retrieve the data , it will automatically store the data in this varible named res.
        return res.json(); // json is an inbuilt function to make the response as json compatible for  Javascript,
    }).then((data)=>{ 
        console.log('second then block') // this 'then' block is used so that I can print the data received from backend.
         // data variable is used for storing the output of ist then block.

        addList(data);
    }).catch((err)=>{
        console.log(err);
    })
 }

 function addList(data){
    const parentDiv  = document.getElementById('product_div');

    for(let i=0;i<data.length;i++){
        const newDiv = document.createElement('div');
        newDiv.setAttribute('class','div_list');
        newDiv.innerText = data[i].name;
        parentDiv.appendChild(newDiv);
    }
 }


