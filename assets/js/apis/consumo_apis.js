
const imgNotFound = "../assets/img/not_found_img/not.jpg";
apiKeyNasa = 'ffNdG7thGQxAWOcpxUgnPrMIEvlFlHUSz5xAgjB2';
NAS = `https://api.nasa.gov/planetary/apod?api_key=` + apiKeyNasa;

var btnConsumirApi = document.getElementById("btnConsultar")

btnConsumirApi.addEventListener('click', function(){
    getImageDay("imagenNasa");
});

function getImageDay(imgName){
    fetch(NAS)
        .then(res => res.json())
        .then(data => {
            changeImg(imgName, data.hdurl, data.title, data.date, data.explanation)
        }).catch(error => changeImg(imgName, imgNotFound, 'No Connection', 'No Connection', 'No Connection'));
}

function changeImg(imgName, imagen, titulo, fecha, mensaje){
    const imgReload = document.getElementById(imgName);
    imgReload.src = imagen;
    valueComponent('titulo', titulo)
    valueComponent('fecha_consulta', fecha)
    valueComponent('descripcion', mensaje)
}

function valueComponent(id, content){
    document.getElementById(id).innerHTML= content;
}