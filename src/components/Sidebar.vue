<template>
  <div class="navigation-drawer-container">
    <v-navigation-drawer class="white accent-4" permanent>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6 title-sidebar">
            <h3 class="font-weight-bold text-center">EasyJobs</h3>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <v-list>
        <v-list-item v-for="item in items" :key="item.title" >
         <v-list-item-content>
            <!--<v-list-item-title>{{ item.title }}</v-list-item-title>-->
            <v-btn  link :to="item.href" color="#7E0B9F" class="button-navigation" large block rounded >
              {{ item.title }}
            </v-btn>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn color="#F80356" class="button-logout" large block rounded >
            SALIR
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "Sidebar",

  data: () => ({
    items: [
      { title: "Inicio",href:"/home" },
      { title: "Perfil",href:"/profile" },
      { title: "Notificaciones",href:"/about" },
      { title: "Mensajes" },
      { title: "Para Practicantes" },
      { title: "Premium" },
    ],
  }),
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
.navigation-drawer-container {
  height: 100vh !important;
  background-color: white !important;
}
h3{
    font-family: 'Pacifico', cursive;
}

.title-sidebar {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:#7E0B9F;
    height: 6pc;
    color:white;
}
.button-navigation {
  color: white !important;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
}
.button-logout {
  font-weight: 700;
  margin-bottom: 30px;
  color: white !important;
  font-family: "Poppins", sans-serif;
}
.v-list-item{
    padding: 0 30px !important;
}

.pa-2{
    padding:8px 30px !important;
}

</style>
