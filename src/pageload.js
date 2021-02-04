import {addContent} from './append'
import {tabsModule} from './tabs'

function init() {
    window.onload = () => {
        addContent();
        tabsModule();
    };
}



export {
    init
}

