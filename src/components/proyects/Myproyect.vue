<template>

  <v-dialog v-model="dialog2" persistent width="1200"  >
    <v-card>
      <v-toolbar color="white" flat>
        <v-btn color="purple" @click="dialog2=false" v-on:click="closeProyect" class="white--text"><v-icon>
          mdi-close
        </v-icon></v-btn>
        <v-spacer></v-spacer>
        <v-icon x-large color="purple" @click="dialogEdit=true">
          mdi-pencil
        </v-icon>
      </v-toolbar>
      <h1 align="center">{{this.proyectaux.title}}</h1>
      <p>{{this.proyectaux.description}}</p>

      <v-btn color="red" @click="dialogDelete=true">Eliminar </v-btn>
    </v-card>

    <v-dialog v-model="dialogDelete" width="400">
      <v-card>
        <v-btn color="success" @click="DeleteAlert" v-on:click="closeProyect, dialog2=false">
          confirmar
        </v-btn>
        <v-btn @click="dialogDelete=false" color="error">
          cancelar
        </v-btn>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialogEdit" width="550">
      <v-card>
        <v-spacer></v-spacer>
        <v-btn @click="dialogEdit=false" color="purple">
          <v-icon color="white">
            mdi-close
          </v-icon>
        </v-btn>
        <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="10" sm="8" md="10">
              <v-text-field label="Título del proyecto" required color="purple" v-model="titleedit">
              </v-text-field>
              <small>*indicates required field</small>
              <v-textarea solo name="input-12-4" label="Agregar descripción" color="purple" v-model="descriptionedit">
              </v-textarea>
            </v-col>
          </v-row>
          <v-btn color="purple" class="white--text" @click="EditAlert" v-on:click="dialogEdit=false">Guardar cambios</v-btn>
        </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-dialog>
</template>

<script>
//import ProyectsApiService from "../../../src/core/services/proyects-api-service"
export default {
  name: "Myproyect",
  props: {
    dialog2: Boolean,
    idsearch:null,
    proyectaux:null,
    dialogDelete:Boolean,
    dialogEdit:Boolean,
    titleedit: String,
    descriptionedit:String
  },
  data:()=>({
    cont:this.idsearch,
    dialogDelete:false,
    dialogEdit:false,
  }),
  methods:{
    closeProyect(){
      this.$emit('close-Proyect',this.dialog2)
    },
    DeleteAlert(){
      this.$emit('deleteProyect',this.idsearch)
    },

    EditAlert(){
      this.proyectaux.title=this.titleedit
      this.proyectaux.description=this.descriptionedit
      let dateEdit={id:this.proyectaux.id,title:this.proyectaux.title,description:this.proyectaux.description}
      this.$emit('edit-Proyect',this.proyectaux.id,dateEdit)
      console.log(this.titleedit+' '+this.descriptionedit,+' '+this.proyectaux.title)
    }
}
}
</script>

<style scoped>

</style>