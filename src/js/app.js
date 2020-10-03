/**
 * Declaracion de variables globales 
 *  */
 

let MAIN;
let MODAL_POST;
let BTN_SHOW_POST;
let BTN_CANCEL_POST;
let defferedPrompt;
// Funciones
const showPostModal = () => {
    MAIN.style.display = 'none';
    MODAL_POST.style.display = 'block';
    setTimeout(() => {
      MODAL_POST.style.transform = 'translateY(0)';
    }, 1);
  };
  const closePostModal = () => {
    MAIN.style.display = 'block';
    MODAL_POST.style.transform = 'translateY(100vh)';
  };



  window.addEventListener('beforeinstallprompt', (e) => {
    console.log('Anulado el prompt')
    e.preventDefault();
    defferedPrompt = e;
  })

// Cuando se cargue todo nuestro DOM

window.addEventListener('load', async () => {
    MAIN = document.querySelector('#main');
    MODAL_POST = document.querySelector('#modal-post-section');
    BTN_SHOW_POST = document.querySelector('#btn-upload-post');
    BTN_SHOW_POST.addEventListener('click', showPostModal);
    BTN_CANCEL_POST = document.querySelector('#btn-post-cancel');
    BTN_CANCEL_POST.addEventListener('click', closePostModal)
    
    if('serviceWorker' in navigator){
      if(navigator.serviceWorker){
        const response = await navigator.serviceWorker.register('sw.js');
        if(response){
          console.log('Service Worker registrado')
        }
      }
    }

    const bannerInstall = document.getElementById('banner-install');
    bannerInstall.addEventListener('click', async() => {
      if(defferedPrompt){
        defferedPrompt.prompt();
        const response = await defferedPrompt.userChoice;
        if(response.outcome === 'dismissed'){
          console.log('El usuario cancelo la instalación')
        }
      }
    });
})

