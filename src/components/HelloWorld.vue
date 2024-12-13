<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2 v-if="user">Signed In User: {{ user }}</h2>

    <br>
    <div id="logout" v-if="isSignedIn">
      <button @click="handleSignOut">logout</button>
    </div>

    <br>
    <div id="GoogleSignIn" v-if="!isSignedIn">
      <h3>Google Signin</h3>
      <button ref="Btn" @click="handleSignInGoogle">login</button>
    </div>

    <br>
    <div id="TwitterSignIn" v-if="!isSignedIn">
      <h3>Twitter Signin</h3>
      <button @click="handleSignInTwitter">login</button>
    </div>

    <br>
    <div id="GitHubSignIn" v-if="!isSignedIn">
      <h3>GitHub Signin</h3>
      <button @click="handleSignInGitHub">login</button>
    </div>
  </div>
</template>

<script>
import firebaseConfig from '../firebaseConfig';
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, TwitterAuthProvider } from "firebase/auth";
import googleOneTap from 'google-one-tap';

firebaseConfig

const provider = new GoogleAuthProvider();
const providerTwitter = new TwitterAuthProvider();
const auth = getAuth();

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      user: '',
      isSignedIn: false,
    }
  },
  mounted () {
        const options = {
            client_id: '761033708851-3blmfcdfaom29tdno64107427kqe5mer.apps.googleusercontent.com', // required
            auto_select: true, // optional
            cancel_on_tap_outside: false, // optional
            context: 'signin', // optional
        };
        googleOneTap(options, (response) => {
          console.log("response got:"+ response);

//          const credential = GoogleAuthProvider.credential(response.credential)
//          signInWithCredential(auth, credential).then(function (result) {
//            const user = result.user
//            console.log(user)
//          })
        });
  },
  methods: {
    handleSignInGoogle() {
      signInWithPopup(auth, provider)
        .then((result) => {          
          console.log(result)
          // const user = result.user;
          // console.log(result.user.displayName)
          this.user = result.user.displayName;
          this.isSignedIn = true;
        }).catch((error) => {
          console.log(error);
        });
    },
    handleSignInTwitter() {
      signInWithPopup(auth, providerTwitter)
        .then((result) => {          
          this.user = result.user.displayName;
          this.isSignedIn = true;
        }).catch((error) => {
          console.log(error);
        });
    },
    handleSignOut() {
      signOut(auth).then(() => {
          this.user = '';
          this.isSignedIn = false;
        }).catch((error) => {
          console.log(error);
        });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
