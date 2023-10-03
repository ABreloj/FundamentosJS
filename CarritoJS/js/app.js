const catalogo=document.querySelector('#lista-cursos');
const table=document.querySelector('#carrito tbody');
const bntVaciar=document.querySelector('#vaciar-carrito');

let carrito=[];

function getProducto(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const item = {}
        const cardParent=e.target.parentElement;
        item.id=e.target.getAttribute('data-id');
        item.name=cardParent.querySelector('h4').innerText;
        item.price=cardParent.querySelector('p span').innerText;
        item.image=cardParent.parentElement.querySelector('img').src;
        item.cantity=1;
        //Verificar existencia de item
        addItem(item);
        
        fillTable();
        
    }
    
}

function cleanTable(){
    table.innerHTML='';
    
}



function addItem(item){
    if(carrito.some(itemCarrito=>itemCarrito.id===item.id)){
        //Incrementar cantidad item
        carrito.forEach(itemCarrito=>{
            if(itemCarrito.id===item.id){
                itemCarrito.cantity++;
            }
        });
    }else{
        carrito.push(item);
    }
}


function createRow(item){
    const row=document.createElement('tr');
    let htmlRow='';
    htmlRow+=`<td><img src="${ item.image }" width="100px"></td>`;
    htmlRow+=`<td>${ item.name }</td>`;
    htmlRow+=`<td>${ item.price }</td>`;
    htmlRow+=`<td>${ item.cantity }</td>`;
    htmlRow+= `<td>
    <button class="btn" data-id="${item.id}">X</button>
    </td>`
    row.innerHTML=htmlRow;
    return row;
}

function fillTable(){
    cleanTable();
    carrito.forEach(itemCarrito=>{
        table.appendChild(createRow(itemCarrito));
    })
}

function delItem(e){
    if(e.target.classList.contains('btn')){
        const id=e.target.getAttribute('data-id');
        carrito=carrito.filter(item=>item.id!==id);
        fillTable();
    }
}

function vaciar(e){
    e.preventDefault();
    cleanTable();
    carrito=[];
}

catalogo.addEventListener('click',getProducto);
bntVaciar.addEventListener('click',vaciar);
table.addEventListener('click',delItem);