import { writable } from 'svelte/store'
import { firebaseAuth, fetch } from './fn'

function create() {
    const { subscribe, set, update } = writable({
        s: {
            login: false,
            initialized: false,
        },
        c: { // id
            user: null,
        },
        v: {
            documentEditor: false
        },
        ws: {
            type: 'ADD_PERSON',
            task: null,
            locale: null
        },
        d: {}
    })

    return {
        subscribe,
        init: async () => {
            const user = await firebaseAuth()
            if(user) {
                let d = {}
                const peopleData = await fetch('people',null, null, ["authorization","array-contains-any",["familyland"]])

                const [peopleDataResult] = await Promise.all([peopleData])
                const items = [].concat(peopleDataResult)

                for (let i = 0, len = items.length; i < len; i++) { d[items[i].id] = items[i].data() }

                update(state => Object.assign(state, {
                    s: {
                        ...state.s,
                        login: true,
                        initialized: true
                    },
                    c: {
                        ...state.c,
                        user
                    },
                    d: {
                        ...state.d,
                        ...d
                    }
                }))
            } else {
                update(state => Object.assign(state, {
                    s: {
                        initialized: true
                    }
                }))
            }
        },
        documentEditorVisibilityOpen: async (type, task, locale) => {
            update(state => Object.assign(state, {
                ...state,
                v: {
                    ...state.v,
                    documentEditor: true
                }
            }))
        },
        documentEditorVisibilityClose: async () => {
            console.log('upda')
            update(state => Object.assign(state, {
                v: {
                    documentEditor: false,
                    ...state.v
                },
                ...state
            }))
        },
        ws: async (type, task, locale) => {
            update(state => Object.assign(state, {
                ws: {
                    type,
                    task,
                    locale
                }
            }))
        },
        add: () => {
            update(n => n + 1)
        },
        increment: () => update(n => n + 1),
        reset: () => set({})
    }
}

export const store = create()
