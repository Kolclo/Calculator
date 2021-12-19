var inputEl = document.getElementById("input")
var outputEl = document.getElementById("output")
var currentSum = ""
var rootToggle = false
var rootSum = `Math.sqrt(`

// Clears calculator input/output
function clearText() {
    currentSum = ""
    rootSum = `Math.sqrt(`
    rootToggle = false
    inputEl.textContent = currentSum
    outputEl.textContent = currentSum
}

// Inputs into calculator
function input(x) {
    if (rootToggle === true) {
        if (x === `*` || x === `/` || x === `+` || x === `-` || x === `**` || x === `(` || x === `)`) {
            rootSum += `)`
            currentSum += rootSum
            rootToggle = false
            currentSum += x
            inputEl.textContent += x
        } else {
            rootSum += x
            inputEl.textContent += x
        }
    } else {
        currentSum += x
        inputEl.textContent += x
    }
}

// Removes last character entered
function backspace() {
    if (rootToggle === true) {
        currentSum = currentSum.slice(0, -10)
        inputEl.textContent = inputEl.textContent.slice(0, -1)
    } else {
        currentSum = currentSum.slice(0, -1)
        inputEl.textContent = inputEl.textContent.slice(0, -1)
    }
}

// Toggles root
function squareRoot() {
    rootToggle = true
    rootSum = `Math.sqrt(`
    inputEl.textContent += '√'
}

// Calculates and shows answer
function equal() {
    if (rootToggle === true) {
        rootSum += `)`
        currentSum += rootSum
    }
    console.log(currentSum)
    outputEl.textContent = eval(currentSum)
}