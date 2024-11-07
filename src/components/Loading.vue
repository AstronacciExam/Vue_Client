<template>
  <div class="loading-overlay">
    <!-- <div class="spinner"></div> -->
    <img class="w-10 h-auto object-cover mb-1 bounce-image" src="@/assets/img/Main_Logo_Astronacci_Intenational.png" alt="loading" />
    <div>
      <img class="w-24 h-auto object-cover" src="@/assets/img/Name_Logo_Astronacci_Intenational.png" alt="loading" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Loading"
};
</script>

<style scoped>
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;    
  z-index: 9999;
  text-align: center;
}

.bounce-image {
  animation: bounce 0.9s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-15px);
  }
  60% {
    transform: translateY(-5px);
  }
}

@media (max-width: 600px) {
  .bounce-image {
    width: 80px;
  }
}
</style>