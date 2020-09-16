import { mapActions } from 'vuex'

export default {
    name: "SignInWindow",
    components: {
    },
    data() {
        return {
            closed: false,
            login: '',
            password: '',
        }
    },
    methods: {

      submit(){
          if(this.login == 'test' && this.password == 'test'){
            this.$emit('login');
            this.$emit('close');
            return true;
          }
      },
    },
    mounted() {
        this.$store.dispatch('GET_USER')
    },

}
