<template>
  <div class="h-screen bg-gradient-to-r from-white via-white to-orange-200 flex justify-center items-center relative">
    <!-- <img src="@/assets/img/blob.svg" alt="Background" class="absolute top-0 left-0 h-full object-cover pointer-events-none transform scale-x-[-1]" /> -->
    
    
    <div v-if="displayForm == optionDisplay.w" class="w-full max-w-sm p-6 mx-5 bg-white border border-gray-200 rounded-lg shadow-xl relative z-10">
      <img src="@/assets/img/blob.svg" alt="Background" class="absolute top-0 left-0 h-full object-cover pointer-events-none transform scale-x-[-1]" />

      <div class="flex justify-center mb-4">
        <img class="w-40 h-full object-cover" src="@/assets/img/Logo_Astronacci_Intenational.png" alt="">
      </div>
      <div class="text-center mb-4">
        <p class="text-sm text-gray-600">
          Selamat datang di website Astronacci! Jasa Riset, Rekomendasi Trading dan Edukasi terpercaya.
        </p>
      </div>

      <div class="text-center">
        <div class="mt-7 mb-4 space-x-2">
          <button @click="displayForm = optionDisplay.l" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-8 py-2 text-center mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Masuk
          </button>
          <button @click="displayForm = optionDisplay.r" type="button" class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm px-8 py-2 text-center mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
            Daftar
          </button>
        </div>
      </div>
    
      <div class="text-center">
        <div class="text-sm font-semibold px-2 text-gray-600 dark:text-white dark:bg-gray-900 mb-3">
          Atau login menggunakan
        </div>

        <FacebookButton></FacebookButton>
        <GoogleButton></GoogleButton>
      </div>
    </div>

    <div v-else class="w-full md:max-w-3xl max-w-sm p-6 mx-5 bg-white border border-gray-200 rounded-lg shadow-xl relative z-10">
      <div class="grid grid-cols-12 gap-4">
        <div class="col-span-12 md:col-span-6 flex justify-center items-center">
          <div class="w-full">
            <img src="@/assets/img/blob.svg" alt="Background" class="absolute top-0 left-0 h-full object-cover pointer-events-none transform scale-x-[-1]" />

            <div class="flex justify-center mb-3">
              <img class="w-40 h-full object-cover" src="@/assets/img/Logo_Astronacci_Intenational.png" alt="">
            </div>
            <div class="text-center mb-4">
              <p class="text-sm text-gray-600">
                Selamat datang di website Astronacci! Jasa Riset, Rekomendasi Trading dan Edukasi terpercaya.
              </p>
            </div>
          </div>
        </div>

        <div class="col-span-12 md:col-span-6 flex justify-center items-center">
          <div class="w-full">
            <form @submit.prevent="displayForm == optionDisplay.l ? submitLogin() : displayForm == optionDisplay.r ? submitRegis() : () => {}" class="mb-3">
              <div v-if="displayForm == optionDisplay.l" class="mb-5">
                <div class="mb-2">
                  <label for="login_email" class="mb-1 text-sm font-medium text-gray-700">Email</label>
                  <input v-model="dataLogin.email" type="email" id="login_email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukkan alamat email" required />
                </div>
                <div>
                  <label for="login_password" class="mb-1 text-sm font-medium text-gray-700">Password</label>
                  <div class="relative">
                    <div class="absolute inset-y-0 end-0 flex items-center pe-3.5 cursor-pointer" @click="dataLogin.togglePassword = !dataLogin.togglePassword">
                      <i v-if="dataLogin.togglePassword" class='bx bx-hide text-xl'></i>
                      <i v-else class='bx bx-show-alt text-xl'></i>
                    </div>
                    <input v-model="dataLogin.password" :type="dataLogin.togglePassword ? 'text' : 'password'" id="login_password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="*************" required />
                  </div>
                </div>
              </div>
      
              <div v-if="displayForm == optionDisplay.r" class="mb-5">
                <div class="mb-2">
                  <label for="regis_fullname" class="mb-1 text-sm font-medium text-gray-700">Nama Lengkap</label>
                  <input v-model="dataRegister.fullname" type="text" id="regis_fullname" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukkan nama lengkap" required />
                </div>
                <div class="mb-2">
                  <label for="regis_email" class="mb-1 text-sm font-medium text-gray-700">Email</label>
                  <input v-model="dataRegister.email" type="email" id="regis_email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukkan alamat email" required />
                </div>
                <div class="mb-2">
                  <label for="regis_password" class="mb-1 text-sm font-medium text-gray-700">Password</label>
                  <div class="relative">
                    <div class="absolute inset-y-0 end-0 flex items-center pe-3.5 cursor-pointer" @click="dataRegister.togglePassword = !dataRegister.togglePassword">
                      <i v-if="dataRegister.togglePassword" class='bx bx-hide text-xl'></i>
                      <i v-else class='bx bx-show-alt text-xl'></i>
                    </div>
                    <input v-model="dataRegister.password" :type="dataRegister.togglePassword ? 'text' : 'password'" id="regis_password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukkan kata sandi" required />
                  </div>
                </div>
                <div class="mb-2">
                  <label for="regis_co_password" class="mb-1 text-sm font-medium text-gray-700">Konfirmasi Password</label>
                  <div class="relative">
                    <div class="absolute inset-y-0 end-0 flex items-center pe-3.5 cursor-pointer" @click="dataRegister.toggleCoPassword = !dataRegister.toggleCoPassword">
                      <i v-if="dataRegister.toggleCoPassword" class='bx bx-hide text-xl'></i>
                      <i v-else class='bx bx-show-alt text-xl'></i>
                    </div>
                    <input v-model="dataRegister.co_password" :type="dataRegister.toggleCoPassword ? 'text' : 'password'" id="regis_co_password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ulangi kata sandi" required />
                  </div>
                </div>
              </div>
              <button type="submit" class="w-full text-sm py-1.5 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">{{ displayForm == optionDisplay.l ? 'Masuk' : 'Daftar Sekarang' }}</button>
            </form>
        
            <div class="mb-2 text-center">
              <div class="text-sm font-semibold px-2 text-gray-600 dark:text-white dark:bg-gray-900 mb-3">
                Atau login menggunakan
              </div>
      
              <FacebookButton></FacebookButton>
              <GoogleButton></GoogleButton>
            </div>
      
            <div v-if="displayForm == optionDisplay.l || displayForm == optionDisplay.r" class="text-center">
              <p v-if="displayForm == optionDisplay.l" class="text-sm text-gray-600">
                Belum punya akun? <a  @click="displayForm = optionDisplay.r" href="javascript:void(0)" class="text-blue-600 hover:underline">Daftar disini</a>
              </p>
              <p v-if="displayForm == optionDisplay.r" class="text-sm text-gray-600">
                Sudah punya akun? <a  @click="displayForm = optionDisplay.l" href="javascript:void(0)" class="text-blue-600 hover:underline">Masuk disini</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GoogleButton from '@/components/GoogleButton.vue';
import FacebookButton from '@/components/FacebookButton.vue';

export default {
  components: { GoogleButton, FacebookButton },

  data(){
    return {
      displayForm: 1,
      optionDisplay: { w: 1, l: 2, r: 3 },

      dataLogin: {
        email: null,
        password: null,

        togglePassword: false
      },

      dataRegister: {
        email: null,
        password: null,
        co_password: null,
        fullname: null,

        togglePassword: false,
        toggleCoPassword: false,
      },
    };
  },

  beforeMount(){
    localStorage.clear();
  },

  methods: {
    clearForm(){
      for (let prop in this.dataLogin) {
        if (typeof this.dataLogin[prop] === 'boolean') {
          this.dataLogin[prop] = false;
          continue;
        }
        this.dataLogin[prop] = null;
      }
      
      for (let prop in this.dataRegister) {
        if (typeof this.dataRegister[prop] === 'boolean') {
          this.dataRegister[prop] = false;
          continue;
        }
        this.dataRegister[prop] = null;
      }
    },

    async submitLogin(){
      this.$root.isLoading = true;
      try{
        const request = await this.axios({
          method: 'post',
          url: `${this.$root.API_URL}/login-user`,
          data: {
            email: this.dataLogin.email,
            password: this.dataLogin.password
          }
        });

        const reqData = request.data.data;
        this.$root.dataUserLogin = reqData;
        localStorage.setItem(this.$root.master_local.user_login, JSON.stringify(reqData));
        
        this.$root.alertNotifAction(true, 'success', 'Sukses Login!', `Selamat datang kembali ${reqData.email}`);
        this.clearForm();
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
    },
    
    async submitRegis(){
      if(this.dataRegister.password != this.dataRegister.co_password){
        this.$root.alertNotifAction(true, 'warning', 'Gagal Daftar!', `Password dan konfirmasi password tidak sesuai`);
        return;
      }

      this.$root.isLoading = true;
      try{
        const request = await this.axios({
          method: 'post',
          url: `${this.$root.API_URL}/register-user`,
          data: {
            email: this.dataRegister.email,
            password: this.dataRegister.password,
            fullname: this.dataRegister.fullname,
          }
        });

        const reqData = request.data.data;
        this.$root.dataUserLogin = reqData;
        localStorage.setItem(this.$root.master_local.user_login, JSON.stringify(reqData));

        this.$root.alertNotifAction(true, 'success', 'Sukses Daftar!', `Pendaftaran berhasil! Selamat datang ${reqData.email}`);
        this.clearForm();
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
    },
  }
}
</script>