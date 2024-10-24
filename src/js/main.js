import '../scss/styles.scss'

// Import all of Bootstrap's JS
//import {Modal} from 'bootstrap'
import  Modal  from 'bootstrap/js/dist/modal';
//const modal = new Modal()
//import * as bootStrap from 'bootstrap'

/*
    cambiar el tema a drak
    https://developer.mozilla.org/en-US/docs/Web/CSS/accent-color
*/

//document.documentElement.setAttribute('data-bs-theme','dark')
const root = document.querySelector(':root');
if(root){
    root.setAttribute('data-bs-theme','dark')
}

/*
    cada vez que haga click en un dia por la consola debe de pintar
    el día donde hemos dado el click
*/

!function eventDelegation(){
    const calendar = document.querySelector('.calendar')
    //https://dmitripavlutin.com/javascript-event-delegation/
    calendar.addEventListener('click', (ev)=>{
        const node = ev.composedPath().find(n=>n.dataset && 'day' in n.dataset)
        if(node){
            const {day} = node.dataset
            console.log(day)
        }
    })
}()

!function hideModal(){
    const modal = document.getElementById('exampleModal')
    modal.addEventListener('hide.bs.modal', ()=>{
        console.log("close modal")
    })
}()

!function stopSpinner(){
    const hideSpinner = document.getElementById('stopSpinner')
    const spinner = document.getElementById('spinner')
    hideSpinner.addEventListener('click', ()=>{
        spinner.hidden = true
        //spinner.setAttribute('hidden','')
    })
}()