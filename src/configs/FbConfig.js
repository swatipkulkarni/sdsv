import * as firebase from 'firebase' 
import '@firebase/firestore'
import '@firebase/database'
import 'firebase/auth'

var config={
    apiKey: "AIzaSyDIHQV1smf8ezwaendEYsjm280yN1pfwo0",
        authDomain: "saurabha-dasa-sahitya.firebaseapp.com",
        databaseURL: "https://saurabha-dasa-sahitya.firebaseio.com",
        projectId: "saurabha-dasa-sahitya",
        storageBucket: "saurabha-dasa-sahitya.appspot.com",
        messagingSenderId: "221556238554",
        appId: "1:221556238554:web:aa7f4b21674ef1a3771de3",
        measurementId: "G-79VESSPG27"
    };

//firebase.initializeApp(config)
//firebase.firestore().settings({timestampsInSnapshots:true})
firebase.initializeApp(config);
export const db=firebase.firestore();
export default firebase