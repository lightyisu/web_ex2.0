
function resolveHash(hash) {

    if (hash == '#A') {
        return 'A';
    }
    if (hash == '#B') {
        return 'B';
    }
    if (hash == '#C') {
        return 'C';
    }
    if (hash == '#D') {
        return 'D';
    }
    if (hash == '#E') {
        return 'E';
    }
    if (hash == '#F') {
        return 'F';
    }

}

function rendering() {

    var hash = window.location.hash;//获取hash
    var content = resolveHash(hash);
    if (content == 'A' || content == 'B' || content == 'C') {
        document.getElementById('contABC').innerHTML = content;
    }
    else {
        document.getElementById('contDEF').innerHTML=content;
    }
}

document.getElementById('a').addEventListener('click', function () {
    window.location.hash = '#A';
})
document.getElementById('b').addEventListener('click', function () {
    window.location.hash = '#B';
})
document.getElementById('c').addEventListener('click', function () {
    window.location.hash = '#C';
})
document.getElementById('d').addEventListener('click', function () {
    window.location.hash = '#D';
})
document.getElementById('e').addEventListener('click', function () {
    window.location.hash = '#E';
})
document.getElementById('f').addEventListener('click', function () {
    window.location.hash = '#F';
})
window.addEventListener('hashchange', function () {
    rendering();
});
