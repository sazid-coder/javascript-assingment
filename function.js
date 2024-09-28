function getValue(id){
    const amount = document.getElementById(id).value;
    const amountNumber = parseInt(amount);
    return amountNumber;
}


function getTextValue(id){
    const amount = document.getElementById(id).innerText;
    const amountNumber = parseInt(amount);
    return amountNumber;
}

function hidden_section(id){
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('histry-section').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}


// function btn_style(id){
//     document.getElementById('btn-donation').classList.remove('bg-green-500', 'border');
//     document.getElementById('btn-history').classList.remove('bg-green-500', 'border');


//     document.getElementById(id).classList.add('bg-green-500', 'border');


    

// }