// without server
//상품 이미지와 텍스트 가져오기 -- No Server But Local



function loadItems()
{
    return fetch('data/data.json')
    .then(response => response.json())
    .then(data => data.items);
}
function displayItems(items)
{
    let container = document.querySelector(".items"); //not items
    console.log(container)
    container.innerHTML = items.map((item) => createHTMLString(item)).join('');
}

function createHTMLString(item)
{
    return ` 
    <li class= "item">
        <img src=${item.image} alt=${item.type}>
        <span class= "description" >${item.gender}, ${item.size} size</span>
    </li>`
}

//main
loadItems()
.then( (items) => {
    displayItems(items);
    //setEventListner(items);
})
.catch(console.log)

/*
// sort by type and color 
function setEventListner(items)
{
    let buttons = document.getElementsByTagName("ul")[0].getElementsByTagName("button");
    buttons[0].onclick = function() {dpItembyColor("blue")};
    buttons[1].onclick = function() {dpItembyColor("yellow")};
    buttons[2].onclick = function() {dpItembyColor("pink")};
}

class Item
{
    constructor(type,color){
        this.type = type
        this.color = color
    }
}

function createItemObjects()
{
    let itemObjects = [];
    let color;
    let type;

    for(let i = 0; i < files.length; i++)
    {
        let desc = files[i].split('/')[3].split('.')[0].split('_');

        if ( desc[0] === "pink") {color = "pink";}
        else if(desc[0] === "blue") {color = "blue";}
        else if(desc[0] === "yellow") {color = "yellow";}

        if (desc[1] === 'p'){type = 'p';}
        else if(desc[1] === 's'){type = 's'}
        else if(desc[1] === 't'){type = 't'}

        //console.log("type", type, "color", color);
        let item = new Item(type, color);
        itemObjects.push(item);
    }
    return itemObjects;
}

displayItems();

function displayItems(itemsList= undefined)
{ 
    let itemslist;

    //null일 때
    if(itemsList == undefined)
    {
        itemslist = fileAndtext(files, texts);
        console.log("itemslist is null");
    }
    else{
        let olditems = document.getElementsByClassName("items")[0];
        console.log("olditems", olditems[0]);

        while(olditems.firstChild)
        {
            console.log("true");
            olditems.removeChild(olditems.firstChild)
        }

        itemslist = itemsList;
        console.log("itemslist", itemslist )
    }
    //display
    for(let i = 0; i < itemslist.length; i++)
    {
        let filePath = itemslist[i][0];
        let img = document.createElement('img');
        img.src = filePath;

        //상품 목록 생성하기 
        let item = document.createElement("div");
        item.className = "item";
        let left = document.createElement("div");
        left.className = "left";
        let right = document.createElement("div");
        right.className = "right";
        let li = document.createElement("li");
        let text = document.createTextNode(itemslist[i%texts.length][1]);

        li.appendChild(text);
        left.appendChild(img);
        right.appendChild(li);

        item.appendChild(left);
        item.appendChild(right);

        //이미지 동적 생성
        let items = document.getElementsByClassName("items");
        //console.log("items", items);
        items[0].appendChild(item);
    }
}

let buttons = document.getElementsByTagName("ul")[0].getElementsByTagName("button");
buttons[0].onclick = function() {dpItembyColor("blue")};
buttons[1].onclick = function() {dpItembyColor("yellow")};
buttons[2].onclick = function() {dpItembyColor("pink")};

function dpItembyColor(color){
    
    let itemObjects = createItemObjects();
    console.log(itemObjects)
    let items = [];

    if(color != null)
    {
        //console.log("color", color);
        itemObjects.forEach((item, index) => {
            console.log(item.color)
            if(item.color === color){
                
                items.push([files[index], texts[index % (texts.length)]])
            }
        })
    }
    displayItems(items);
}

function fileAndtext(files, texts){
    let items = [];

    for(let i=0; i < files.length; i++)
    {
        //console.log([files[i], texts[i]]);
        items.push([files[i], texts[i]])
    }
    return items;
}*/







