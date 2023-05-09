async function button_call(){
    //body - doicument.body
    //head - document.head
    
    // document.getElementsByClassName
    // document.getElementsByTagName


    const h1 = document.getElementById('main_heading');
    //console.log(h1);
    //innertext is text written between html tag
    h1.innerText = "DOM Manipulation... ";

    // acessing the input value which is written by user
    const inp1 = document.getElementById('inp_details').value;
    // console.log(inp1);
    // console.log(typeof(inp1))
    document.getElementById('heading_2').innerText = "hello "+inp1 + "!";

    // creating a new element 
    const newheading = document.createElement('h5');
    newheading.innerText = "this is new element created";
    //setting the attribute
    newheading.setAttribute("id", "new_heading");
    newheading.setAttribute("class","new_heading_class");
    // if you want get an attribute 
   


    //shorthand for this 
    // const image1ELE = document.getElementById('image_1');
    // const src1 = image1ELE.getAttribute("src");
    // image1ELE.setAttribute('src',document.getElementById('image_2').getAttribute('src'));
    // document.getElementById('image_2').setAttribute('src',src1)



    //append or add it to current DOM
    //document.getElementById('parent_div').appendChild(newheading);


    // if not adding to the div
    document.body.appendChild(newheading);

    // if I want to change the CSS.
    // document.body.style.backgroundColor = "black";
    // document.getElementById('main_heading').style.color = "white";


    // another method to add an event listener - mostly industry practiced method
    const lastHeading = document.getElementById('last_heading');

    // arrow functions - when we dont want to define it name and mostly it will not have any use cases in later part of the project.
    // fucntions shorthand , ES6 , also mostly used when we are fetching data using API in front end. 
    // ()=> {
    // return
    // }

    // function fucntion_name(){
    // return 
    // }
    // lastHeading.addEventListener('mouseout' , ()=>{
        
    // });

    // element.addEventListener('event_type','function or arrow fucntion');
    // event type  = click , drag , drop , mouserover , mouserout , mousewheelup etc.. ..
    // functions or arrow functions - this is the task which will be performed after the event is listened. 


    const response = await fetch('https://api.jsonbin.io/v3/b/64591ec18e4aa6225e98f4bc').then((res)=>{
        const result = res.json();
        return result;
    });

    console.log(result);

    
}

// function drag_call(){
//      //get attribute 
//      const image1ELE = document.getElementById('image_1');
//      const src1 = image1ELE.getAttribute("src");
//      const image2ELE = document.getElementById('image_2');
//      const src2 = image2ELE.getAttribute("src");
 
//      image1ELE.setAttribute("src",src2);
//      image2ELE.setAttribute('src',src1);
// }

// function hover_call(){
//     document.getElementById('last_heading').style.opacity = 1;
// }


