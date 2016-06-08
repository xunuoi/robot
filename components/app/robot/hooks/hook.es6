import {help} from './help'
import {compareApp} from './compareApp'


let list = [
    help,
    compareApp
]

function restoreBg(){
    $("#header, #menu, #wrapper").removeClass('blur-stage')
}


function commonHook(word, eve){
    if(word.match(/[cC]lear\s*([sS]tage)?/)){
        $('.chart-docker').empty();
        restoreBg();

        eve.showResponse({
            placeholder: 'new subject',
            response: 'stage is clear now'
        });

    
        eve.releaseStatus()

        return false
    }

    if(word.match(/^[s|S]how\s+[l|L]oading\b/)){

        $('#loading_splash').show();
        return false
    }
}




export {
    list,
    commonHook
}

