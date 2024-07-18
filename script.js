document.getElementById("conteudo")

function sim() {
   alert("já que aceitou se casar comigo, tenho uma musica para voce minha gatinha ❤️ :)"); location.href = "https://music.youtube.com/watch?v=yka6mulGMmU";
   
}

function desvia(t) {
    var btn = t;
    btn.style.position = 'absolute';
    btn.style.buttom = geraPosicao(10, 90);
    btn.style.left = geraPosicao(10, 90);
    console.log("opa, desviei...");

}

function geraPosicao(min, max) {
    return (Math.random() * (max - min) + min) + "%";

}

