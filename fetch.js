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

function show(){
    fetch('https://api.npoint.io/aee14bc5a3f1e5ac2c7d').then((res)=>{
        return res.json(); // json is universal format - applicable to any programming language as we are using js so to make it compatabile with js.
    }).then((data)=>{
        console.log(data);
    }).catch((err)=>{
        console.log(err);
    })
}

 your task -> // DOm manipulation - name , imageurl -> 