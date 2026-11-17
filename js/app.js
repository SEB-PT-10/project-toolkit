// VARIABLES
let timeLeft = 5
let timerId = null

// CACHED ELEMENTS
const startButtonEl = document.querySelector('#start')
const resetButtonEl = document.querySelector('#reset')
const messageEl = document.querySelector('#message')

const timeLeftEl = document.querySelector('#time-left')

const openInstructionsButtonEl = document.querySelector('#open-instructions')
const instructionsModalEl = document.querySelector('#instructions')
const closeInstructionsButtonEl = document.querySelector('#close-instructions')

console.log(openInstructionsButtonEl, instructionsModalEl)


// console.log(startButtonEl, resetButtonEl, messageEl)

timeLeftEl.textContent = timeLeft

// FUNCTIONS
const updateTimer = () => {
    timeLeft = timeLeft - 1
    timeLeftEl.textContent = timeLeft

    if (timeLeft === 3) {
        timeLeftEl.classList.add('times-up')
    }

    if (timeLeft === 0) {
        // stop the timer
        clearInterval(timerId)
        messageEl.textContent = 'Shift finished'
    }
}


// EVENT LISTENERS
startButtonEl.addEventListener('click', () => {
    startButtonEl.disabled = true
    resetButtonEl.disabled = false
    messageEl.textContent = 'Your shift has started'

    timerId = setInterval(updateTimer, 1000)
})


resetButtonEl.addEventListener('click', () => {
    startButtonEl.disabled = false
    resetButtonEl.disabled = true
    messageEl.textContent = 'Ready to start.'

    // clear (stop) the timer
    clearInterval(timerId)
    timerId = null
    // reset the seconds and display (render)
    timeLeft = 5
    timeLeftEl.textContent = timeLeft
    timeLeftEl.classList.remove('times-up')
})

openInstructionsButtonEl.addEventListener('click', () => {
    instructionsModalEl.showModal()
})

closeInstructionsButtonEl.addEventListener('click', () => {
    instructionsModalEl.close()
})
