var request=new XMLHttpRequest()
request.open('get','https://jsonplaceholder.typicode.com/users')
request.send()

request.onreadystatechange=()=>{
    if(request.readyState==4){
        if(request.status>199 && request.status<300){
            let data=JSON.parse(request.responseText)
            console.log(data);
        }
    }
}
