var itemArr =[]
function addItem(){
    // alert("hello")
    var itemObj ={
        myItem: itemName.value,
        myPrice: "#"+itemPrice.value
    }
    if (itemName.value!="" && itemPrice!="") {
        itemArr.push(itemObj)
        console.log(itemArr);
        displayItems()
        
    }else{
        document.getElementById("showEmptyErrorMessage").style.display="block"
    }
}

function displayItems(){
    document.getElementById("showEmptyErrorMessage").style.display="none"
    document.getElementById("noItemRegistered").style.display="none"
    itemTable.innerHTML=`
    <tr>
    <th>S/N</th>
    <th>Item Name</th>
    <th>Item Price</th>
    <th>Action</th>
    </tr>
    `
    for (let index = 0; index < itemArr.length; index++) {
        itemTable.innerHTML+=`
        <tr>
        <td>${[index+1]}</td>
        <td>${itemArr[index].myItem}</td>
        <td>${itemArr[index].myPrice}</td>
        <td><button class="btn btn-warning mx-2" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="editItem(${index})">Edit item</button><button class="btn btn-danger" onclick="deleteItem(${index})">Delete item</button></td>
        </tr>
        
        `  
    }

}

function editItem(i){
    // var newItem = editedItem.value
    // var newPrice = editedPrice.value
    var itemObj={
        myItem: editedItem.value,
        myPrice: editedPrice.value,

    }
    itemArr.splice(i,1,itemObj)
    displayItems()

}



function deleteItem(j){
    itemArr.splice(j,1)
    displayItems()
    
}

