import firebase from 'firebase';

const app = firebase.initializeApp( { 
    apiKey: "AIzaSyCkTAE9eyrHPH5n-vDX3AtawpPRHUC77So",
    authDomain: "doityourself-aa4fb.firebaseapp.com",
    databaseURL: "https://doityourself-aa4fb.firebaseio.com",
    projectId: "doityourself-aa4fb",
    storageBucket: "doityourself-aa4fb.appspot.com",
    messagingSenderId: "708799522745",
    appId: "1:708799522745:web:9b4846ff01ea70755df868"
 });

const database = firebase.database();

export default database;