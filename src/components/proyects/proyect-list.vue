<template>

<v-container grid-list-md>
  <v-btn @click="dialogadd=true" color="purple" class="white--text">Agregar Proyecto</v-btn>
  <v-layout row wrap >
    <v-flex xs12 sm6 v-for="proyect in proyects" :key="proyect.title"  >
          <v-card @click="dialog=true" v-on:click="GetIdProyect(proyect.id), Getproyect()">
            <v-card-title >{{proyect.title}}</v-card-title>
          </v-card>
    </v-flex>
    <!--AGREGAR PROYECTO-->
    <v-dialog v-model="dialogadd" width="800">
      <v-card >
        <v-toolbar color="white" flat>
          <v-spacer></v-spacer>
          <v-btn color="purple" class="white--text" @click="dialogadd=false"><v-icon>
            mdi-close
          </v-icon></v-btn>
        </v-toolbar>
        <v-card-title>
          <span class="text-h5">Nuevo proyecto</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                    label="Título del proyecto"
                    v-model="titleadd"
                    required
                ></v-text-field>
                <small>*indicates required field</small>
                <v-textarea solo name="input-8-4" label="Agregar descripción" v-model="descriptionadd" required>

                </v-textarea>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-btn color="purple" class="white--text" @click="addProyects" v-on:click="dialogadd=false">
            Agregar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <myproyect :dialog2="dialog" @close-Proyect="CloseProyect" :idsearch="indexcurrent"
               :proyectaux="proyectaux2"  @deleteProyect="DeleteMyProyect" @edit-Proyect="EditMyProyect" >
    </myproyect>
  </v-layout>
</v-container>
</template>

<script>
import ProyectsApiService from "../../../src/core/services/proyects-api-service"
import Myproyect from "@/components/proyects/Myproyect";
export default {
  name: "proyect-list",
  components: {Myproyect},
  props:{

  },
  data:()=>({
    proyects:[],
    currentindex:0,
    dialog:false ,
    indexcurrent:null,
    proyectaux2:null,
    dialogadd:false,
    titleadd:'',
    descriptionadd:'',
    proyectarray:null,
    lastid:'',
    lastIdProyect:0,
  }),
  methods:{
    getDisplayProyect(proyect){
      return{
        id:proyect.id,
        title:proyect.title,
        description:proyect.description
      }
    },
    retrieveProyect(){
      ProyectsApiService.getAll()
      .then(response=>{
        this.proyects=response.data.map(this.getDisplayProyect);
        console.log(response.data);
        //console.log(this.proyects.length)
      })
      .catch(e=>{
        console.log(e);
      })
    },
    refreshlist(){
      this.retrieveProyect()
    },
    FindLastId(){
      let find = this.proyects;

      for (let i = 0; i < find.length; i++) {

        for (let j = i; j < find.length; j++) {
          if(find[j].id>find[i].id){
            this.lastid = find[j].id;
          }

        }
      }
    },
    addProyects(){
      this.FindLastId()
      let dato={id:this.lastid+1,title:this.titleadd,description:this.descriptionadd}
      console.log(this.proyects.length+1)
      ProyectsApiService.create(dato)
      .then(this.refreshlist)
      this.titleadd=''
      this.descriptionadd=''
    },
    CloseProyect(dialog2){
      this.dialog=dialog2
    },
    GetIdProyect(item){
      this.indexcurrent=item
    },
    Getproyect(){
      ProyectsApiService.getById(this.indexcurrent)
      .then(response=>{
        this.proyectaux2=response.data
        console.log(response.data)
        console.log(this.proyectaux2.title)
      })
    },
    DeleteMyProyect(indexdelete){
      ProyectsApiService.delete(indexdelete)
      .then(this.refreshlist)
      this.dialog=false
    },
    EditMyProyect(index,date){
      ProyectsApiService.update(index,date)
      .then(this.refreshlist)
    }
  },
  mounted() { /*importante porque aqui carga la lista de proyects*/
    this.retrieveProyect();
  }
}
</script>

<style scoped>

</style>