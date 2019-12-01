---
title: "导航"
permalink: "guide"
comment: true
single: true
---

> 最近更新了下面这些文章 👇

<ul class="page-guide-ul">
  <li 
    class="page-guide-row"
    v-for="(post, index) in topPublishPosts"
    :key="index"
    href="post"
  >
    <a :href="post.path">《{{post.title}}》</a>
    <span>{{ post.formatDay }}</span>
  </li>
</ul>

<div @click="loadMore" class="page-guide-btn" v-if="showBtn">
  <div ref="btn">{{btnInfo}}</div>
</div>

<script>
export default {
  data() {
    return {
      step: 15,
      posts: [],
      page: 1,
      num: 0,
      btnInfo: '加载更多',
      showBtn: true,
      timeout: null,
    }
  },

  mounted() {
    console.log(this.$site)
    this.posts = this.$site.pages
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

      return this.posts
        .filter(post => {
          const { frontmatter } = post;
          return frontmatter && frontmatter.permalink && frontmatter.title;
        })
        .map(post => {
          const execs = re.exec(post.relativePath)
          return {
            ...post,
            updateTimestamp: (new Date(post.lastUpdated || post.frontmatter.date)).getTime(),
            filename: execs ? execs['1'] : '',
            formatDay: this.formatDate(new Date(post.lastUpdated || post.frontmatter.date))
          }
        })
        .sort((a, b) => b.updateTimestamp - a.updateTimestamp)
        .slice(0, num)
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
.page-guide-ul {
  padding-left: 0;
}

.page-guide-row {
  line-height: 2;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: relative;
}

.page-guide-row::after {
  content: " ";
  width: 100%;
  border-bottom: 1px dashed #aaa;
  position: absolute;
  top: 50%;
  right: 0;
}

.page-guide-row a, .page-guide-row span {
  background: white;
  z-index: 1;
}

.page-guide-row a {
  max-width: 50%;
  padding-right: 20px;
}

.page-guide-row span {
  color: #aaa;
  padding-left: 20px;
}

.page-guide-btn {
  text-align: center;
  margin: 30px 0;
}

.page-guide-btn div {
  display: inline-block;
  color: #fff;
  background-color: #3eaf7c;
  padding: 0.6rem 1.2rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  box-sizing: border-box;
  border-bottom: 1px solid #389d70;
}

.page-guide-btn div:hover {
  background-color: #4abf8a;
  cursor: pointer;
}
</style>