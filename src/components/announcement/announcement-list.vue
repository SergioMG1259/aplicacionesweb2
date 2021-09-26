<template >
<v-container>
  <h1 class="titlePract">Anuncios para practicantes</h1>
  <v-btn color="purple" class="white--text">Ordenar por fecha</v-btn>
  <!--<v-row>
    <v-col cols="12" md="10" v-for="announcement in announcements" :key="announcement.key">
      <v-card >
        <v-card-title class="purple--text text--accent-3">{{announcement.titleAnnouncement}}</v-card-title>
        <v-card-subtitle>{{announcement.especialty+' | '+announcement.experience}}</v-card-subtitle>
        <v-card-text >{{announcement.infoJob}}</v-card-text>
        <v-card-actions>
          <v-btn>Postular</v-btn>
          <v-spacer></v-spacer>
          <v-btn>Más información</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>

  </v-row>-->
  <!--<v-list class="overflow-auto" v-for="announcement in announcements" :key="announcement.key">
    <v-card >
      <v-card-title class="purple--text text--accent-3">{{announcement.titleAnnouncement}}</v-card-title>
      <v-card-subtitle>{{announcement.especialty+' | '+announcement.experience}}</v-card-subtitle>
      <v-card-text >{{announcement.infoJob}}</v-card-text>
      <v-card-actions>
        <v-btn>Postular</v-btn>
        <v-spacer></v-spacer>
        <v-btn>Más información</v-btn>
      </v-card-actions>
    </v-card>
  </v-list>-->
  <div>
    <v-card
        elevation="10"
        class="mx-auto"
        width="800"
    >
      <v-virtual-scroll
          :items="announcements"
          height="600"
          item-height="10"
          :bench="0"
      >
        <v-list-item v-for="announcement in announcements" :key="announcement.key">
         <v-card width="800" class="ma-3">
           <v-card-title class="purple--text text--accent-3">{{announcement.titleAnnouncement}}</v-card-title>
           <v-card-subtitle>{{announcement.especialty+' | '+announcement.experience}}</v-card-subtitle>
           <v-card-text >{{announcement.infoJob}}</v-card-text>
           <v-card-actions>
             <v-btn>Postular</v-btn>
             <v-spacer></v-spacer>
             <v-btn>Más información</v-btn>
           </v-card-actions>
         </v-card>
        </v-list-item>

      </v-virtual-scroll>
    </v-card>
  </div>
</v-container>
</template>

<script>
import AnnouncementApiService from "../../../src/core/services/announcements-api-service"
export default {
  name: "announcement-list",
  data:()=>({
    announcements:[],
  }),
  methods:{
    getDisplayAnnouncement(announcement){
      return{
        idAnnouncement:announcement.idAnnouncement,
        titleAnnouncement:announcement.titleAnnouncement,
        especialty: announcement.especialty,
        experience:announcement.experience,
        infoJob: announcement.infoJob,
        date: announcement.date,
        applicants:announcement.applicants
      }
    },
    retrieveAnnouncement(){
      AnnouncementApiService.getAllAnnouncement()
      .then(response=>{
        this.announcements=response.data.map(this.getDisplayAnnouncement);
        console.log(response.data)
      })
      .catch(e=>{
            console.log(e);
      })
    }
  },

  mounted() {
    this.retrieveAnnouncement();
  }
}
</script>

<style scoped>
.titlePract{
  color: purple;
  text-align: center;
}
</style>