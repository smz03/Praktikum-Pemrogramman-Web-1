const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")

let init =0

const chatboxSay =() => {
    return ["Hello,Apa kabar kamu?, Apakah baik baik saja?"]
}

pertanyaan.innerHTML = chatboxSay()[0]

function chatboxStart(){
    init++
    if (init === 1) {
    console.log({nama: jawaban.value})
    } else if (init === 2) {
        console.log({kabar: jawaban.value })
    } else if (init === 3) {
        console.log({alamt: jawaban.value })
    } else if (init === 4) {
        finishing
    }else {
        chatboxEnd
    } 
}