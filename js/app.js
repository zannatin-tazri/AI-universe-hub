const loadAI = async () => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`;
    const res = await fetch(url);
    const data = await res.json();
    displayAiUniverse(data.data.tools);
}

const displayAiUniverse = tools => {
    console.log(tools);
    const aiContainer = document.getElementById('ai-container');
    tools=tools.slice(0,6);
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
                          <button class="btn btn-light border border-0 btn-details"><i class="fa-solid fa-arrow-right"></i></button>
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

loadAI();

document.getElementById('see-more').addEventListener('click',function(){
  toggleSpinner(true);
})

const toggleSpinner=isLoading=>{
  const loaderSection=document.getElementById('loader');
  if(isLoading){
    loaderSection.classList.remove('d-none');
  }
  else{
    loaderSection.classList.add('d-none');
  }

  document.getElementById('see-more').classList.add('d-none');
}

