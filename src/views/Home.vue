<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar color="primary" dark flat>
              <v-toolbar-title>{{
                $t('message.homeView.title')
              }}</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn icon id="userButton" @click="userClick">
                <v-icon>mdi-account-circle</v-icon>
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
                <v-list-item
                  id="addCarListItem"
                  v-if="!hasCars"
                  @click="addCarClick"
                >
                  <v-list-item-content>
                    <v-list-item-title class="text-center">{{
                      $t('message.homeView.addCarListItem')
                    }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <template v-else>
                  <v-list-item
                    id="paymentListItem"
                    v-if="isPayment"
                    @click="paymentClick"
                  >
                    <v-list-item-content>
                      <v-list-item-title class="text-center">{{
                        $t('message.homeView.paymentListItem')
                      }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item
                    id="stopParkingListItem"
                    v-else-if="isParking"
                    @click="endParkingClick"
                  >
                    <v-list-item-content>
                      <v-list-item-title class="text-center">{{
                        $t('message.homeView.stopParkingListItem')
                      }}</v-list-item-title>
                      <v-list-item-subtitle class="text-center">
                        {{ parkingCar.nickname }} (
                        {{ parkingCar.car.number }} )
                      </v-list-item-subtitle>
                      <v-list-item-subtitle class="text-center">
                        {{ db.user.parking.cityName }}
                      </v-list-item-subtitle>
                      <v-list-item-subtitle class="text-center">
                        {{ db.user.parking.areaName }}
                      </v-list-item-subtitle>
                      <v-list-item-subtitle class="text-center">
                        {{ db.user.parking.rateName }}
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item
                    id="startParkingListItem"
                    v-else
                    @click="startParkingClick"
                  >
                    <v-list-item-content>
                      <v-list-item-title class="text-center">{{
                        $t('message.homeView.startParkingListItem')
                      }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </template>
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
import { mapGetters, mapState } from 'vuex'

export default {
  data() {
    return {
      loading: false
    }
  },
  props: {
    appContext: {
      type: String
    }
  },
  computed: {
    ...mapState(['db', 'shared']),
    ...mapGetters('db', ['hasCars', 'isParking', 'parkingCar', 'isPayment'])
  },
  methods: {
    addCarClick() {
      this.$router.push({
        name: 'car'
      })
    },
    startParkingClick() {
      this.$router.push({
        name: 'selectCar',
        params: { appContext: 'park' }
      })
    },
    endParkingClick() {
      this.loading = true
      this.$store
        .dispatch('park/end')
        .then(() => {
          this.loading = false
        })
        .catch(error => {
          this.loading = false
          console.log(error)
        })
    },
    paymentClick() {
      this.$router.push({
        name: 'payment'
      })
    },
    userClick() {
      this.$router.push({
        name: 'user'
      })
    }
  },
  created() {
    if (this.appContext === 'paymentSuccess') {
      this.$store.commit('db/updateParkingPaymentData')
    }
  }
}
</script>
