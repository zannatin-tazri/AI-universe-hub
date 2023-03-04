const loadDetails=()=>{
    const url=`https://openapi.programming-hero.com/api/ai/tool/01`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>console.log(data));
}
