<template>
  <v-layout>
    <v-app-bar :elevation="0">
      <!-- <template v-slot:prepend>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template> -->
    
      <div class="app-bar__content" style="padding-left: 18px">
        <p>Foxi-web</p>
      </div>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      :rail="rail"
      permanent
      @click="rail = false"
    >
    <div style="padding-left: 18px; padding-top: 15px; padding-bottom: 5px" class="sidebar-container">
      <p>Stay on Top Of Your Work</p>
    </div>
    
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
        title="John Leider"
        nav
      >
        <template v-slot:append>
          <v-btn
            icon="mdi-chevron-left"
            variant="text"
            @click.stop="rail = !rail"
          ></v-btn>
        </template>
      </v-list-item>
      <v-item-group selected-class="bg-primary" mandatory>
        <v-row dense>
          <v-col cols="12" v-for="(item, i) in list" :key="i">
            <v-item density="compact" nav v-slot="{ isSelected, selectedClass, toggle }">
              <v-card flat class="d-flex pa-2">
                <v-icon class="mr-2">
                  {{ item.icon }}
                </v-icon>
                <p>
                  {{ item.name }}
                </p>
              </v-card>
            </v-item>
          </v-col>
        </v-row>
      </v-item-group>
      <!-- <v-list density="compact" nav mandatory="true" v-model="selected">
        <v-list-item v-for="(item, i) in list" active-color="#FF8417" :key="i" :prepend-icon="item.icon" :title="item.name" :value="item.value"></v-list-item>
      </v-list> -->
    </v-navigation-drawer>
    <v-main></v-main>
  </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        selected: 'home',
        drawer: true,
        rail: true,
        list: [
          {
            name: 'Home',
            addable: false,
            icon: 'mdi-home-variant-outline',
            value: 'home'
          },
          {
            name: 'Projects',
            addable: true,
            icon: 'mdi-folder-open-outline',
            value: 'projects'
          },
          {
            name: 'Team',
            addable: true,
            icon: 'mdi-account-multiple-outline',
            value: 'team'
          },
          {
            name: 'Analitics',
            addable: false,
            icon: 'mdi-sine-wave',
            value: 'analitics'
          },
          {
            name: 'Calendar',
            addable: false,
            icon: 'mdi-calendar-blank-outline',
            value: 'calendar'
          },
        ]
      }
    },
  }
</script>

<style>
.v-app-bar {
  border-bottom: 1px solid #e2e2e2 !important; /* Replace with your preferred color */
}
</style>