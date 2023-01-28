// Calculator Abilites:
// accepts user inputs of number, operator and another number
// stores inputs
// recognize inputs and perform calculations
// return a result
// clear button should clear all entries 

// Optional Featurs:
// should accept longer arithmetic operations
// display all input as it is being entered
// store previous total as start of next operation
// should prevent invalid inputs (operators next to each other, two decimal points)

const keys = document.querySelector('.calculator-buttons');
    keys.addEventListener('click', event => {
        const {target} = event;
        const {value} = target;
        if (!target.matches('button')) {
            return;
        } else {
            // pass value to parse method
            console.log(value)
        }
    })

const calculator = {
    displayTest: '0',
    prevTotal: null, 

    parseInput(value) {
        if (this.displayTest === '0') {
            this.displayTest = ''
        }
        // Have any of the special buttons been clicked
        switch (value) {
            case '=' : 
                // Calculate the answer
                break;
            case 'AC' :
                // Clear screen and stored values
                break;
            case '.' :
                if (this.displayTest === 0) {
                    // Pass '0.' into add text method
                } else {
                    // add value to next string
                }
                break;
            default: 
                // add value to text string
                break;
        }

    },

        addText(value) {
            if (this.displayTest === '0') {
                this.displayTest = ''
            } else if (this.prevTotal !== null) {
                this.displayTest === this.prevTotal
                this.prevTotal === null
            }
            if (/*check whether the last char in display*/) {

            }
            this.displayTest += value
            // output display text to screen
        }
    }
