import SignInWindow from '../components/modalWindows/SignInWindow.vue'
import SignUpWindow from '../components/modalWindows/SignUpWindow.vue'

export default {
    name: "homepage",
    components:{
      SignInWindow,
      SignUpWindow
    },
    data(){
      return{
        close: false,
        reg: false,
        loggedIn: false,
      }
    },
    methods:{
      
    }
}
