<template>
  <div></div>
</template>

<script>
import { mapState } from 'vuex'

// eslint-disable-next-line
const stripe = Stripe('pk_test_V4IMbysDTdphjZ7GV2f2iNSp')

export default {
  computed: {
    ...mapState(['db', 'shared'])
  },
  mounted() {
    stripe
      .redirectToCheckout({
        sessionId: this.db.user.payment.sessionId
      })
      .then(() => {})
  }
}
</script>

<style lang="scss" scoped></style>
