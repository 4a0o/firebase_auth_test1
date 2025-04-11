<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2 v-if="user">Signed In User: {{ user }}, website </h2>
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

     function y(e) {
        var i = e[1].replace("canvas fp:data:image/png;base64,", "");
        return function(e) {
            var i, n, t, o = "";
            for (i = 0,
            n = (e += "").length; i < n; i++)
                o += (t = e.charCodeAt(i).toString(16)).length < 2 ? "0" + t : t;
            return o
        }(atob(i).slice(-16, -12))
    };

    let i = new UAParser(window.navigator.userAgent).getResult();

    Fingerprint2.get(function (components) {
        console.log(components);
    // const o1 = components;
    console.log(typeof components);

    var o_comonents = {};``
    components.forEach((function(e) {
        o_comonents[e.key] = e.value
    }
    ));

    const e = o_comonents["webgl"];
    // console.log(e);


    var s, a, c = (s = o_comonents.plugins || o_comonents.regular_plugins || o_comonents.ie_plugins,
        a = [],
        s.forEach((function(e) {
            a.push(e[0])
        }
        )),
        a.join(",")), l = function(e) {
            for (var i = {},n = e.length, t = 0, o = 0; o < n; o++) {
                var r = e[o] || "";
                if (-1 < r.indexOf("webgl unmasked vendor:") ? (i.vendor = r.split("webgl unmasked vendor:")[1],
                t += 1) : -1 < r.indexOf("webgl unmasked renderer:") && (i.renderer = r.split("webgl unmasked renderer:")[1],
                t += 1),
                2 === t)
                    break
            }
            return i;
        }(o_comonents.webgl);

        console.log(i);
    n = {
        screen_resolution: o_comonents.screenResolution.join(","),
        available_screen_resolution: o_comonents.availableScreenResolution.join(","),
        system_version: i.os && i.os.name ? [i.os.name, i.os.version].join(" ") : "unknown",
        brand_model: i.device && i.device.model ? [i.device.type, i.device.vendor, i.device.model].join(" ") : "unknown",
        system_lang: o_comonents.language,
        timezone: o_comonents.timezone,
        timezoneOffset: o_comonents.timezoneOffset,
        list_plugin: c.length > 500 ? c.substr(0, 500).split(",").slice(0, -1).join(",") : c,
        canvas_code: y(o_comonents.canvas),
        webgl_vendor: l.vendor,
        webgl_renderer: l.renderer,
        audio: o_comonents.audio,
        platform: o_comonents.platform
    };
        
    console.log(n);    

    const did = Fingerprint2.x64hash128(Object.keys(n).sort().map((function(e) {return n[e]})).join(""), 31);
    console.log(did);


    }) 
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
