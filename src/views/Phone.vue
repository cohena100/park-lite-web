<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar color="primary" dark flat>
              <v-toolbar-title>{{
                $t('message.phoneView.title')
              }}</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  id="phoneTextField"
                  :hint="$t('message.phoneView.hint')"
                  v-model.trim="shared.login.phone"
                  counter="10"
                  clearable
                  prepend-icon="smartphone"
                  type="tel"
                  :loading="loading"
                  :error-messages="allErrors"
                  required
                  @blur="$v.shared.login.phone.$touch()"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" @click="login">{{
                $t('message.phoneView.continue')
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
  computed: {
    allErrors() {
      const errors = []
      if (!this.$v.shared.login.phone.$dirty) {
        return errors
      }
      if (
        !this.$v.shared.login.phone.numeric ||
        !this.$v.shared.login.phone.required ||
        !this.$v.shared.login.phone.minLength ||
        !this.$v.shared.login.phone.maxLength
      ) {
        errors.push(this.$t('message.phoneView.error'))
      }
      return errors
    },
    ...mapState(['shared'])
  },
  methods: {
    login() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.loading = true
        this.$store
          .dispatch('user/login')
          .then(() => {
            this.loading = false
            this.$router.push({
              name: 'validate',
              params: { appContext: 'login' }
            })
          })
          .catch(error => {
            this.loading = false
            console.log(error)
          })
      }
    }
  },
  validations: {
    shared: {
      login: {
        phone: {
          required,
          numeric,
          minLength: minLength(10),
          maxLength: maxLength(10)
        }
      }
    }
  }
}
</script>
