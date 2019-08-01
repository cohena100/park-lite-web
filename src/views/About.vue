<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-select
            v-model="$i18n.locale"
            :items="langs"
            label="Standard"
          ></v-select>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  data() {
    return { langs: ['he', 'en'] }
  }
}
</script>
<style scoped></style>
