let rough = ""

let showcars = [
    {
        "id": "1",
        "title": "Ferrari",
        "img": "https://idsb.tmgrup.com.tr/ly/uploads/images/2021/05/30/118050.jpg"
    },
    {
        "id": "2",  
        "title": "Civic",
        "img": "https://imgd.aeplcdn.com/370x208/n/cw/ec/27074/civic-exterior-right-side-view.jpeg?q=80"
    },
    {
        "id": "3",
        "title": "Lamborghini",
        "img": "http://127.0.0.1:5500/assets/carousel-image.jpg"
    }
]

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