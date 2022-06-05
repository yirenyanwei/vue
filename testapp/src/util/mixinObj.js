let obj = {
    created() {
        this.$store.commit('hideTabbar')
    },
    destroyed() {
        this.$store.commit('showTabbar')
    }
}

export default obj