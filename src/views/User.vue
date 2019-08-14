<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar color="primary" dark flat>
              <v-toolbar-title>{{
                $t('message.userView.title')
              }}</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn icon id="homeButton" @click="homeClick">
                <v-icon>mdi-car</v-icon>
              </v-btn>
            </v-toolbar>
            <v-list>
              <v-list-item class="blue">
                <v-list-item-content>
                  <v-list-item-title></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-divider></v-divider>
              <v-list-item class="orange">
                <v-list-item-content>
                  <v-list-item-title></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-divider></v-divider>
              <v-list-item class="blue">
                <v-list-item-content>
                  <v-list-item-title></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-divider></v-divider>
              <template v-if="!loading">
                <v-list-item id="addCarListItem" @click="addCarClick">
                  <v-list-item-content>
                    <v-list-item-title class="text-center">{{
                      $t('message.userView.addCarListItem')
                    }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item id="removeCarListItem" @click="removeCarClick">
                  <v-list-item-content>
                    <v-list-item-title class="text-center">{{
                      $t('message.userView.removeCarListItem')
                    }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item id="logoutListItem" @click="logoutClick">
                  <v-list-item-content>
                    <v-list-item-title class="text-center">{{
                      $t('message.userView.logoutListItem')
                    }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
              </template>
              <v-list-item v-else>
                <v-list-item-content>
                  <v-progress-circular
                    indeterminate
                    color="primary"
                  ></v-progress-circular>
                </v-list-item-content>
              </v-list-item>
              <v-divider></v-divider>
              <v-list-item class="blue">
                <v-list-item-content>
                  <v-list-item-title></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-divider></v-divider>
              <v-list-item class="orange">
                <v-list-item-content>
                  <v-list-item-title></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-divider></v-divider>
              <v-list-item class="blue">
                <v-list-item-content>
                  <v-list-item-title></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  data() {
    return {
      loading: false
    }
  },
  methods: {
    addCarClick() {
      this.$router.push({
        name: 'car'
      })
    },
    removeCarClick() {
      this.$router.push({
        name: 'selectCar',
        params: { appContext: 'removeCar' }
      })
    },
    logoutClick() {
      this.loading = true
      this.$store
        .dispatch('user/logout')
        .then(() => {
          this.loading = false
          location.reload()
        })
        .catch(error => {
          this.loading = false
          console.log(error)
          location.reload()
        })
    },
    homeClick() {
      this.$router.push({
        name: 'home'
      })
    }
  }
}
</script>
