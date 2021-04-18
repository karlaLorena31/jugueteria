<template>
  <div class="container-fluid py-5 fondo mt-5">
    <h1 class="text-center">Registro</h1>
    <div class="row  ">
      <div class="col-sm-12 ">
        <form
          class="w-50 m-auto p-5 "
          id="signup-form"
          @submit.prevent="signupRequest"
        >

        <div class="form-group  ">
            <label for="nombre">Nombre </label>
            <input type="text" class="form-control " id="nombre" v-model="user.name"/>
            </div>
          <div class="form-group  ">
            <label for="email">Email </label>
            <input type="email" class="form-control " id="email" v-model="user.email" aria-describedby="emailHelp"/>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              class="form-control"
              v-model="user.password"
              id="password"
            />
          </div>

          <div class="d-flex flex-row justify-content-center  ">
            <button
              v-if="!xhrRequest"
              type="submit"
              class="btn btn-primary btn-lg col-sm-4"
            >
              Registrar
            </button>
            <button
              v-if="xhrRequest"
              type="submit"
              class="btn btn-primary btn-lg col-sm-4"
            >
              <span class="spinner-border spinner-border-sm"></span>
              wait...
            </button>
          </div>
          <div class="form-group text-center">
            <p>
              ya tienes una cuenta?
              <router-link class="nav-link " to="/login">Entra</router-link>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Registro",
  data() {
    return {
      user:{
      name: '',
      email: " ",
      password: " ",

      },
     
      xhrRequest: false,
    };
  },

  methods: {
    signupRequest() {
      this.xhrRequest = true;

      firebase.auth().createUserWithEmailAndPassword(this.user.email, this.user.password)
        .then((res) => {
            // this.xhrRequest= true
            alert("Registro completado");
            res.user.updateProfile({
                                     displayName: this.user.name
                                  }).then(() => {
                                                  this.$router.push('/login')

                                                });
                    },

          (err) => {
            this.xhrRequest = false;
            alert(`Error -${err.message}`);
          }
        );
    },
  },
};
</script>


 