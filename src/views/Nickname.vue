<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar color="primary" dark flat>
              <v-toolbar-title>{{
                $t('message.nicknameView.title')
              }}</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  id="nicknameTextField"
                  :hint="$t('message.nicknameView.hint')"
                  autofocus
                  v-model.trim="shared.addCar.nickname"
                  counter="8"
                  clearable
                  prepend-icon="directions_car"
                  type="text"
                  :loading="loading"
                  :error-messages="allErrors"
                  required
                  @blur="$v.shared.addCar.nickname.$touch()"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                id="nicknameButton"
                color="primary"
                @click="nicknameClick"
                >{{ $t('message.nicknameView.continue') }}</v-btn
              >
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
import { required, minLength, maxLength } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      loading: false
    }
  },
  computed: {
    allErrors() {
      const errors = []
      if (!this.$v.shared.addCar.nickname.$dirty) {
        return errors
      }
      if (
        !this.$v.shared.addCar.nickname.required ||
        !this.$v.shared.addCar.nickname.minLength
      ) {
        errors.push(this.$t('message.nicknameView.errorMin'))
      }
      if (!this.$v.shared.addCar.nickname.maxLength) {
        errors.push(this.$t('message.nicknameView.errorMax'))
      }
      return errors
    },
    ...mapState(['shared'])
  },
  methods: {
    nicknameClick() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.loading = true
        this.$store
          .dispatch('user/addCar')
          .then(() => {
            this.loading = false
            this.$router.push({
              name: 'validate',
              params: { appContext: 'addCar' }
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
      addCar: {
        nickname: {
          required,
          minLength: minLength(1),
          maxLength: maxLength(20)
        }
      }
    }
  }
}
</script>
