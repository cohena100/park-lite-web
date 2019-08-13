<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar color="primary" dark flat>
              <v-toolbar-title>{{
                $t('message.selectRateView.title')
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
                <template v-for="rate in shared.park.area.rates">
                  <v-list-item
                    :id="rate.id"
                    :key="rate.id"
                    @click="selectRate(rate)"
                  >
                    <v-list-item-content>
                      <v-list-item-title class="text-center"
                        >{{ rate.name }}
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider :key="rate.id + '-divider'"></v-divider>
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
import { mapState } from 'vuex'

export default {
  data() {
    return {
      loading: false
    }
  },
  computed: {
    ...mapState(['park', 'shared'])
  },
  methods: {
    selectRate(rate) {
      this.shared.park.rate = rate
      this.loading = true
      this.$store
        .dispatch('park/start')
        .then(() => {
          this.loading = false
          this.$router.push({
            name: 'home'
          })
        })
        .catch(error => {
          this.loading = false
          console.log(error)
        })
    }
  }
}
</script>
