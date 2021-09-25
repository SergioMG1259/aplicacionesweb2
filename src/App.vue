<template>
  <v-app>
   
    <div class="container-app">
    <Sidebar></Sidebar>
    
      <v-container class="content-view">
        <router-view/>
      </v-container>

    </div>
    
  </v-app>
</template>
<script>
import Sidebar from "@/components/Sidebar";
export default {
  components: {Sidebar},
  data: () => ({
    //
    items:[{title:'inicio',href:"/home"},{title: 'perfil',href:"profile"},{title: 'notificaciones',href:"/home"},
      {title: 'Mensaje',href:"/about"}
    ]
  }),
}
</script>
<style lang="scss">
  .container-app{
    display:flex;
  }
  .content-view{
    overflow-y: auto !important;
  }
</style>
