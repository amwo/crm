//// Firebase
import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/firestore'
import conf from '../conf/firebase'
import {store} from '../store'
//import {init} from '../firebase'

export const app = async (type) => {
    firebase.initializeApp(conf)
    await store.init()
}


export const firebaseAuth = async () => {
    return new Promise((res, rej) => {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                res(user.uid)
            } else {
                res(null)
            }
        })
    })
}

export const checkEmailExist = async (email) => {
    const inValidPassword = 'abcdefghijklmnop'
    return new Promise((res, rej) => {
        firebase.auth().signInWithEmailAndPassword(email, inValidPassword).catch(err => {
            if(err.code === 'auth/user-not-found') {
                res(err.message)
            } else {
                res(null)
            }
        })
    })
}

export const signInWithFirebase = async (email, password) => {
    return new Promise((res, rej) => {
        firebase.auth().signInWithEmailAndPassword(email, password).catch(err => {
            if(err) {
                res(err.message)
            }  else {
                res(null)
            }
        })
    })
}

export const fetch = async (collection, doc, subCollection, where, whereSecond, whereThird, order, limit) => {
    let x = firebase.firestore().collection(collection)
    if(doc)
        x = x.doc(doc)
    if(subCollection)
        x = x.collection(subCollection)
    if(where)
        x = x.where(where[0], where[1], where[2])
    if(whereSecond)
        x = x.where(whereSecond[0], whereSecond[1], whereSecond[2])
    if(whereThird)
        x = x.where(whereThird[0], whereThird[1], whereThird[2])
    if(limit)
        x = x.limit(limit)

    return x.get().then(qs => {
        if(collection && doc && subCollection) {
            return qs.docs
        } else if(collection && doc) {
            if(qs.exist) {
                return qs.data()
            } else {
                return []
            }
        } else if(collection){
            return qs.docs
        } else {
            return 0
        }
    }).catch(function(error) {
        return error
    })
}

export const dateFormat = (dateStr, lang) => {
    const d = new Date(dateStr)
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const year = d.getFullYear();
    const month = months[d.getMonth()];
    const date = d.getDate();
    const hour = d.getHours();
    const min = d.getMinutes();
    const sec = d.getSeconds();
    const time = `${month} ${date}, ${year}`
    return time
}

export const validateOnlyHalfWidthChars = async chars => {
    let validation = /^[A-Za-z0-9]*$/
    return chars.match(validation) ? true : false
}

export const genUid = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let autoId = '';
    for (let i = 0; i < 20; i++) {
        autoId += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return autoId
}
