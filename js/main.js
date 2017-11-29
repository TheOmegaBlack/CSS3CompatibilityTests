function changeRot(value) {
    document.getElementById('trans3D-div2').style.transform = "rotateY(" + value + "deg)";
    document.getElementById('trans3D-div2').style.webkitTransform = "rotateY(" + value + "deg)";
    document.getElementById('trans3D-div2').style.MozTransform = "rotateY(" + value + "deg)";
    document.getElementById('trans3D-div2').style.OTransform = "rotateY(" + value + "deg)";
    document.getElementById('persp').innerHTML = value + "deg";
}
function checkFlat() {
    if (document.getElementById("tf").checked == true) {
        document.getElementById('trans3D-div2').style.transformStyle = "preserve-3d";
        document.getElementById('trans3D-div2').style.webkitTransformStyle = "preserve-3d";
        document.getElementById('trans3D-div2').style.MozTransformStyle = "preserve-3d";
    } else {
        document.getElementById('trans3D-div2').style.transformStyle = "flat";
        document.getElementById('trans3D-div2').style.webkitTransformStyle = "flat";
        document.getElementById('trans3D-div2').style.MozTransformStyle = "flat";
    }
}

function switchHeight() {
    document.getElementById("flex-box-1").classList.toggle("height")
    document.getElementById("flex-box-2").classList.toggle("height")
}

function autofier() {
    for (var i = 1; i < 7; i++) {
        [].forEach.call(document.getElementsByClassName("son-" + i), function(current){current.classList.remove("son-" + i)})
    }
}

function stylebar() {
    document.getElementById("scroll-div").classList.toggle("hidden")
    document.getElementById("placeholder-div").classList.toggle("hidden")
}

function pixelate(){
    document.getElementById("img-to-pixelate").classList.toggle("pixelated")
    document.getElementById("static-image").classList.toggle("pixelated")
    document.getElementById("background-to-pixelate").classList.toggle("pixelated")
}
