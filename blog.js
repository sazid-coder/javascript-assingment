const title = document.querySelectorAll('.title');

title.forEach(titles =>{
    const icon = titles.querySelector('.icon');
    const discriptiton = titles.querySelector('.discriptiton');

    titles.addEventListener('click', () =>{
        discriptiton.classList.toggle('hidden');
        icon.classList.toggle('rotate-180');
        
    })

})

document.getElementById('home').addEventListener('click', function(){
    location.replace("index.html");
})