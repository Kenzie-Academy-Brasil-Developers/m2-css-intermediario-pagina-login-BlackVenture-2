/* Desenvolva seu código aqui... */

const buttonToogleModal = document.querySelectorAll(`[data-control-modal]`)

for (let i = 0; i < buttonToogleModal.length; i++){
    buttonToogleModal[i].addEventListener(`click`, () => {
        let modalId = buttonToogleModal[i].getAttribute(`data-control-modal`)
        document.getElementById(modalId).classList.toggle(`show-modal`)
    })
}
