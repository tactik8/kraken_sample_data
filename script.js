import { sample_data } from './kraken_sample_data/kraken_sample_data.js'



const randomUser = sample_data.person();
console.log(JSON.stringify(randomUser, null, 4));

const randomProduct = sample_data.product();
console.log(JSON.stringify(randomProduct, null, 4));

console.log('bob')
const randomReview = sample_data.review();
console.log("a", JSON.stringify(randomReview, null, 4));


function getTypes(){

    return Object.keys(sample_data)
    
}


function initPage(){

    let div = document.getElementById('test1')

    div.appendChild(getSelectTypeField())
    div.appendChild(getNumberField())

    let divResult = document.getElementById('test2')

    let preResult = document.createElement('pre')
    preResult.id = 'pre3'
    divResult.appendChild(preResult)

    
}


function getSelectTypeField(){


    let options = []
    for (let t of getTypes()){
        options.push(` <option value="${t}">${t}</option>`)
    }

    
    let html = `<select id="record_type" class="form-select" aria-label="Default select example">
      <option selected></option>
     ${options.join('')}
    </select>`

    let wrapper = document.createElement('div')
    wrapper.innerHTML = html

    let element = wrapper.firstChild

    element.addEventListener('change', (event) => {

        getData()
    })

    return element
    
}



function getNumberField(){


    let options = []
    for (let t of getTypes()){
        options.push(` <option value="${t}">${t}</option>`)
    }


    let html = `<input type="number" class="form-control" id="quantity"  value=1>`

    let wrapper = document.createElement('div')
    wrapper.innerHTML = html

    let element = wrapper.firstChild

    element.addEventListener('change', (event) => {

        getData()

    })
    return element

}


function getData(){


    let qtyElement = document.getElementById('quantity')
    let qty = qtyElement.value
    let typeElement = document.getElementById('record_type')
    let record_type = typeElement.value
    
    let records = generateRecords(record_type, qty)
    displayRecords(records)

}


function generateRecords(record_type, quantity){

    console.log('q', quantity)
    let records = []
    for (let i=0; i< Number(quantity); i++){
        records.push(sample_data[record_type]())
    }
    return records
}


function displayRecords(records){


    
    let div = document.getElementById('pre3')

    console.log(records)
    div.textContent = JSON.stringify(records, undefined, 4)


    div.addEventListener('click', (event) => {

        navigator.clipboard.writeText(JSON.stringify(records, undefined, 4));
        
    })

    
}



initPage()



