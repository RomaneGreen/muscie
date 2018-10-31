import Rebase from 're-base';
import firebase from 'firebase';

;
var app = firebase.initializeApp({
    apiKey: "AIzaSyC1zTVaglzsePuaT2w7Tl6bTCl7LdboafI",
    authDomain: "musicly-6a57d.firebaseapp.com",
    databaseURL: "https://musicly-6a57d.firebaseio.com",
    projectId: "musicly-6a57d",
    storageBucket: "",
    messagingSenderId: "692591421218"
});

var base = Rebase.createClass(app.database());

export const provider = new firebase.auth.GoogleAuthProvider();
export default base
