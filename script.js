function highlight(){
    let text = document.getElementById('search-txt');
    let search = document.querySelector('.search-bar').value;

    if(search !== "")
    {
        let regExp = new RegExp(search, 'gi');
        text.innerHTML = text.textContent.replace(regExp, "<mark>$&</mark>")
    }
}