 const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const modalTitle = document.getElementById('modal-title');
  const modalText = document.getElementById('modal-text');
  const cerrarBtn = document.getElementById('cerrar');


  //para cerrar cuando se hace click afuera de la imagen
  window.addEventListener('click', (e) => {

    if(e.target === modal) {
      modal.style.display = 'none';
    }
  });


  
// pa mostrar el cuadrto con info
  function abrirModal(src, titulo, descripcion) {
    modalImg.src = src;
    modalTitle.textContent = titulo;
    modalText.textContent = descripcion;
    modal.style.display = 'flex';
  };




