import GoogleAuth from 'vue-google-auth'
export default ({Vue,router,app}) => {
  Vue.use(GoogleAuth,{client_id:''})
  Vue.googleAuth().load
}
