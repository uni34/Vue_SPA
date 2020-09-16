import CommentComponent from '../components/CommentComponent.vue'

export default {
    name: "articlepage",
    components: {
      CommentComponent,
    },
    data(){
      return{
        show: false,
        comment: '',
        comments: [
          {
            name: 'Кристина',
            comment: 'Не помогло, но статья классная',
            date: '12:58:36 15-9-2020'
          },
          {
            name: 'User456',
            comment: 'Лучше бы store так прописала, как комментарии!!!',
            date: '13:03:29 15-9-2020'
          }
        ]
      }
    },
    methods:{
      send(){
        const today = new Date();
        const date = today.getDate()+ '-' +(today.getMonth()+1)+ '-' +today.getFullYear();
        const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        const dateTime = time +' '+ date;
        if (this.comment){
          this.comments.push({
            name: 'test',
            comment: this.comment,
            date: dateTime
          })
        }
      }
    }
}
