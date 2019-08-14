<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar color="primary" dark flat>
              <v-toolbar-title>{{
                $t('message.carView.title')
              }}</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  id="carTextField"
                  :hint="$t('message.carView.hint')"
                  autofocus
                  v-model.trim="shared.addCar.number"
                  counter="8"
                  clearable
                  prepend-icon="directions_car"
                  type="text"
                  :error-messages="allErrors"
                  required
                  @blur="$v.shared.addCar.number.$touch()"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn id="carButton" color="primary" @click="carClick">{{
                $t('message.carView.continue')
              }}</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import { mapState } from 'vuex'
import {
  required,
  numeric,
  minLength,
  maxLength
} from 'vuelidate/lib/validators'

export default {
  computed: {
    allErrors() {
      const errors = []
      if (!this.$v.shared.addCar.number.$dirty) {
        return errors
      }
      if (
        !this.$v.shared.addCar.number.numeric ||
        !this.$v.shared.addCar.number.required ||
        !this.$v.shared.addCar.number.minLength
      ) {
        errors.push(this.$t('message.carView.errorMin'))
      }
      if (!this.$v.shared.addCar.number.maxLength) {
        errors.push(this.$t('message.carView.errorMax'))
      }
      return errors
    },
    ...mapState(['shared'])
  },
  methods: {
    carClick() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.$router.push({
          name: 'nickname'
        })
      }
    }
  },
  validations: {
    shared: {
      addCar: {
        number: {
          required,
          numeric,
          minLength: minLength(5),
          maxLength: maxLength(8)
        }
      }
    }
  }
}
</script>
