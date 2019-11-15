var docu = document.getElementsByTagName("li");
document.getElementsByTagName('ul');

for (var i=0; i<docu.length; i++ ){
    docu[i].style.listStyleType = 'circle';
    docu[i].innerHTML = "blabla";
}

document.getElementById('super').addEventListener('click', function () {
    alert ('youpi');
});