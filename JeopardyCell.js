class JeopardyCell extends Cell {
    constructor (rowIndex, columnIndex, rowParent) {
        super(rowIndex, columnIndex, rowParent)
    }

    CategoryTitle (category) {
        this.isCategoryHeader = true
        this.title = category.title
        this.cell.innerHTML = category.title
    }

    Clue (clues) {
        const clue = clues[this.rowIndex]

        this.pointValue = this.rowIndex * 100
        this.question = clue.question
        this.answer = clue.answer
        this.category = clue.category
        this.showPointValue()
    }

    showPointValue () {
        this.cell.innerHTML = "$" + this.pointValue
    }

    showQuestion () {
        this.cell.innerHTML = this.question
    }
}