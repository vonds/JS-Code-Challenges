class Sudoku {
    constructor(data) {
        this.data = data
        this.length = this.data.length
        this.root = Math.floor(Math.sqrt(this.length))
    }

    isValidSubSudoku(row, col, size) {
        var sudokuTracker = {};
        for (var j = row; j < row + size; j++) {
          for (var k = col; k < col + size; k++) {
            if (typeof this.data[j][k] === 'number' && this.data[j][k] >= 1 && this.data[j][k] <= this.length) { 
              sudokuTracker[this.data[j][k]] = true;
            } else {
              return false;
            }
          }
        }
        return Object.keys(sudokuTracker).length === this.length;          
    }

    isValid() {
        if (this.root !== Math.sqrt(this.length)) return false
        for (let row = 0; row < this.length; row += root) {
          for (let col = 0; col < this.length; col += this.root) {
            const isValid =  this.isValidSubSudoku(row, col, this.root);
            if (isValid === false) return false;
          }      
        }
        return true;
    }
}