let tabla = document.getElementById('tabla')


fetch('https://api.coingecko.com/api/v3/exchanges')
.then(response=>response.json())
.then(data=>{
    
    for(let i=0; i<data.length;i++){
        
        
        let tr = document.createElement('tr');
        tr.classList='table-dark';
        let td = document.createElement('td');
        td.classList="table-dark"
        let td2 = document.createElement('td');
        td2.classList="table-dark"
        let td3 = document.createElement('td');
        td3.classList="table-dark"
        let td4 = document.createElement('td');
        td4.classList="table-dark"
        let td5= document.createElement('td');
        td5.classList="table-dark"

        url=data[i]['image']
        web = data[i]['url']


        td.innerHTML = data[i]['country']
        td2.innerHTML = `<img src="${url}" alt="" width= 20rem>`
        td3.innerHTML = data[i]['name']
        td4.innerHTML = data[i]['year_established']
        td5.innerHTML = `<a href="${web}">WEB</a>`

        tr.appendChild(td)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)
        tr.appendChild(td5)


        tabla.appendChild(tr)
    }})
.catch(err=>console.log(err))