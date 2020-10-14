---
title: "导航"
permalink: "guide"
comment: true
single: true
---

> 更新了这些文章 👇 

<main class="container">
  <ul class="list">
    <li 
      class="list-item"
      v-for="(post, index) in topPublishPosts"
      :key="index"
      href="post"
    >
      <a class="list-item-content" :href="post.path">
        <h2 class="font-bold text-lg md:text-2xl text-gray-900">{{post.title}}</h2>
        <time class="block mb-4 text-gray-700">{{ post.formatDay }}</time>
      </a>
    </li>
  </ul>

  <div @click="loadMore" class="page-guide-btn" v-if="showBtn">
    <div ref="btn">{{btnInfo}}</div>
  </div>
</main>

<script>
export default {
  data() {
    return {
      step: 70,
      posts: [],
      page: 1,
      num: 0,
      btnInfo: '加载更多',
      showBtn: true,
      timeout: null,
    }
  },

  created() {
    console.log(this.$site);
    this.posts = this.$site.pages;
    this.num = this.posts.length
  },

  computed: {
    topPublishPosts() {
      return this.getTopKPosts(this.page * this.step)
    }
  },

  methods: {
    getTopKPosts(num) {
      const re = /.*\/(.*?)\.(html|md)/
      const list = this.posts
        .filter(post => {
          const { title } = post;
          return !['Docs', 'Home', '导航'].includes(title);
        })
        .map(post => {
          const execs = re.exec(post.relativePath)
          return {
            ...post,
            updateTimestamp: post.lastUpdated ? new Date(post.lastUpdated).getTime() : new Date().getTime(),
            filename: execs ? execs['1'] : '',
            formatDay: this.formatDate(post.lastUpdated ? new Date(post.lastUpdated) : new Date())
          }
        })
        .sort((a, b) => b.updateTimestamp - a.updateTimestamp)
        .slice(0, num)
      return list
    },
    
    formatDate(date) {
      if (!(date instanceof Date)) {
        return 
      }

      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    },

    loadMore() {
      if (this.timeout) {
        return
      }

      if (this.page * this.step >= this.num) {
        this.btnInfo = '加载完成'
        this.$refs.btn.style.opacity = 0
        this.timeout = setTimeout(() => this.showBtn = false, 300)
      } else {
        this.page += 1
      }
    }
  }
}
</script>

<style scoped>

.page-guide-btn {
  text-align: center;
  margin: 30px 0;
}

.page-guide-btn div {
  display: inline-block;
  color: #fff;
  background-color: #46bd87;
  padding: 0.6rem 1.2rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  box-sizing: border-box;
  border-bottom: 1px solid #46bd87;
}

.page-guide-btn div:hover {
  background-color: #46bd87;
  cursor: pointer;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

h2 {
  margin: 0;
  font-size: 1rem;
  border-bottom: none;
}

.theme-default-content:not(.custom) a:hover {
  text-decoration: none;
}

.container {
  width: 100%;
  margin: 1rem auto auto;
  padding-right: 1rem;
  padding-left: 1rem;
}

.list {
  margin-left: -1rem;
  margin-right: -1rem;
}

.list-item {
  /* margin-bottom: 1rem; */
}

.list-item:hover {
  background-color: #f7fafc;
}

.list-item-content {
  padding: 1rem;
  outline: 0;
  display: block;
  cursor: pointer;
  font-size: .75rem;
  border-radius: .25rem;
  color: #553c9a;
  text-decoration: none;
  background-color: transparent;
}

.font-bold {
  font-weight: 700;
}

.text-gray-700 {
  color: #4a5568;
}


.text-gray-800 {
  color: #2d3748;
}

.text-gray-900 {
  color: #1a202c;
}

.block {
  display: block;
}

.leading-relaxed {
  line-height: 1.625;
}

@media (min-width: 1024px) {
  .container {
      max-width:48rem
  }
}

@media (min-width: 768px) {
  .md\:h-16 {
      height:4rem
  }

  .md\:mt-24 {
      margin-top: 6rem
  }

  .md\:py-4 {
      padding-top: 1rem;
      padding-bottom: 1rem
  }

  .md\:px-8 {
      padding-left: 2rem;
      padding-right: 2rem
  }

  .md\:text-lg {
      font-size: 1.125rem
  }

  .md\:text-2xl {
      font-size: 1rem
  }

  .md\:text-3xl {
      font-size: 1.875rem
  }
}
</style>