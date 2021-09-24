<template>

  <v-dialog v-model="dialog2" persistent width="1200"  >
    <v-card>
      <h1>{{this.proyectaux.title}}</h1>
      <p>{{this.proyectaux.description}}</p>
      <v-btn color="primary" @click="dialog2=false" v-on:click="closeProyect">Hola!</v-btn>
    </v-card>

  </v-dialog>
</template>

<script>
//import ProyectsApiService from "../../../src/core/services/proyects-api-service"
export default {
  name: "Myproyect",
  props:[
    'dialog2',
    'idsearch',
    'proyectaux'
  ],
  data:()=>({
    cont:this.idsearch,

  }),
  methods:{
    closeProyect(){
      this.$emit('close-Proyect',this.dialog2)
    },
   /* Getoneproyect(proyect){
      return{
        id:proyect.id,
        title:proyect.title,
        description:proyect.description
      }
    },
    GetinfoProyect(){
      ProyectsApiService.getById(1)
      .then(response=>{

        console.log(response.data.description)

      })
      .catch(e=>{
            console.log(e);
      })
    }
  },
created() {
  console.log(this.idsearch)
    this.GetinfoProyect();
    console.log('www')
  this.GetinfoProyect()
  let comp = this;
  comp.$nextTick(function () {
    console.log(comp.idsearch);
  });*/
}
}
</script>

<style scoped>

</style>