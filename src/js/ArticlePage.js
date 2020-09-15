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
            comment: 'Не помогло, но статья классная'
          },
          {
            name: 'User456',
            comment: 'Лучше бы store так прописала, как комментарии!!!'
          }
        ]
      }
    },
    methods:{
      send(){
        if (this.comment){
          this.comments.push({
            name: 'test',
            comment: this.comment
          })
        }
      }
    }
}
