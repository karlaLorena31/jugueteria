<template>
  <div class="row">
      <div class="col-md-12 col-12">
        <table class="table  table-hover text-center">
          <thead>
            <tr>
             
              <th>Código</th>
              <th>Nombre</th>
              <th>Stock</th>
              <th>Precio</th>
              <th>Editar</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody class="table-success text-center ">
            <tr v-for="(juguete) in Juguetes" :key="juguete.key " >            
               
              <td>
                <b>{{ juguete.cod }}</b>
              </td>
              <td>{{ juguete.name }}</td>
              <td>{{ juguete.stock }}</td>
              <td>${{ juguete.price }}</td>
              <td class="text-center">
                     <router-link :to="{name:'UserEdit',params:{id:juguete.key}}" class="btn btn-success boton"> ✔️</router-link>
              </td>
              <td>
                <button
                  @click.prevent="deleteUser(juguete.key)"
                  class="btn btn-danger boton"
                >
               ❌
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer/>
    </div>
</template>

<script>
import { db } from "../main.js";


export default {
  name: "List",
  

  data() {
    return {
      Juguetes: [],
    
    };
  },

  created() {
    db.collection("juguetes").onSnapshot((snapshotChange) => {
      this.Juguetes = [];
      snapshotChange.forEach((doc) => {
        this.Juguetes.push({
          key: doc.id,
          cod:doc.data().cod,
          name: doc.data().name,
          stock: doc.data().stock,
          price: doc.data().price,
        });
      });
    });
  },

  methods: {
    deleteUser(id) {
      if (window.confirm("Esta seguro eliminar?")) {
        db.collection("juguetes")
          .doc(id)
          .delete()
          .then(() => {
            alert("Juguete eliminado!!!!");
          })
          .catch((err) => console.error(err));
      }
    },

    // onFormSubmit(event) {
    //   event.preventDefault();
    //   const message = window.confirm("Esta seguro de agregar producto?");
    //   if (message == true) {
    //     db.collection("juguetes")
    //       .add(this.juguete)
    //       .then(() => {
    //         alert("Juguete ingresado al listado");
    //         //this.juguete.cod= ''
    //         this.juguete.name = "";
    //         this.juguete.stock = "";
    //         this.juguete.price = "";
    //       })
    //       .catch((err) => console.log(err));
    //   }
    // },
  },
};
</script>

<style scoped>
.boton{
  width: 30%;
  height: 30%;
}
</style>