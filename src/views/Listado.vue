<template>
  <div class="container-fluid mt-5">
      <div class="col-lg-12 mt-5 ">
            <h5 class="pt-4 ">Listado</h5>
            <hr>
        </div> 
    <div class="row justify-content-end">
      <div class="col-md-12 col-12 mb-5 ">
        <h3 class="mt-5 text-center">Listado de Juguetes disponibles</h3>
         <button  class="btn btn-success "><router-link class="text-white" :to="{name:'Add'}">Agregar</router-link></button>  
          
        <hr>
      </div>
    </div>
  <div class="row">
      <div class="col-md-12 col-12">
          <table class="table  table-hover text-center">
              <thead>
                   <tr>
                  <th>Código</th>
                  <th>Nombre</th>
                  <th>Stock</th>
                  <th>Precio</th>
              </tr>
              </thead>
              <tbody class="table-success text-center ">
                  <tr v-for="(juguete,index) in Juguetes" :key="index">
                      <td><b>A000{{index +1}}</b></td>
                      <td>{{juguete.name}}</td>
                      <td>{{juguete.stock}}</td>
                       <td>{{juguete.price}}</td>
                      <td class="text-center">                        
                            <!--  <router-link class="btn btn-primary">Editar</router-link>-->
                            <button  class="btn btn-success">Editar</button>  
                            <button @click.prevent="deleteUser(juguete.key)" class="btn btn-danger ml-5">Eliminar</button>                        
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
  </div>
  </div>
</template>

<script>

import { db } from '../main.js'  

export default {
    name:'List',
    data(){
        return{
            Juguetes:[],                    
        }
    },

    created(){
        db.collection('juguetes').onSnapshot((snapshotChange)=> {
            this.Juguetes= []
            snapshotChange.forEach((doc) => {
                this.Juguetes.push({
                    key:doc.id,
                   // cod:doc.data().cod,
                    name:doc.data().name,
                    stock:doc.data().stock,
                    price:doc.data().price
                })
                
            });

            this.Juguetes.sort()
        })
    },

    methods:{
        deleteUser(id){
            if(window.confirm('Esta seguro eliminar?')){
                db.collection('juguetes').doc(id).delete().then(()=>{
                    console.log("Juguete eliminado!!!!")
                })
                .catch((err)=> console.error(err))
            }
        }
    },

}
</script>
