async function loadFunction(number){
    for(let i = number+1; i<=10; i++){
        let id = "item" + i;
        let modalid = "imageModal" + i;
        document.getElementById(id).remove();
        document.getElementById(modalid).remove();
    }

    let items = document.querySelectorAll('.carousel .carousel-item');
    items.forEach((el) => {
    const minPerSlide = 4;
    let next = el.nextElementSibling;
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true);
        el.appendChild(cloneChild.children[0]);
        next = next.nextElementSibling;
    }
});
}

function check(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');
    if(id=="project_24"){
        document.getElementById('item1Card').className = "col-md-6";
        document.getElementById('item2Card').className = "col-md-6";
    }
}
