function callAjax(url, el){
    req = new XMLHttpRequest();
    req.open("POST", url, false);
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    req.send(null);
    if(req.status === 200){
        
    }
}

window.onload = () => {
    var el = document.querySelector('textarea');
    var id = document.querySelector('input').value;
    var btn = document.querySelector('button');
    btn.addEventListener('click', () => {
        callAjax(`?action=download&id=${id}`);
    });
}
