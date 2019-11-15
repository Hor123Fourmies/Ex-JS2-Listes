

function ajout()
{
    var li3 = document.createElement('li');
    li3.innerHTML = "sucre";
    document.getElementById('listecommissions').appendChild(li3);

    var li4 = document.createElement('li');
    li4.innerHTML = "pain";
    document.getElementById('listecommissions').appendChild(li4);

    var li5 = document.createElement('li');
    li5.innerHTML = "viande";
    document.getElementById('listecommissions').appendChild(li5);
}

ajout();

/*

var bouton = document.getElementById('boutonAjout');
bouton.addEventListener('click', function () {

var input = document.getElementById('ajoutListe');

var li = document.createElement('li');
li.innerHTML = input.value;
document.getElementById('listecommissions').appendChild(li);

});

*/

// var suppression = document.getElementById('listecommissions');
// document.body.removeChild(suppression);

liste = document.getElementsByTagName('ul')[0];
// supprimer = document.getElementsByTagName('li')[2];


var bouton = document.getElementById('boutonSuppression');
bouton.addEventListener('click', function () {
    liste.removeChild(liste.lastChild);
});
