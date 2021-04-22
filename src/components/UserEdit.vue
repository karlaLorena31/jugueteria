<template>
<div class="container-fluid ">

<div  class="row justify-content-center ">
  <div class="col-md-6">
    <h3 class="text-left mt-5"> Editar </h3>

    <form @submit.prevent="onUpdateForm">

                        <div class="form-group">
                          <label>Codigo</label>
                          <input
                            type="text"
                            class="form-control"
                            required
                            v-model="juguete.cod"
                          />
                        </div>
                        <div class="form-group">
                          <label>Nombre Producto</label>
                          <input
                            type="text"
                            class="form-control"
                            required
                            v-model="juguete.name"
                          />
                        </div>

                        <div class="form-group">
                          <label>Stock</label>
                          <input 
                            type="number"
                            class="form-control"
                            required
                            v-model="juguete.stock"
                          />
                        </div>
                        <div class="form-group">
                          <label>Precio</label>
                          <input
                            type="number"
                            class="form-control"
                            required
                            v-model="juguete.price"
                          />
                        </div>

                        <div class="form-group">
                          <button class="btn btn-success mr-3">Editar</button>                          
                        </div>
                      </form>
    
  </div>
</div>
</div>
  
</template>

<script>

import {db} from '../main.js'

export default {
  name: 'UserEdit',

    data(){
        return{
            juguete:{}
        }
    },

    created(){

        let dbRef=db.collection('juguetes').doc(this.$route.params.id);
        dbRef.get().then((doc)=>{
            this.juguete=doc.data();
        }).catch((error)=> console.log(error))
    },

    methods:{

        onUpdateForm(event){

            event.preventDefault()


            if(this.juguete.stock >0){
               const message = window.confirm("Esta seguro de editar producto?");

            if(message ===true){db.collection('juguetes').doc(this.$route.params.id).update(this.juguete).then(
                ()=>{
                    alert('Se actualizó correctamente!!')
                    this.$router.push("/listado")
                    
                }
            ).catch((error)=> console.log(error))}
            else {
              this.$router.push("/listado")
            }
            }else{
              alert("No se puede modificar stock 0")
              this.$router.push("/listado")
            }
           
        }

    },

}
</script>






