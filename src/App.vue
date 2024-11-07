<template>
  <div v-if="alertNotificationData.isAlert" class="fixed w-full max-w-xs shadow-lg rounded-lg top-4 right-4" style="z-index: 9999;">
    <div role="alert" :class="alertClasses">
      <div class="flex items-center mb-1">
        <div class="relative inline-block shrink-0">
          <img v-if="alertNotificationData.icon != ''" :src="`./src/assets/img/gif/${alertNotificationData.icon}.gif`" class="w-6 h-6 rounded-full" alt="" />
        </div>
        <span class="ms-1 text-sm font-semibold text-gray-900 dark:text-white">{{ alertNotificationData.header }}</span>
        <button @click="alertNotifAction(false)" type="button" class="ms-auto -mx-1.5 -my-1.5 justify-center items-center flex-shrink-0 text-gray-400 hover:text-gray-900 rounded-lg p-1.5 inline-flex h-8 w-8 dark:text-gray-500 dark:bg-gray-800" aria-label="Close">
          <span class="sr-only">Close</span>
          <svg class="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
          </svg>
        </button>
      </div>
    
      <p class="text-xs font-semibold">{{ alertNotificationData.message }}</p>
    </div>
  </div>

  <Loading v-if="isLoading" />

  <RouterView />
</template>

<script>
import { RouterLink, RouterView, useRoute, useRouter } from 'vue-router';

import { Modal } from 'flowbite';
import Loading from '@/components/Loading.vue';

export default {
  components: { Loading },

  computed: {
    alertClasses(){
      const baseClasses = 'p-2 py-3 rounded-lg transition duration-300 ease-in-out transform hover:scale-105';
      const status = this.alertNotificationData.status;

      if (status === 'success') {
          return `bg-green-100 dark:bg-green-900 border-l-4 border-green-500 dark:border-green-700 text-green-900 dark:text-green-100 hover:bg-green-200 dark:hover:bg-green-800 ${baseClasses}`;
      } else if (status === 'info') {
          return `bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 dark:border-blue-700 text-blue-900 dark:text-blue-100 hover:bg-blue-200 dark:hover:bg-blue-800 ${baseClasses}`;
      } else if (status === 'warning') {
          return `bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 dark:border-yellow-700 text-yellow-900 dark:text-yellow-100 hover:bg-yellow-200 dark:hover:bg-yellow-800 ${baseClasses}`;
      } else if (status === 'danger') {
          return `bg-red-100 dark:bg-red-900 border-l-4 border-red-500 dark:border-red-700 text-red-900 dark:text-red-100 hover:bg-red-200 dark:hover:bg-red-800 ${baseClasses}`;
      } else {
          return '';
      }
    }
  },

  data() {
    return {
      API_URL: 'http://localhost:3000',
      master_local: { 
        user_login : 'user_login'
      },

      dataUserLogin: null,
      isLoading: false,

      alertNotificationData: {
        isAlert: false,
        status: 'success',
        icon: 'success-icon-2',
        header: 'Notification Header',
        message: 'Notification body message!',
      },
      showModalConfirmation: false,
    };
  },

  async beforeMount(){
    const getUserLogin = localStorage.getItem(this.master_local.user_login);
    if(!getUserLogin){
      this.gotoReplace('LoginRegister');
      localStorage.clear();
      return;
    }else{
      this.dataUserLogin = JSON.parse(getUserLogin);
    }
    
    const route = useRoute();
    const router = useRouter();
    await router.isReady();
    const routeName = route.name;
    this.gotoReplace(routeName);
  },

  mounted(){
    this.isLoading = true;
    setTimeout(()=>{
      this.isLoading = false;
    }, 1500)
  },

  methods: {
    gotoReplace(pageName, is_auth = false){
      if (is_auth) {
        const getUserLogin = localStorage.getItem(this.master_local.user_login);
        if(!getUserLogin){
          pageName = 'LoginRegister';
          localStorage.clear();
        }
      }

      this.$router.replace({ name: pageName }, 'forward');
    },

    alertNotifAction(isAlert, status = '', header = null, message = null, isTimeout = true){
      var icon = 'success-icon-2';
      if(status == 'success'){
        icon = 'success-icon-2';
      }else if(status == 'info'){
        icon = 'info-icon';
      }else if(status == 'warning'){
        icon = 'warning-icon-2';
      }else if(status == 'danger'){
        icon = 'danger-icon';
      }

      this.alertNotificationData.isAlert = isAlert;
      this.alertNotificationData.status = status;
      this.alertNotificationData.icon = icon;
      this.alertNotificationData.header = header;
      this.alertNotificationData.message = message;

      if(isTimeout) setTimeout(() => {
        this.alertNotificationData.isAlert = false;
        this.alertNotificationData.status = 'success';
        this.alertNotificationData.icon = 'success-icon-2';
        this.alertNotificationData.header = 'Notification Header';
        this.alertNotificationData.message = 'Notification body message!';
      }, 4000);
    },
  }
}
</script>