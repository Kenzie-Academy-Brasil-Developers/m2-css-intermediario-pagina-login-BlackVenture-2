/* Desenvolva seu código aqui... */

const recoveryLink = document.querySelectorAll(`[data-control-modal]`)

for (let i = 0; i < recoveryLink.length; i++){
    recoveryLink[i].addEventListener(`click`, () => {
        let modalId = recoveryLink[i].getAttribute(`data-control-modal`)
        document.getElementById(modalId).classList.toggle(`show-modal`)
    })
}