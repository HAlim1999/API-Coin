let tabla = document.getElementById('tabla')



fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
.then(response=>response.json())
.then(data=>{
    

    for(let i=0; i<data.length;i++){
        
        
        let tr = document.createElement('tr');
        tr.classList='table-dark';
        let td = document.createElement('td');
        td.classList="table-dark"
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        td3.classList="table-dark"
        let td4 = document.createElement('td');
        td4.classList="table-dark"
        let td5= document.createElement('td');
        td5.classList="table-dark"
        let td6 = document.createElement('td');
        td6.classList="table-dark"
        let td7= document.createElement('td');
        td7.classList="table-dark"
        let td8 = document.createElement('td');
        td8.classList="table-dark"
        url=data[i]['image']


        td.innerHTML = data[i]['market_cap_rank']
        td2.innerHTML = `<img src="${url}" alt="" width= 20rem>`
        td3.innerHTML = data[i]['name']
        td4.innerHTML = data[i]['symbol']
        td5.innerHTML = (data[i]['current_price']).toFixed(2)
        td6.innerHTML = (data[i]['price_change_24h']).toFixed(2)
        td7.innerHTML = (data[i]['market_cap_change_24h']).toFixed(2)
        td8.innerHTML = (data[i]['market_cap']).toFixed(2)

        tr.appendChild(td)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)
        tr.appendChild(td5)
        tr.appendChild(td6)
        tr.appendChild(td7)
        tr.appendChild(td8)

        tabla.appendChild(tr)
    }})
.catch(err=>console.log(err))
