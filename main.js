document.getElementById('info-img').addEventListener('click', (e) =>{
    if(document.getElementById('info-dialog').style.display == 'none')
    {
        document.getElementById('info-dialog').style.display = 'block';
        document.getElementById('info-txt').style.display = 'none';        
    }
    else
    {
        document.getElementById('info-dialog').style.display = 'none';
        document.getElementById('info-txt').style.display = 'block';
    }
})


document.getElementById('click-btn').addEventListener('click', (e) =>{
   
    document.getElementById('splash-bg').style.display = 'none';
    document.getElementById('mainbg').style.display = 'block';
})

document.getElementById('start-virtual-garden').addEventListener('click', (e) =>{
   
    document.getElementById('mainbg').style.display = 'none';
    document.getElementById('vr-bg').style.display = 'block';
})
