/**
 *
 * client side作成の際は関数を渡すこと
 * hono側ではAPIがあるわけではない
 *
 */
export const closeModal = () => {
  console.debug('client from /work')
  window.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('.modal-content') as HTMLElement
    console.debug(modal)
    const modalUnderlay = document.querySelector('.modal-underlay')
    console.debug(modalUnderlay)
    const closeButton = document.querySelector('close-modal')
    console.debug(closeButton)

    const toggleModal = (isOpen: boolean) => {
      modal.style.display = isOpen ? 'block' : 'none'
    }

    modalUnderlay.addEventListener('click', () => toggleModal(false))
    closeButton.addEventListener('click', () => toggleModal(false))

    toggleModal(true)
  })
}
