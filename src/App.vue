<template>
  <div>
    <div v-if="user">
      <NavUser />
    </div>
    <div v-else>
      <NavG />
    </div>

    <router-view />
  </div>
</template>

<script>

import NavG from "../src/components/NavG";
import NavUser from "../src/components/NavUser";
import firebase from 'firebase'

export default {
  name: "App",
  components: {
    NavG,
    NavUser,
  },
  data(){
    return{
      user:null
    }
},
created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  },
}
</script>

<style></style>
