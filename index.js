let grocery = document.getElementById('grocery');
grocery.addEventListener('submit', addItem);

function addItem(e){
    e.preventDefault();
    let data = this.elements.writeList.value;
    let list = document.querySelector('ol');
    let Item = document.createElement('li');
    let text = document.createElement('p');


    text.textContent = data;
    this.elements.writeList.value= "";
    Item.append(text);
    list.append(Item);

    let rmvBtn = document.createElement('span');
    rmvBtn.classList.add('remove');
    Item.append(rmvBtn);
    rmvBtn.addEventListener('click' , deleteItem);
    Item.addEventListener('click' , doneItem );


}

function deleteItem(e){
    this.parentElement.remove();
}

function doneItem(e){
    this.classList.toggle('done');
}