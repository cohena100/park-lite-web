<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar color="primary" dark flat>
              <v-toolbar-title>{{
                $t('message.selectCityView.title')
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
              <template v-for="city in db.geoPark.cities">
                <v-list-item
                  :id="city.id"
                  :key="city.id"
                  @click="selectCity(city)"
                >
                  <v-list-item-content>
                    <v-list-item-title class="text-center"
                      >{{ city.name }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-divider :key="city.id + '-divider'"></v-divider>
              </template>
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
  computed: {
    ...mapState(['db', 'shared'])
  },
  methods: {
    selectCity(city) {
      this.shared.park.city = city
      this.$router.push({
        name: 'selectArea'
      })
    }
  }
}
</script>
