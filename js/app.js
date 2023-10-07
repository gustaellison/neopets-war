/*----- constants -----*/

const FIGHTERSARR = [
    {points: Math.floor(Math.random() * 10 + 1), imgUrl: 'https://images.thedirect.com/media/photos/witchn.jpg'}, 
    {points: Math.floor(Math.random() * 10 + 1), imgUrl: 'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/streams/2013/June/130606/6C7757975-130606-ent-cersei-hmed.jpg'}, 
    {points: Math.floor(Math.random() * 10 + 1), imgUrl: 'https://thewitcher3.wiki.fextralife.com/file/The-Witcher-3/ciri-icon-the-witcher-3-wild-hunt-wiki-guide-min.png'}, 
    {points: Math.floor(Math.random() * 10 + 1), imgUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/Gandalf600ppx.jpg/170px-Gandalf600ppx.jpg'}, 
    {points: Math.floor(Math.random() * 10 + 1), imgUrl: 'https://www.iment.com/maida/tv/lordoftherings/galadriel-small.jpg'}, 
    {points: Math.floor(Math.random() * 10 + 1), imgUrl: 'https://www.comingsoon.net/wp-content/uploads/sites/3/2023/07/The-Last-of-Us-TV-Show-Joel-Death.jpg'},]


const ENEMIES = [
    'https://vfxvoice.com/wp-content/uploads/2021/12/PIX-9-Screen-Shot-2021-10-04-at-18.44.31.jpg', 
    'https://upload.wikimedia.org/wikipedia/en/b/bd/Joffrey_Baratheon-Jack_Gleeson.jpg',
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1dbc1935-6542-4ee3-822f-135cff4ba62c/df98de6-3bd0eb87-f58b-4726-ad76-ce20a4c8f570.png/v1/fill/w_485,h_605/gollum__1____transparent__by_speedcam_df98de6-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjA1IiwicGF0aCI6IlwvZlwvMWRiYzE5MzUtNjU0Mi00ZWUzLTgyMmYtMTM1Y2ZmNGJhNjJjXC9kZjk4ZGU2LTNiZDBlYjg3LWY1OGItNDcyNi1hZDc2LWNlMjBhNGM4ZjU3MC5wbmciLCJ3aWR0aCI6Ijw9NDg1In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.Q25iqft9m-DIaaiS-3gSvVU69efaZnVxfohOxSt5wVM' ]    
/*----- app's state (variables) -----*/

const fighterEls = document.querySelectorAll('img.fighters')
const yourPowerEl = document.getElementById('your-power')
const enemyPowerEl = document.getElementById('enemy-power')
const winnerEl = document.getElementById('winner-message')
const playAgainEl = document.querySelectorAll('button')
const playerScoreEl = document.getElementById('player-score')
const enemyScoreEl = document.getElementById('enemy-score')
const playerArenaEl = document.getElementById('your-fighter')
const enemyArenaEl = document.getElementById('enemy-fighter')


let playerScore = 0;
let enemyScore = 0;
let fightingPower0;
let fightingPower1;
let enemyPower; 

// HOW CAN I PUT THESE INTO AN ARRAY????
let f0 = document.getElementById('0')
// f0 = FIGHTERSARR[0].points

let f1 = document.getElementById('1')
// f1 = FIGHTERSARR[1].points
const f0CardText = document.getElementById('f0valuetext')
f0CardText.textContent = FIGHTERSARR[0].points

const f1CardText = document.getElementById('f1valuetext')
f1CardText.textContent = FIGHTERSARR[1].points


f0.addEventListener('click', handleEvent0)
f0.addEventListener('click', addScore0)


//SAME WITH PUTTING THIS INTO AN ARRAY
function handleEvent0 (evt) {
    fightingPower0 = FIGHTERSARR[0].points
    yourPowerEl.textContent = (fightingPower0)
    enemyPowerEl.textContent = (enemyPower)
    winnerEl.textContent = findWinner0()
    f0.remove()
    f0CardText.remove()
    playerArenaEl.src = "https://images.thedirect.com/media/photos/witchn.jpg"
    enemyPower = Math.floor(Math.random() * 10 + 1)
    enemyArenaEl.src=ENEMIES[0]



}
//WHY ARE SCORES INCONSISTENT??? and adding to played in the case of a tie
function addScore0() {
    if (fightingPower0 > enemyPower){
        playerScore = playerScore+1
        return playerScoreEl.innerHTML = playerScore
    } else if (fightingPower0 < enemyPower) {
        enemyScore = enemyScore+1
        return enemyScoreEl.innerHTML = enemyScore
    } else {
        return 
    }
}    

f1.addEventListener('click', handleEvent1)
f1.addEventListener('click', addScore1)


function handleEvent1 () {
    fightingPower1 = FIGHTERSARR[1].points
    yourPowerEl.textContent = (fightingPower1)
    enemyPowerEl.textContent = (enemyPower)
    winnerEl.textContent = findWinner1()
    f1.remove()
    f1CardText.remove()
    playerArenaEl.src = "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/streams/2013/June/130606/6C7757975-130606-ent-cersei-hmed.jpg"
    enemyPower = Math.floor(Math.random() * 10 + 1)
    enemyArenaEl.src=ENEMIES[1]
}


function addScore1() {
    if (fightingPower1 > enemyPower){
         playerScore = playerScore+1
        return playerScoreEl.innerHTML = playerScore
    } else if (fightingPower1 < enemyPower) {
        enemyScore = enemyScore+1
        return enemyScoreEl.innerHTML = enemyScore
    } else {
        return 
    }
}    


function findWinner0() {
    if (fightingPower0 < enemyPower){
        return 'the enemy beat you'
    } else if (fightingPower0 > enemyPower) {
        return 'you beat the enemy'
    } else {
        return'it was a tie'
    }
}

function findWinner1() {
    if (fightingPower1 === enemyPower){
        return 'its a tie'
    } else if (fightingPower1 > enemyPower) {
        return 'you beat the enemy'
    } else {
        return 'the enemy beat you'
    }
}





//console.log(fighterEls)
// let fighterPowers = fighterEls[1].power

// let powerArr = fighterEls



/*----- event listeners -----*/
/*----- functions -----*/



//ARRAY for fighters to get objects from


    //setting image for each fighter




init()



function init () {

fighterEls.forEach((obj, idx) =>{
    obj.src = FIGHTERSARR[idx].imgUrl
    obj.power = FIGHTERSARR[idx].points
    enemyPower= Math.floor(Math.random() * 10 + 1)
})


    render()
}



function render() {

}


//create a function that returns an array of 6 numbers in init



// ^^ generated by function in init generating randoms





// console.log(fighterPwrs)

// Pseudocode:
// 1. Assign random values to fighters and enemies
    //  1.1 Assign a random value between 1 and 10 to the players fighters
            // Create variables for each fighter - Select the FIGHTERS (f-1 through f-6 div ids)
            // Create variable for fighter power CREATE JS OBJECT/CLASS
            // Assign random fighter values  
        //  1.1.2 Generate the ENEMY fighting power and image
            // Create variable for Enemy power
            // Create variable for Enemy image - placeholder fighter image
            // Set power and image to be random
    // set starting scores to zero    
// 
// On click
// 2. Populate the fighter and enemy's images and fighting powers to view
    // create constants for the eggs on the page
    // create variable for the fighting powers in arena
    // Update the enemy variables to the random values that have been preselected in the starting state
    // Replace fighters placeholder egg and fighting score in arena
// 3. Compare values of fighter and enemy to determine winner
    // create variable for the text that says who won
    // create variable for winner
        // compare fighter power to enemy power
    // assign player with higher score to winner
    // set text for who won
    // variables for enemy and fighter scores
        // add one point for each win

// Play again
    // reset starting values
        // reset the eggs
        // do we want to shuffle the values of the fighters? or keep the same fighters and values and remove them after theyve fought?
        // do we want to set it to 3 rounds? and remove each character after theyve been used
        // generate random enemy value agian
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
