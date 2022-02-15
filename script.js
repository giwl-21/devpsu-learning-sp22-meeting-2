

var word = "alphabet";
console.log(word);
for (var i in word){
    console.log(word[i]);
}

function addArnie(){
    var node = $("#arnie-box");
    var newArnie = document.createElement("div");
    newArnie.setAttribute("class", "arnie-item");

    var image = document.createElement("img");
    image.setAttribute("class", "arnie");
    image.setAttribute("src", "arnie.jpeg");

    var btn = document.createElement("button");
    btn.innerHTML="Arnie";

    newArnie.append(image);
    newArnie.append(btn);
    node.append(newArnie);
}

function loadArnie(){

    fetch("https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Arnold_Schwarzenegger_by_Gage_Skidmore_4.jpg/471px-Arnold_Schwarzenegger_by_Gage_Skidmore_4.jpg").then((response)=>{
        console.log("Arnie Loaded!!");
        return response.blob();
    }).then((myBlob)=>{
        let objectURL = URL.createObjectURL(myBlob);
        image = document.createElement('img');
        image.src = objectURL;
        document.body.appendChild(image);
    }).then(()=>{
        console.log("All done...");
    }).catch((error)=>{
        console.log('There has been a problem with your fetch operation: ' + error.message);
    });
}

async function generateArnieLink(){

    var b = await fetch("https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Arnold_Schwarzenegger_by_Gage_Skidmore_4.jpg/471px-Arnold_Schwarzenegger_by_Gage_Skidmore_4.jpg").then((response)=>{
        console.log("Arnie Loaded!!", response);
        return response.blob();
    }).then((myBlob)=>{
        let objectURL = URL.createObjectURL(myBlob);
        return objectURL;
    }).catch((error)=>{
        console.log('There has been a problem with your fetch operation: ' + error.message);
    });
    return b;
}


function activate_button(){
    generateArnieLink().then((result)=>{
        console.log(result);
        $(".arnie").attr("src", result);
    });
}

$(document).ready(() => {
    $("#activate").click(()=>{
        activate_button();
    });

});