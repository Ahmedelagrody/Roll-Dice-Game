'use strict'

const rollDice = document.querySelector('.btn--roll')
const hold = document.querySelector('.btn--hold')
const btn_new = document.querySelector('.btn--new')

const current_score_player1 = document.querySelector('#current--0')
const current_score_player2 = document.querySelector('#current--1')

const diceEl = document.querySelector('.dice')
const player_active = document.querySelector('.player--active')

const player_one = document.querySelector('.player--0')
const player_two = document.querySelector('.player--1')

const playerName_1 = document.querySelector('#name--0')
const playerName_2 = document.querySelector('#name--1')

const score1 = document.querySelector('#score--0')
const score2 = document.querySelector('#score--1')

const arr_current1 = []
const arr_current2 = []

const arr_current1_total = []
const arr_current2_total = []

let added_Random1
let added_Random2

let Total1
let Total2

const rollDice_btn = function () {
  if (
    playerName_0.textContent === 'Winner' ||
    playerName_1.textContent === 'Winner'
  ) {
  } else {
    diceEl.classList.remove('hidden')

    if (player_one.classList.contains('player--active')) {
      let random1 = Math.trunc(Math.random() * 6) + 1

      diceEl.src = `dice-${random1}.png`

      added_Random1 = 0
      arr_current1.push(random1)

      if (random1 !== 1) {
        for (let i = 0; i <= arr_current1.length - 1; i++) {
          added_Random1 += arr_current1[i]
        }
        current_score_player1.textContent = added_Random1
      } else {
        added_Random1 = 0
        current_score_player1.textContent = added_Random1
        arr_current1.splice(0, arr_current1.length, 0)

        player_one.classList.remove('player--active')
        player_two.classList.add('player--active')
      }
    } else {
      let random2 = Math.trunc(Math.random() * 6) + 1

      diceEl.src = `dice-${random1}.png`

      added_Random2 = 0

      arr_current2.push(random2)

      if (random2 !== 1) {
        for (let i = 0; i <= arr_current2.length - 1; i++) {
          added_Random2 += arr_current2[i]
        }
        current_score_player2.textContent = added_Random2
      } else {
        added_Random2 = 0
        current_score_player2.textContent = added_Random2
        arr_current2.splice(0, arr_current2.length, 0)

        player_two.classList.remove('player--active')
        player_one.classList.add('player--active')
      }
    }
  }
}

const hold_btn = function () {
  if (
    playerName_1.textContent === 'Winner' ||
    playerName_2.textContent === 'Winner'
  ) {
  } else {
    let catch_total1 = Total1
    let catch_total2 = Total2

    if (player_one.classList.contains('player--active')) {
      arr_current1_total.push(added_Random1)
      let Total1 = 0
      for (let i = 0; i <= arr_current1_total.length - 1; i++) {
        Total1 += arr_current1_total[i]
      }
      score1.textContent = Total1
      catch_total1 = Total1
      added_Random1 = 0

      current_score_player1.textContent = added_Random1
      arr_current1.splice(0, arr_current1.length, 0)

      player_one.classList.remove('player--active')
      player_two.classList.add('player--active')
    } else {
      arr_current2_total.push(added_Random2)
      let Total2 = 0
      for (let i = 0; i <= arr_current2_total.length - 1; i++) {
        Total2 += arr_current2_total[i]
      }
      score2.textContent = Total2
      catch_total2 = Total2
      added_Random2 = 0

      current_score_player2.textContent = added_Random2
      arr_current2.splice(0, arr_current2.length, 0)

      player_two.classList.remove('player--active')
      player_one.classList.add('player--active')
    }

    if (catch_total1 >= 20) {
      playerName_1.textContent = 'Winner'
    } else if (catch_total2 >= 20) {
      playerName_2.textContent = 'Winner'
    }
  }
}

const New_Game = function () {
  diceEl.classList.add('hidden')

  if (player_two.classList.contains('player--active')) {
    player_two.classList.remove('player--active')
    player_one.classList.add('player--active')
  }

  playerName_1.textContent = 'Player 1'
  playerName_1.textContent = 'Player 2'

  arr_current1.splice(0, arr_current1.length, 0)
  arr_current2.splice(0, arr_current2.length, 0)
  arr_current1_total.splice(0, arr_current1_total.length, 0)
  arr_current2_total.splice(0, arr_current2_total.length, 0)

  added_Random1 = 0
  added_Random2 = 0
  Total1 = 0
  Total2 = 0

  current_score_player1.textContent = added_Random1
  current_score_player2.textContent = added_Random2

  score1.textContent = Total1
  score2.textContent = Total2
}

rollDice.addEventListener('click', rollDice_btn)

hold.addEventListener('click', hold_btn)

btn_new.addEventListener('click', New_Game)
