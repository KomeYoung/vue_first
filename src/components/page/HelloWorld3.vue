<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
       <h3>{{ msg }}</h3>
    <h2>Essential Links</h2>
    <div class="cities" v-html="msg3"></div>
    <div class="cities" >
      <p>{{msg2}}</p>
      <input v-model="msg2">
      <p @click="p_alert">onclick</p>
    </div>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_parent"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_self"
        >
          Community Chat1
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_top"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld3',
  data () {
    return {
      msg: 'Welcome333 to Your Vue.js App',
      msg2: '11',
      msg3: '<h3>菜鸟教程</h3>'
    }
  },
  methods: {
    p_alert: function () {
      alert('1111')
      // console.log(111)
    }
    // this: msg2 = '1111'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
p {
  font-size: 60px;
  color: #267450;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #3da072;
}
.cities{
  background-color: antiquewhite;
  color: #3da072;
  padding: 40px;
}
</style>
