<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar color="primary" dark flat>
              <v-toolbar-title>{{
                $t('message.selectCarView.title')
              }}</v-toolbar-title>
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
                <v-list-item
                  v-for="car in db.user.cars"
                  :id="car.car.number"
                  :key="car.car.number"
                  @click="selectCar(car)"
                >
                  <v-list-item-content>
                    <v-list-item-title class="text-center"
                      >{{ car.car.number }} ({{ car.nickname }})
                    </v-list-item-title>
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
              </template>
              <v-list-item v-else>
                <v-list-item-content>
                  <v-progress-circular
                    indeterminate
                    color="primary"
                  ></v-progress-circular>
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
import { mapState } from 'vuex'

export default {
  data() {
    return {
      loading: false
    }
  },
  props: {
    appContext: {
      type: String,
      default: 'park'
    }
  },
  computed: {
    ...mapState(['db', 'shared'])
  },
  methods: {
    selectCar(car) {
      if (this.appContext === 'park') {
        this.shared.park.car = car
        this.$router.push({
          name: 'selectCity'
        })
      } else if (this.appContext === 'removeCar') {
        this.loading = true
        this.shared.removeCar = car
        this.$store
          .dispatch('user/removeCar')
          .then(() => {
            this.loading = false
            this.$router.push({
              name: 'user'
            })
          })
          .catch(error => {
            this.loading = false
            console.log(error)
          })
      }
    }
  }
}
</script>
