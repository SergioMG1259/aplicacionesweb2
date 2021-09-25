<template>
  <v-app>

    <!--<v-navigation-drawer
        v-model="sidebarMenu"
        app
        floating
        :permanent="sidebarMenu"
        :mini-variant.sync="mini"

    >

      <v-list-item class="px-2" @click="toggleMini = !toggleMini">

        <v-list-item-content class="text-truncate">
          Carol Skelly
        </v-list-item-content>
        <v-btn icon small>
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>-
      <v-divider></v-divider>
      <v-list v-for="item in items" :key="item.title"  class="text-center align-center" >

        <v-btn color="purple" x-large class="white--text"  link :to="item.href">
          {{item.title}}
        </v-btn>

      </v-list>
      <v-btn plain to="/home" >
        hola
      </v-btn>

    </v-navigation-drawer>-->
    <div class="container-app">
      <Sidebar></Sidebar>

      <v-container class="content-view">
        <router-view/>
      </v-container>

    </div>
    <!--<v-main>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-main>-->


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
  .container-app{
    display:flex;
  }
  .content-view{
    overflow-y: auto !important;
  }
</style>
