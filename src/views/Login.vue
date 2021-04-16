<template>
 
  <div class="container py-5 mt-5 fondo">
      <h1 class="text-center">Autentificación</h1>
    <div class="row  ">
      <div class="col-sm-12 ">
        <form class="w-50 m-auto p-5 " id="signup-form" @submit.prevent="loginUser">
          <div  class="form-group  ">
            <label for="email">Email </label>
            <input type="email" class="form-control " id="email" v-model="user.email" aria-describedby="emailHelp" />
           
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" v-model="user.password" id="password" />
          </div>   
          <div class="d-flex flex-row justify-content-center  " >
            <button  v-if="!xhrRequest"  class="btn btn-primary btn-lg col-sm-4 ">Login</button>

          <button  v-if="xhrRequest"  class="btn btn-primary btn-lg col-sm-4">
              <span class="spinner-border spinner-border-sm"></span>
              wait...
          </button>
            </div>       
          

          <div class="form-group d-flex flex-row justify-content-center text-center">
              <p> No tienes una cuenta? <router-link class="nav-link " to="/registro">Registrate</router-link> </p>

          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {

    name: 'Login',

    data(){
        return{

          user:{ email:' ',
              password:' '
            },          
            xhrRequest:false
        }    
    },
    methods:{

        loginUser() {

        this.xhrRequest= true
        firebase
        .auth()
        .signInWithEmailAndPassword(this.user.email, this.user.password)
        .then(() => {
           this.xhrRequest= false
            alert("Autorizado")
            this.$router.replace('/listado')   //replace hace lo mismo pero router te deja historial
        })
        .catch((error) => {
           this.xhrRequest= false
          //alert(`Error :Ud no esta autorizado!!!!!!!`)
          alert(error.message);
        });
    }
    }  

    }


</script>

<style>

</style>