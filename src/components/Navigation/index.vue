<template>
  <v-layout>
    <v-app-bar :elevation="0" height="75" >
      <!-- <template v-slot:prepend>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template> -->

      <div class="app-bar__content d-flex align-center">
        <v-img
          height="32"
          width="32"
          contain
          src="/images/logo.png"
          class="ml-7 mr-4"></v-img>
        <p class="title-content">Foxi Dashboard</p>
      </div>
      <div style="min-width: 450px" class="d-flex align-center ml-8">
        <v-row dense>
          <v-col cols="12">
            <v-autocomplete
              :items="items"
              append-inner-icon="mdi-magnify"
              class="mx-auto"
              density="compact"
              menu-icon=""
              elevation="0"
              placeholder="Search Google or type a URL"
              theme="light"
              variant="solo-filled"
              hide-details
              auto-select-first
              item-props
              rounded>
            </v-autocomplete>
          </v-col>
        </v-row>
      </div>
      <v-spacer></v-spacer>
      <div class="mr-7 d-flex align-center">
        <div
          style="
            height: 40px;
            min-width: 40px;
            border-radius: 50%;
            background-color: #f6f6f6;
          "
          class="d-flex align-center justify-center mr-4">
          <v-icon size="20" color="#4f4f4fe5">mdi-cog-outline</v-icon>
        </div>
        <div
          style="
            height: 40px;
            min-width: 40px;
            border-radius: 50%;
            background-color: #f6f6f6;
          "
          class="d-flex align-center justify-center mr-4">
          <v-icon size="20" color="#4f4f4fe5">mdi-bell-outline</v-icon>
        </div>
        <div
          style="
            height: 40px;
            width: 100%;
            border-radius: 40px;
            background-color: #f6f6f6;
          "
          class="pl-4 pr-4 d-flex align-center justify-center">
          <div class="pr-4">
            <p class="list-title">Dwi Andika</p>
            <p class="list-title__sub">Admin</p>
          </div>
          <v-img
            height="20"
            width="20"
            contain
            src="images/male/variant-1.png"></v-img>
        </div>
      </div>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      :rail="rail"
      width="280"
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
        <v-item-group selected-class="bg-primary" v-model="navigationMenu" mandatory class="mt-4">
          <v-row dense>
            <v-col cols="12" v-for="(item, i) in list" :key="i">
              <v-item density="compact" nav v-slot="{ isSelected, toggle }">
                <v-card
                  flat
                  style="border-radius: 50px;"
                  :class="rail ? 'justify-center' : ''"
                  class="d-flex align-center pa-2 ml-4 mr-4 mb-2"
                  @click="toggle"
                  :color="isSelected ? '#ff83171f' : '#ffffff'">
                  <v-icon class="ml-3" :color="isSelected ? '#ff8417' : '#4f4f4fe5'">
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
        <div class="bottom-container ma-4">
          <v-card flat class="pa-2 d-flex align-center">
            <v-icon color="#4f4f4fe5">mdi-logout</v-icon>
            <p class="bottom-title ml-4">Logout</p>
          </v-card>
        </div>
      </div>
      <!-- <v-list density="compact" nav mandatory="true" v-model="selected">
        <v-list-item v-for="(item, i) in list" active-color="#FF8417" :key="i" :prepend-icon="item.icon" :title="item.name" :value="item.value"></v-list-item>
      </v-list> -->
    </v-navigation-drawer>
    <v-main></v-main>
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
  };
</script>

<style>
  .v-field--variant-solo-filled {
    box-shadow: none !important;
  }
</style>

<style lang="scss" scoped>
  @import "./style.scss";
</style>
