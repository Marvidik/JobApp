
function code(w){
    console.log("ebube is coding",w)
}

async function Programmer(){
    const ans=await new Promise((resolve) => code(resolve));
    console.log("The Programmer is done coding")
}


Programmer().then(
    console.log("Hello developer you may rest now")
)