import './a.css'
import * as sapper from '@sapper/app'
import './store'
import { app } from './fn'

sapper.start({
    target: document.querySelector('#r')
}).then(() => {
    app()
})
