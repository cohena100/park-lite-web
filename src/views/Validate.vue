<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar color="primary" dark flat>
              <v-toolbar-title>{{
                $t('message.validateView.title')
              }}</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  id="validateTextField"
                  :hint="$t('message.validateView.hint')"
                  autofocus
                  v-model.trim="shared.code"
                  counter="4"
                  clearable
                  prepend-icon="sms"
                  type="text"
                  :loading="loading"
                  :error-messages="allErrors"
                  required
                  @blur="$v.shared.code.$touch()"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn id="validateButton" color="primary" @click="validate">{{
                $t('message.validateView.continue')
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
  data() {
    return {
      loading: false
    }
  },
  props: {
    appContext: {
      type: String,
      default: 'login'
    }
  },
  computed: {
    allErrors() {
      const errors = []
      if (!this.$v.shared.code.$dirty) {
        return errors
      }
      if (
        !this.$v.shared.code.numeric ||
        !this.$v.shared.code.required ||
        !this.$v.shared.code.minLength ||
        !this.$v.shared.code.maxLength
      ) {
        errors.push(this.$t('message.validateView.error'))
      }
      return errors
    },
    ...mapState(['shared'])
  },
  methods: {
    validate() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.loading = true
        if (this.appContext === 'login') {
          this.$store
            .dispatch('user/validate')
            .then(() => {
              this.loading = false
              this.shared.code = null
              this.$router.push({
                name: 'home'
              })
            })
            .catch(error => {
              this.loading = false
              console.log(error)
            })
        } else if (this.appContext === 'addCar') {
          this.$store
            .dispatch('user/addCarValidate')
            .then(() => {
              this.loading = false
              this.shared.code = null
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
  },
  validations: {
    shared: {
      code: {
        required,
        numeric,
        minLength: minLength(4),
        maxLength: maxLength(4)
      }
    }
  }
}
</script>
