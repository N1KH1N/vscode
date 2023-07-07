// var request=new XMLHttpRequest()
// request.open('get','https://fakestoreapi.com/products')
// request.send()

// request.onreadystatechange=()=>{
//     if(request.readyState==4){
//         if(request.status>199 && request.status<300){
//             let data=JSON.parse(request.responseText)
//             console.log(data);
//         }
//     }
// }

fetch("https://fakestoreapi.com/products").then(res=>res.json()).then(data=>displayAllProducts(data))
function displayAllProducts(data){
    let htmlData=``
    for(let p of data){
        htmlData+=`
        <div class="col-3">
        <div class="card" style="width: 18rem;">
    <img src="${p.image}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${p.title}</h5>
    <p class="card-text">${p.description}</p>
    </div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">${p.category}</li>
    <li class="list-group-item">${p.price}</li>
    <li class="list-group-item">${p.rating.rate}</li>
    </ul>
    <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
    </div>
</div>
        `
    }

    document.querySelector("#id_result").innerHTML=htmlData
}

function filterProductsByCategory(category){
    let cat=""
    if(category==1){
        cat="electronics"
    }

    else if(category==2){
        cat="jewelery"
    }

    else if(category==3){
        cat="men's clothing"
    }

    else if(category==4){
        cat="women's clothing"
    }

    fetch(`https://fakestoreapi.com/products/category/${cat}`).then(res=>res.json()).then(data=>console.log(data))
}


