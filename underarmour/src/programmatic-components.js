import Vue from 'vue'
import modal from './components/global/modal'

let ProgrammaticModal = {
    open(settings){

        let parent
        const defaultParams = {
            programmatic: true,
            content: ''
        }
        if(settings.parent)
            parent = settings.parent

        let propsData = Object.assign(defaultParams, settings.propsData)

        const vm = typeof window != 'undefined' && window.Vue? window.Vue : Vue
        const ModalComponent = vm.extend(modal)

        return new ModalComponent({
            parent ,
            el: document.createElement('div'),
            propsData
        })
    }
}


export {
    ProgrammaticModal
} 