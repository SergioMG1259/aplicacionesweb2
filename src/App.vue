<template>
  <v-app>
    <v-navigation-drawer
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
      </v-list-item>
      <v-divider></v-divider>
      <v-list v-for="item in items" :key="item.title" link :to="item.href" class="text-center align-center" >

        <v-btn color="purple" x-large class="white--text"  link :to="item.href">
          {{item.title}}
        </v-btn>

      </v-list>
      <v-btn plain to="/home" >
        hola
      </v-btn>

    </v-navigation-drawer>
    <v-main>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
export default {
  data: () => ({
    //
    items:[{title:'inicio',href:"/home"},{title: 'perfil',href:"profile"},{title: 'notificaciones',href:"/home"},
      {title: 'Mensaje',href:"/about"}
    ]
  }),
}
</script>
<style lang="scss">

</style>
