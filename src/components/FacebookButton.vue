<template>
  <button @click="loginWithFacebook" type="button" class="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-3 py-1.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2">
    <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
      <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd" />
    </svg> Facebook 
  </button>
</template>

<script>
export default {
  methods: {
    loginWithFacebook() {
      const myThis = this;
      FB.login(
        (response) => {
          if (response.authResponse) {
            myThis.getUserInfo();
          } else {
            console.log('User cancelled login or did not fully authorize.');
          }
        },
        { scope: 'public_profile,email' }
      );
    },
    
    getUserInfo() {
      const myThis = this;
      FB.api('/me', { fields: 'name,email,picture' }, async (response) => {
        const fbInfo = response;
        
        myThis.$root.isLoading = true;
        try {
          const requestLogin = await myThis.axios({
            method: 'post',
            url: `${myThis.$root.API_URL}/login-social-media`,
            data: {
              email: fbInfo.email,
              fullname: fbInfo.name,
              login_platform: 'facebook'
            }
          });

          const reqData = requestLogin.data.data;
          myThis.$root.dataUserLogin = reqData;
          localStorage.setItem(myThis.$root.master_local.user_login, JSON.stringify(reqData));
          
          myThis.$root.alertNotifAction(true, 'success', 'Sukses Login!', `Selamat datang kembali ${reqData.email}`);
          myThis.$root.gotoReplace('HomePage', true);
        }catch(e){
          if(e.response && e.response.data.status == 101){
            this.$root.alertNotifAction(true, 'warning', 'Gagal Memuat!', `Gagal memproses! ${e.response.data.message}`);
          }else{
            this.$root.alertNotifAction(true, 'warning', 'Terjadi Kesalahan!', 'Gagal melanjutkan, Tunggu dan ulangi beberapa saat lagi!');
          }
          console.log(e);
        }
        myThis.$root.isLoading = false;
      });
    }
  }
}
</script>