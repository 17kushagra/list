const clkme= document.getElementById('submitbtn');



clkme.addEventListener('click', (e) => {
    e.preventDefault()
    
    let today = new Date();
    let date = String(today.getDate()+'-'+   (today.getMonth()+1)+'-'+today.getFullYear() );
    console.log(date);
    const text = document.getElementById('txtarea').value;
    console.log(text)
    const li = document.createElement('li');
    console.log(li)
    li.innerText=text+"("+date+")";
    console.log(li);
    const pp = document.getElementsByClassName('parent');
    pp[0].appendChild(li);
     
    

    
     })



     