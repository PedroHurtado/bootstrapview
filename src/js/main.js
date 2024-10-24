import '../scss/styles.scss'

// Import all of Bootstrap's JS
//import * as bootstrap from 'bootstrap'

/*
    cambiar el tema a drak
*/

//document.documentElement.setAttribute('data-bs-theme','dark')
const root = document.querySelector(':root');
if(root){
    root.setAttribute('data-bs-theme','dark')
}
