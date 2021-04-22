<template>
<div class="container-fluid">
  <h2 class="text-center py-5 ">Registro</h2>
  <div class="row justify-content-center ">
    <div  class="col-12  col-sm-12 col-md-4 ">
       <form class=" m-auto p-5 borde" id="signup-form" @submit.prevent="signupRequest">
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
        <input type="password" class="form-control" v-model="user.password" id="password"/>
        </div>

        <div class="d-flex flex-row justify-content-center  ">
            <button v-if="!xhrRequest" type="submit" class="btn btn-primary btn-lg col-sm-12">Registrar</button>
            <button v-if="xhrRequest" type="submit" class="btn btn-primary btn-lg col-sm-12">
              <span class="spinner-border spinner-border-sm"></span>wait...</button>
        </div>
        <div class="form-group text-center">
            <p> ya tienes una cuenta?<router-link class="nav-link " to="/login">Entra</router-link></p>
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


 <style scoped>
.form.group{
 
  margin:0 auto;
}
 .borde{
   border: 2px solid blueviolet; 
  
  
 }

</style>>