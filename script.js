//Este script me permite dtectar el clip en el link del menu de navegación y agregar las clases correspondientes
//para que así con css se produzca el efecto donde se mueve el indicador

const list = document.querySelectorAll('.list')
function activeLink(){
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
}

//Inicializamos EmailJs
list.forEach((item)=>
    item.addEventListener('click', activeLink));

(function(){
    emailjs.init("VcGIk45xGtoWiEjZT")
})();

document.getElementById('contact-form').addEventListener('submit', function(e){
    e.preventDefault();

    emailjs.sendForm('service_7qpg84c', 'template_vp1oyai', this)
    .then(function(){
        alert("Mensaje enviado con exito, te contactaré pronto.")
    }, function(error){
        alert("Error al enviar el mensaje" + JSON.stringify(error));
    });
});
