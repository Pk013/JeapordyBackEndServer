const categoryIDs = [780, 680, 136, 306, 309, 2537]
let grid = new JeopardyGrid({
    categoryIDs,
    numberOfRows: 6,
    parentContainerId: "main",
})


function Inputanswer() {
    let answerBox = document.createElement("INPUT")
    document.getElementById("answer")
    answerBox.setAttribute("type", "text")
    answerBox.setAttribute("value", "What/Who/When/Where is")
    answer.appendChild(answerBox)
}

function resetGameBoard() {
    document.getElementById("main")
    main.innerHTML = ""
    grid = new JeopardyGrid({
    categoryIDs,
    numberOfRows: 6,
    parentContainerId: "main",
    })
}