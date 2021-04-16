<template>

<div class="container mt-5">

<div  class="row justify-content-center mt-5">
  <div class="col-md-6 justify-content-center">
    <h3 class="text-left mt-5"> Agregar Productos</h3>

    <form @submit.prevent="onFormSubmit">

      
<!--  <div class="form-group">
    <label  >Código</label>
    <input type="text" class="form-control" id="n1" v-model="juguete.cod" required placeholder="A000X"/>  
  </div>-->

  <div class="form-group">
    <label  >Nombre Producto</label>
    <input type="text" class="form-control" required v-model="juguete.name" >
    
  </div>

  <div class="form-group">
    <label >Stock</label>
    <input type="number" class="form-control" v-model="juguete.stock">
  </div>
  <div class="form-group">
    <label >Precio</label>
    <input type="number" class="form-control" v-model="juguete.price">
  </div>


   <div class="form-group">
    <button  class="btn btn-success" >Agregar</button>
    <button class="btn btn-success ml-3 "> <router-link class="text-white " to='/listado'>Cancelar</router-link></button>
  </div>
   
</form>
    
  </div>
</div>
</div>
</template>

<script>



//import firebase from 'firebase'
import {db} from '../main.js'

export default {
  name:'Add',
  data(){
    return{
      juguete:{}
    }
  },

  methods:{

    onFormSubmit(event){
      event.preventDefault()
    
        db.collection('juguetes').add(this.juguete).then(()=>{
        alert("Juguete ingresado al listado")
        this.$router.push('/listado')
        //this.juguete.cod= '' 
        this.juguete.name= ''
        this.juguete.stock= ''
        this.juguete.price= ''
      }).catch(err => console.log(err));
          
    }
  }
}
</script>

<style  scoped>

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>>


