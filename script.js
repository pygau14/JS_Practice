const mainDiv  = document.getElementById('replyContainer');
function displayReply(){
    const reply  = document.getElementById('mainReply').value;

    const para = document.createElement('p');
    para.innerText = reply;
    para.style.fontSize = '24px';
    para.style.marginLeft = '20px';

    mainDiv.appendChild(para);

}