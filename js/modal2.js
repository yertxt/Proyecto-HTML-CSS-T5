(() => {
  const refs = {
    openModalBtn: document.querySelector("[popup2-open]"),
    closeModalBtn: document.querySelector("[popup2-close]"),
    modal: document.querySelector("[data-modal-popup2]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
