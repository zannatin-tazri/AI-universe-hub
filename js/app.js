// Loading Data
const loadAI = async () => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`;
    const res = await fetch(url);
    const data = await res.json();
    displayAiUniverse(data.data.tools.slice(0,6));
}

// Displaying Data
const displayAiUniverse = (tools) => {
  
    console.log(tools);
    const aiContainer = document.getElementById('ai-container');
    aiContainer.innerHTML="";
    tools.forEach(tool => {
        const aiDiv = document.createElement('div');
        aiDiv.classList.add('col');
        aiDiv.innerHTML = `
                      <div class="card h-100 p-4">
                        <img src="${tool.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                          <h5 class="card-title">Features</h5>
                          <p class="card-text">1. ${tool.features[0]} <br>
                          2. ${tool.features[1]} <br>
                          3. ${tool.features[2]}
                          </p>
                          <hr>
                          <div class="d-flex justify-content-between">
                          <h3>${tool.name}</h3>
                          <button onclick="fetchNewDetail('${tool.id}')" class="btn btn-light border border-0 btn-details" data-bs-toggle="modal" data-bs-target="#aiDetailModal"><i class="fa-solid fa-arrow-right"></i></button>
                          </div>
                          <div>
                          <p><i class="fa-solid fa-calendar-days"></i> ${tool.published_in}</p>
                          </div>  
                        </div>
                      </div>
        `;
        aiContainer.appendChild(aiDiv); 
        
    });
}



// Spinner section
document.getElementById('btn-see-more').addEventListener('click',function(){
  toggleSpinner(true);
  })

const toggleSpinner=isLoading=>{
  const loaderSection=document.getElementById('loader');
  if(isLoading){
    loaderSection.classList.remove('d-none');
  }
  
  else if(isLoading){
    loaderSection.classList.add('d-none');
  }  
  document.getElementById('see-more').classList.add('d-none');
}
// spinner section ends

// See Details section
const fetchNewDetail=id=>{
  let url=` https://openapi.programming-hero.com/api/ai/tool/${id}`
  fetch(url).then(res=>res.json()).then(data=>displayAiDetails(data))
}

const displayAiDetails= tool=>{
  console.log(tool);
  document.getElementById("modal-body").innerHTML=`
    <div class="d-flex">
    <div class="card w-75 mb-3">
  <div class="card-body">
    <h6 class="card-title">${tool.data.description}</h6>
    <p class="card-text">
    <div class="d-flex text-center ">
    <div class="m-1 p-1 border border-primary-subtle">
    <span class="text-break">${tool.data.pricing[0].price}</span><br>
    <span >${tool.data.pricing[0].plan}</span>
    </div>
    <div class="m-0 p-1 border border-primary-subtle>
    <span class="text-break">${tool.data.pricing[1].price}</span><br>
    <span >${tool.data.pricing[1].plan}</span>

    </div>
    <div class="m-1 p-1 border border-primary-subtle radius>
    <span class="text-break">${tool.data.pricing[2].price}</span><br>
    <span class="text-break">${tool.data.pricing[2].plan}</span>
    </div>
    </div>
    </p>
    
    <div class="d-flex justify-content-between">
    <div>
    <h4>Features</h4>
    <p>${tool.data.features[1].feature_name}</p>
    <p>${tool.data.features[2].feature_name}</p>
    <p>${tool.data.features[3].feature_name}</p>    

    </div>
    <div>
    <h4>Integrations</h4>
    <p>${tool.data.integrations[0]}</p>
    <p>${tool.data.integrations[1]}</p>
    <p>${tool.data.integrations[2]}</p>
    
    
    </div>
    </div>
  </div>
</div>

<div class="card" style="width: 18rem;">
  <img src="${tool.data.image_link[0]}" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">${tool.data.input_output_examples[0].input}</p>
    <p class="card-text">${tool.data.input_output_examples[0].output}</p>
  </div>
</div>
    
    </div>
    
    `;

    document.getElementById('accuracy').innerHTML=`
    <span>${tool.data.accuracy.score}</span>
    `;
}
// See details section ends


// Calling function
loadAI();


