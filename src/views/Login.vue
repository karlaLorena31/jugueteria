<template>

  <div class="container-fluid">
      <h1 class="text-center py-5 mt-5 ">Autentificación</h1>
    <div class="row  ">
      <div class="col-12 col-sm-12 col-md-12 col-lg-12 ">
        <form class=" w-50 m-auto p-5 borde" id="signup-form" @submit.prevent="loginUser">
          <div  class="form-group  ">
            <label for="email">Email </label>
            <input type="email" class="form-control " id="email" v-model="user.email" aria-describedby="emailHelp" />          
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" v-model="user.password" id="password" />
          </div>   
          <div class="d-flex flex-row justify-content-center  " >
            <button  v-if="!xhrRequest"  class="btn btn-primary btn-lg  col-sm-12  ">Login</button>

          <button  v-if="xhrRequest"  class="btn btn-primary btn-lg  col-sm-12 ">
              <span class="spinner-border spinner-border-sm"></span>
              wait...
          </button>
            </div>       
          <div class="form-group  text-center">
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
            this.$router.push('/listado')   //replace hace lo mismo pero router te deja historial
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

<style scoped>
.form.group{
 
  margin:0 auto;
}
 .borde{
   border: 2px solid blueviolet; 
  
  
 }

</style>>



