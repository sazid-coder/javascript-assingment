// const img = document.getElementsByTagName('img');
// for(const imgs of img){
//     imgs.classList.add('w-full');
// }

document.getElementById('btn-donation').addEventListener('click', function(){
    hidden_section('donation-section');
    document.getElementById('btn-donation').classList.add('bg-green-500');
    document.getElementById('btn-donation').classList.remove('border');
    document.getElementById('btn-history').classList.remove('bg-green-500');
    document.getElementById('btn-history').classList.add('border');
});
document.getElementById('btn-history').addEventListener('click', function(){
    hidden_section('histry-section');
    document.getElementById('btn-history').classList.add('bg-green-500');
    document.getElementById('btn-history').classList.remove('border');
    document.getElementById('btn-donation').classList.remove('bg-green-500');
    document.getElementById('btn-donation').classList.add('border');
});

document.getElementById('btn-donate1').addEventListener('click', function(){
    const amount = getValue('amount1');
    const mainTk = getTextValue('mainTk');
    if(amount > 0 && mainTk >= amount){
        const noakhali = getTextValue('noakhali');
        const updateTk = amount + noakhali;
        const updateMainTk = mainTk - amount;
        document.getElementById('noakhali').innerText = updateTk;
        document.getElementById('mainTk').innerText = updateMainTk;


        // history
        let timess = new Date();
        console.log(timess);

        const history = document.getElementById('histry-section');
        const section = document.createElement('section');
        section.innerHTML = `
            <div class="p-8 border border-inherit rounded-xl mt-5">
                <h3 class="font-bold mb-5">${amount} Taka is Donated for famine-2024 at Noakhali, Bangladesh</h3>
                <p>${timess}</p>
            </div>
        `;
        history.appendChild(section);
        document.getElementById('popup').classList.remove('hidden');
    }else{
        alert('please type a valid number');
    }
})

document.getElementById('btn-donate2').addEventListener('click', function(){
    const amount = getValue('amount2');
    const mainTk = getTextValue('mainTk');
    if(amount > 0 && mainTk >= amount){
        const feni = getTextValue('feni');
        const updateTk = amount + feni;
        const updateMainTk = mainTk - amount;
        document.getElementById('feni').innerText = updateTk;
        document.getElementById('mainTk').innerText = updateMainTk;

        // history
        let timess = new Date();
        console.log(timess);

        const history = document.getElementById('histry-section');
        const section = document.createElement('section');
        section.innerHTML = `
            <div class="p-8 border border-inherit rounded-xl mt-5">
                <h3 class="font-bold mb-5">${amount} Taka is Donated for famine-2024 at Feni, Bangladesh</h3>
                <p>${timess}</p>
            </div>
        `;
        history.appendChild(section);
        document.getElementById('popup').classList.remove('hidden');
    }else{
        alert('please type a valid number');
    }
})

document.getElementById('btn-donate3').addEventListener('click', function(){
    const amount = getValue('amount3');
    const mainTk = getTextValue('mainTk');
    if(amount > 0 && mainTk >= amount){
        const quota = getTextValue('quota');
        const updateTk = amount + quota;
        const updateMainTk = mainTk - amount;
        document.getElementById('quota').innerText = updateTk;
        document.getElementById('mainTk').innerText = updateMainTk;

        // history
        let timess = new Date();
        console.log(timess);

        const history = document.getElementById('histry-section');
        const section = document.createElement('section');
        section.innerHTML = `
            <div class="p-8 border border-inherit rounded-xl mt-5">
                <h3 class="font-bold mb-5">${amount} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h3>
                <p>${timess}</p>
            </div>
        `;
        history.appendChild(section);
        document.getElementById('popup').classList.remove('hidden');
    }else{
        alert('please type a valid number');
    }
})



document.getElementById('close_popup').addEventListener('click', function(){
    document.getElementById('popup').classList.add('hidden');
})

document.getElementById('blog').addEventListener('click', function(){
    location.replace("blog.html");
})





