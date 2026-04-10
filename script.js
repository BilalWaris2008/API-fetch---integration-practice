let rough = ""

let showcars = 

function showallcars() {
    showcars.forEach(element => {
        rough += `
    <div class="card m-4" style="width: 20rem;">
            <img src=${element.img} class="card-img-top" alt="...">
        <div class="card-body">
        <h4 class="card-title">${element.title}</h4>
        </div>
    </div>
     `

    });

    document.getElementById("show-all-cars").innerHTML = rough
}

showallcars()