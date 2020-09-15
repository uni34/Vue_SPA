// import { mapActions } from 'vuex'

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
    //   ...mapActions({
    //   'GET_USER'
    // }),
      submit(){
          if(this.login == 'test' && this.password == 'test'){
            this.$emit('login');
            this.$emit('close');
            return true;
          }
      },
    },
    mounted() {
        // this.GET_USER()
    },
}
