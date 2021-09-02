    // spinner & errormessege ID 
document.getElementById('spinner').style.display='none'
document.getElementById('errorMessege').style.display='none'

// connection to click handaler
const clicbutton = ()=>{
    const inputText =document.getElementById('inputText');
    const inputTextValue = inputText.value ;
    inputText.value='';
    
    //  Conditions of error massege 
    if(inputTextValue =='' ){     
        errorHandal()   
    }
    else{
        document.getElementById('spinner').style.display='block'
        document.getElementById('errorMessege').style.display='none'
        const url = `https://openlibrary.org/search.json?q=${inputTextValue}`
    fetch(url)
    .then(res => res.json())
    .then(data => searchForResult(data.docs, data.numFound))
     
    } 
}

const errorHandal = ()=>{ 
document.getElementById('errorMessege').style.display="block";
}

// catch of the Id
const searchForResult =(itemAll,datas)  => {
    const items = itemAll;
    document.getElementById('spinner').style.display='none'
    document.getElementById('totalBook').innerHTML= `<h3>Books: ${datas}</h3>`;
    const containerDiv =document.getElementById('containerDiv')
    containerDiv.innerHTML='';

    // loop with forEach
        items.forEach( item => {
            const div =document.createElement('div')
            div.classList.add('col')
            div.innerHTML=` 
            <div class="card h-100 shadow p-3 mb-5 rounded-2">
            <img  src="https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Title: ${item.title}</h5>
              <h6 class="card-text">Author: ${item.author_name}</h6>
              <h6 class="card-text">First publihs: ${item.first_publish_year}</h6>
            </div>
          </div>
          `;
          containerDiv.appendChild(div)
            
        })   
}

