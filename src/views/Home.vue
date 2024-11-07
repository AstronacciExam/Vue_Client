<template>
  <div class="h-screen relative">
    <img src="@/assets/img/blob.svg" alt="Background" class="absolute top-0 left-0 h-full object-cover pointer-events-none transform scale-x-[-1]" />
    
    <div class="flex items-center justify-center pb-7 pt-12">
      <img class="w-48 h-full object-cover" src="@/assets/img/Logo_Astronacci_Intenational_Full.png" alt="">
    </div>

    <div class="pb-8 px-4 mx-auto max-w-screen-xl text-center lg:px-12">
      <div class="inline-flex justify-between items-center py-1 px-1 pr-4 text-sm me-2 text-gray-700 bg-gray-200 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
        <span class="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 mr-3">HOLA!!</span>
        <span class="text-sm font-medium">Selamat datang, {{ $root.dataUserLogin ? $root.dataUserLogin.fullname : null }}</span>
        <i class='bx bx-user text-lg ml-2'></i>
      </div>
      <a @click="logoutApp()" href="javascript:void(0)" class="inline-flex justify-between items-center py-2 px-3 text-sm text-white bg-red-500 rounded-full dark:bg-red-800 dark:text-white hover:bg-red-600 dark:hover:bg-gray-700" role="alert">
        <span class="text-sm font-medium">Keluar</span>
        <i class='bx bx-log-out bx-rotate-180 text-lg ml-2'></i>
      </a>

      <div class="py-6">
        <!-- <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">We invest in the world's potential</h1>
        <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Here at Astronacci we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p> -->
        <hr>
      </div>

      
      <div class="mb-10 px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
        <div class="mb-3 font-semibold text-gray-700 uppercase">Daftar Artikel ({{ $root.dataUserLogin ? $root.dataUserLogin.roles.access_article ?? 'All' : null }})</div>

        <div class="grid grid-cols-12 gap-4">
          <div v-for="(data, idx) in listArticleShow" class="col-span-12 md:col-span-4">
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div>
                <img class="rounded-t-lg h-36 w-full object-cover" src="@/assets/img/image-1.jpg" alt="" />
              </div>
              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{{ idx+1 }}. {{ data.name }}</h5>
                </div>
                <div class="max-w-xs">
                  <p class="line-clamp-4 mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">{{ data.desc }}</p>
                </div>
                <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> Read more <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr class="pb-6"/>

      <div class="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
        <div class="mb-3 font-semibold text-gray-700 uppercase">Daftar Video ({{ $root.dataUserLogin ? $root.dataUserLogin.roles.access_video ?? 'All' : null }})</div>
        
        <div class="grid grid-cols-12 gap-4">
          <div v-for="(data, idx) in listVideoShow" class="col-span-12 md:col-span-4">
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div>
                <img class="rounded-t-lg h-36 w-full object-cover" src="@/assets/img/image-2.jpg" alt="" />
              </div>
              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{{ idx+1 }}. {{ data.name }}</h5>
                </div>
                <div class="max-w-xs">
                  <p class="line-clamp-4 mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">{{ data.desc }}</p>
                </div>
                <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> Read more <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      listArticle: [
        { 
          name: 'Article 1', 
          url: 'https://example.com/article1', 
          desc: 'This is a detailed description of Article 1. It covers the topic of technology innovations and the impact of AI on various industries, offering insights into future trends and developments.' 
        },
        { 
          name: 'Article 2', 
          url: 'https://example.com/article2', 
          desc: 'Article 2 explores the rise of sustainable living, providing tips on reducing carbon footprints, and highlights key developments in renewable energy sources like solar and wind power.' 
        },
        { 
          name: 'Article 3', 
          url: 'https://example.com/article3', 
          desc: 'In Article 3, we discuss the importance of mental health awareness in modern society. It examines the challenges people face and suggests methods for managing stress and anxiety.' 
        },
        { 
          name: 'Article 4', 
          url: 'https://example.com/article4', 
          desc: 'Article 4 delves into the world of digital marketing, focusing on how businesses can leverage social media platforms to reach their target audience and increase engagement.' 
        },
        { 
          name: 'Article 5', 
          url: 'https://example.com/article5', 
          desc: 'This article takes a deep dive into the financial markets, explaining the complexities of stock trading and how economic events can influence investment decisions.' 
        },
        { 
          name: 'Article 6', 
          url: 'https://example.com/article6', 
          desc: 'Article 6 examines the evolution of electric vehicles (EVs) and their growing influence on the automotive industry, including advancements in battery technology and charging infrastructure.' 
        },
        { 
          name: 'Article 7', 
          url: 'https://example.com/article7', 
          desc: 'In Article 7, we discuss the future of space exploration, highlighting recent missions to Mars and the technological innovations that could make space travel more accessible to the public.' 
        },
        { 
          name: 'Article 8', 
          url: 'https://example.com/article8', 
          desc: 'This article offers an overview of the latest trends in artificial intelligence, particularly how AI is transforming sectors like healthcare, finance, and customer service.' 
        },
        { 
          name: 'Article 9', 
          url: 'https://example.com/article9', 
          desc: 'Article 9 highlights the importance of cybersecurity in the digital age, exploring the rise of cyber threats and how individuals and organizations can protect themselves from online attacks.' 
        },
        { 
          name: 'Article 10', 
          url: 'https://example.com/article10', 
          desc: 'In this article, we explore the world of e-commerce, focusing on how online shopping platforms have evolved and the technologies driving the future of retail.' 
        },
        { 
          name: 'Article 11', 
          url: 'https://example.com/article11', 
          desc: 'Article 11 discusses the cultural impact of streaming services like Netflix and Hulu, looking at how these platforms have changed the way we consume media and the future of traditional broadcasting.' 
        },
        { 
          name: 'Article 12', 
          url: 'https://example.com/article12', 
          desc: 'This article explores the importance of physical fitness, detailing the benefits of regular exercise on overall health and how to maintain an active lifestyle as we age.' 
        },
        { 
          name: 'Article 13', 
          url: 'https://example.com/article13', 
          desc: 'Article 13 examines the role of education in shaping the future workforce, looking at how schools and universities are adapting to meet the needs of a rapidly changing job market.' 
        },
        { 
          name: 'Article 14', 
          url: 'https://example.com/article14', 
          desc: 'This article provides an in-depth look at the impact of climate change on global ecosystems, focusing on how rising temperatures are affecting biodiversity and natural habitats.' 
        },
        { 
          name: 'Article 15', 
          url: 'https://example.com/article15', 
          desc: 'Article 15 explores the significance of cultural diversity in the workplace, highlighting the benefits of a diverse team and the steps organizations can take to foster an inclusive environment.' 
        }
      ],
      listVideo: [
        { 
          name: 'Video 1', 
          url: 'https://example.com/video1', 
          desc: 'This video provides an overview of the latest trends in digital marketing, focusing on the impact of social media advertising and how businesses can leverage these platforms for growth.' 
        },
        { 
          name: 'Video 2', 
          url: 'https://example.com/video2', 
          desc: 'In this video, we explore the world of artificial intelligence and how AI technologies are revolutionizing various industries such as healthcare, finance, and customer service.' 
        },
        { 
          name: 'Video 3', 
          url: 'https://example.com/video3', 
          desc: 'Video 3 covers the basics of data science and machine learning, introducing key concepts and explaining how these technologies are transforming business decision-making processes.' 
        },
        { 
          name: 'Video 4', 
          url: 'https://example.com/video4', 
          desc: 'This video takes you on a journey through the history of space exploration, highlighting key milestones such as the moon landing, Mars missions, and upcoming plans for human space travel.' 
        },
        { 
          name: 'Video 5', 
          url: 'https://example.com/video5', 
          desc: 'In Video 5, we discuss the role of sustainable energy solutions in fighting climate change, focusing on the benefits and challenges of renewable energy sources like solar and wind power.' 
        },
        { 
          name: 'Video 6', 
          url: 'https://example.com/video6', 
          desc: 'This video examines the evolution of electric vehicles (EVs), exploring advancements in battery technology, charging infrastructure, and how EVs are reshaping the automotive industry.' 
        },
        { 
          name: 'Video 7', 
          url: 'https://example.com/video7', 
          desc: 'Video 7 dives into the world of 3D printing and its potential applications in manufacturing, healthcare, and even space exploration, discussing how it is revolutionizing production processes.' 
        },
        { 
          name: 'Video 8', 
          url: 'https://example.com/video8', 
          desc: 'This video highlights the rise of e-commerce and the growing trend of online shopping, explaining how businesses can optimize their websites for better user experience and conversion rates.' 
        },
        { 
          name: 'Video 9', 
          url: 'https://example.com/video9', 
          desc: 'Video 9 explores the basics of blockchain technology and cryptocurrencies, discussing how blockchain is being used to create secure digital transactions and its potential to disrupt industries.' 
        },
        { 
          name: 'Video 10', 
          url: 'https://example.com/video10', 
          desc: 'In this video, we look at the role of artificial intelligence in healthcare, from diagnostic tools to personalized medicine, and how AI is improving patient outcomes and reducing costs.' 
        },
        { 
          name: 'Video 11', 
          url: 'https://example.com/video11', 
          desc: 'Video 11 discusses the importance of cybersecurity in the digital age, showcasing the latest trends in data protection and offering practical tips on how to secure your online presence.' 
        },
        { 
          name: 'Video 12', 
          url: 'https://example.com/video12', 
          desc: 'In this video, we explore the world of smart homes and the Internet of Things (IoT), explaining how connected devices are enhancing convenience, efficiency, and security in our daily lives.' 
        },
        { 
          name: 'Video 13', 
          url: 'https://example.com/video13', 
          desc: 'This video provides a guide to modern project management techniques, including Agile and Scrum, and discusses how these methodologies help teams deliver projects faster and more efficiently.' 
        },
        { 
          name: 'Video 14', 
          url: 'https://example.com/video14', 
          desc: 'In Video 14, we examine the growing trend of remote work, highlighting the challenges and benefits of working from home, and offering tips for maintaining productivity in a virtual environment.' 
        },
        { 
          name: 'Video 15', 
          url: 'https://example.com/video15', 
          desc: 'This video takes a deep dive into the field of genetic engineering, explaining the science behind gene editing technologies like CRISPR and discussing their potential for curing genetic diseases.' 
        }
      ],

      listArticleShow: [],
      listVideoShow: [],
    };
  },

  beforeMount(){
    this.loadDataShow();
  },

  methods: {
    loadDataShow(){
      const userData = this.$root.dataUserLogin;
      if(userData){
        const userRole = userData.roles;

        if(userRole.all_article == true){
          this.listArticleShow = this.listArticle;
        }else{
          const shuffledArticle = this.listArticle.sort(() => 0.5 - Math.random());
          this.listArticleShow = shuffledArticle.slice(0, parseInt(userRole.access_article));
        }
        
        if(userRole.all_video == true){
          this.listVideoShow = this.listVideo;
        }else{
          const shuffledVideo = this.listVideo.sort(() => 0.5 - Math.random());
          this.listVideoShow = shuffledVideo.slice(0, parseInt(userRole.access_video));
        }

        console.log(this.listArticleShow);
        console.log(this.listVideoShow);
        
      }else{
        this.logoutApp();
      }
    },

    logoutApp(){
      localStorage.clear();
      this.$root.gotoReplace('LoginRegister');
    }
  }
}
</script>