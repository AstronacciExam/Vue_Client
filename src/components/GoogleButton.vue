<template>
  <GoogleLogin :callback="callback">
    <button type="button" class="text-white bg-[#ea4335] hover:bg-[#ea4335]/90 focus:ring-4 focus:outline-none focus:ring-[#ea4335]/50 font-medium rounded-lg text-sm px-3 py-1.5 text-center inline-flex items-center dark:focus:ring-[#ea4335]/55 mb-2">
      <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
        <path fill-rule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clip-rule="evenodd" />
      </svg> Google 
    </button>
  </GoogleLogin>
</template>

<script>
export default {
  data(){
    return{
      clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      clientSecret: import.meta.env.VITE_GOOGLE_CLIENT_SECRET,
    };
  },

  methods: {
    async callback(response) {
      this.$root.isLoading = true;
      try{
        const tokenUrl = 'https://oauth2.googleapis.com/token';
        const params = new URLSearchParams();
        params.append('code', response.code);
        params.append('client_id', this.clientId);
        params.append('client_secret', this.clientSecret);
        params.append('redirect_uri', 'http://localhost:5173');
        params.append('grant_type', 'authorization_code');

        const requestToken = await this.axios({
          method: 'post',
          url: tokenUrl,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          data: params
        });
        const accessToken = requestToken.data.access_token;
        
        const userInfo = await this.axios({
          method: 'get',
          url: 'https://www.googleapis.com/oauth2/v3/userinfo',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
          },
        });
        const reqDataUserInfo = userInfo.data;

        const requestLogin = await this.axios({
          method: 'post',
          url: `${this.$root.API_URL}/login-social-media`,
          data: {
            email: reqDataUserInfo.email,
            fullname: reqDataUserInfo.name,
            login_platform: 'google'
          }
        });

        const reqData = requestLogin.data.data;
        this.$root.dataUserLogin = reqData;
        localStorage.setItem(this.$root.master_local.user_login, JSON.stringify(reqData));
        
        this.$root.alertNotifAction(true, 'success', 'Sukses Login!', `Selamat datang kembali ${reqData.email}`);
        this.$root.gotoReplace('HomePage', true);
      }catch(e){
        if(e.response && e.response.data.status == 101){
          this.$root.alertNotifAction(true, 'warning', 'Gagal Memuat!', `Gagal memproses! ${e.response.data.message}`);
        }else{
          this.$root.alertNotifAction(true, 'warning', 'Terjadi Kesalahan!', 'Gagal melanjutkan, Tunggu dan ulangi beberapa saat lagi!');
        }
        console.log(e);
      }
      this.$root.isLoading = false;
    }
  }
}
</script>