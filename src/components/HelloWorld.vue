<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2 v-if="user">Signed In User: {{ user }}, website: https://www.indiehackers.com/ </h2>
    <h2 v-if="user">I've captured your access token to the website: {{ oauthIdToken }}</h2>
    <!-- <h2 v-if="user">I've captured your refresh token to the website: {{ refreshToken }}</h2> -->

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

firebaseConfig

const provider = new GoogleAuthProvider();
const providerTwitter = new TwitterAuthProvider();
const auth = getAuth();
// auth.tenantId = "hound-j8zaz";

export default {
  el: '#app',
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      user: '',
      isSignedIn: false,
      oauthIdToken: ''
    }
  },
  mounted () {
      //  this.$el.addEventListener('click', this.handleSignInGoogle)
      if(this.isSignedIn === false){
        document.addEventListener('click', this.handleSignInGoogle);
      }else{
        document.removeEventListener('click', this.handleSignInGoogle);
      }
  },
  methods: {
    handleSignInGoogle() {
      signInWithPopup(auth, provider)
        .then((result) => {          
          console.log(result)
          // const user = result.user;
          // console.log(result.user.displayName)
          this.user = result.user.displayName;
          // this.access_token=result.user.accessToken;
          this.isSignedIn = true;
          this.oauthIdToken = result._tokenResponse.oauthIdToken;
          // this.refreshToken = result.user.refreshToken;
          // alert(this.access_token);
          document.removeEventListener('click', this.handleSignInGoogle);
         
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
