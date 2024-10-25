<template>
  <v-layout>
    <div class="d-flex">
      <v-navigation-drawer
      v-model="drawer"
      :rail="rail"
      width="250"
      color="#ff8417"
      permanent
      @click="rail = false">
      <!-- <v-list-item
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
      </v-list-item> -->
      <div class="navigation-container">
        <div>
          <v-img src="images/icon/logo.png" max-height="32" style="margin-top: 9px"></v-img>
          <v-item-group selected-class="bg-primary" v-model="navigationMenu" mandatory class="mt-4">
            <v-row dense>
              <v-col cols="12" v-for="(item, i) in list" :key="i">
                <v-item density="compact" nav v-slot="{ isSelected, toggle }">
                  <v-card
                    flat
                    color="transparent"
                    :class="rail ? 'justify-center' : ''"
                    class="d-flex align-center pa-2"
                    @click="toggle">
                    <v-icon class="ml-3" :color="isSelected ? '#ffffff' : '#ffd7b3'">
                      {{ item.icon }}
                    </v-icon>
                    <p
                      v-if="!rail"
                      class="ml-4"
                      :class="isSelected ? 'list-title__active' : 'list-title'">
                      {{ item.name }}
                    </p>
                  </v-card>
                </v-item>
              </v-col>
            </v-row>
          </v-item-group>
        </div>
        <div class="bottom-container">
          <v-card flat color="transparent" class="pa-2 d-flex align-center">
            <v-icon color="#ffffff">mdi-logout</v-icon>
            <p class="bottom-title ml-4">Logout</p>
          </v-card>
        </div>
      </div>
      <!-- <v-list density="compact" nav mandatory="true" v-model="selected">
        <v-list-item v-for="(item, i) in list" active-color="#FF8417" :key="i" :prepend-icon="item.icon" :title="item.name" :value="item.value"></v-list-item>
      </v-list> -->
      </v-navigation-drawer>
      <div style="max-height: 70px; position: sticky; top: 0; z-index: 99; width: 100vw; background-color: white; border-bottom: 1px solid #ffecdb;">
        <div class="navbar-content"></div>
      </div>
    <!-- <v-main></v-main> -->
    </div>
  </v-layout>
</template>

<script>
  export default {
    name: "navigationComponent",
    data() {
      return {
        navigationMenu: 0,
        selected: "home",
        drawer: true,
        rail: false,
        list: [
          {
            name: "Home",
            addable: false,
            icon: "mdi-home-variant-outline",
            value: "home",
          },
          {
            name: "Projects",
            addable: true,
            icon: "mdi-folder-open-outline",
            value: "projects",
          },
          {
            name: "Team",
            addable: true,
            icon: "mdi-account-multiple-outline",
            value: "team",
          },
          {
            name: "Analitics",
            addable: false,
            icon: "mdi-sine-wave",
            value: "analitics",
          },
          {
            name: "Calendar",
            addable: false,
            icon: "mdi-calendar-blank-outline",
            value: "calendar",
          },
        ],
      };
    },
    methods: {
      toggleDrawer() {
      this.drawer = !this.drawer;
      },
      checkWidth() {
        this.drawer = window.innerWidth > 1100;
      }
    },
    mounted() {
      window.addEventListener('resize', this.checkWidth);
      this.checkWidth(); // Check on mount
    },
    beforeUnmount() {
      window.removeEventListener('resize', this.checkWidth);
    },
  }
</script>

<style>
  .v-field--variant-solo-filled {
    box-shadow: none !important;
  }
</style>

<style lang="scss" scoped>
  @import "./style.scss";
</style>
