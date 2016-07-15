function hobbyOpen () {

var elem = document.getElementById('hobbies');
    var newLi = document.createElement('li');


    var hobbie = ['guitar playing', 'football', 'running', 'road cycling', 'gym', 'literature'];

    for (var i = 0; i < hobbie.length; i++) {
        if (i != hobbie.length) {
            newLi.innerHTML = hobbie[i];
            elem.appendChild(newLi);
        }
    }}
