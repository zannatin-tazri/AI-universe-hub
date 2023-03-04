const showAllData=()=>{
    fetch('https://openapi.programming-hero.com/api/ai/tools')
    .then(response=>response.json())
    .then(data=>displayAiUniverse(data.data.tools))
    
    };
  const  displayAiUniverse2 = () =>{
    displayAiUniverse();
    
  }
