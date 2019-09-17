<template>
  <section class="container">
    <div>
      <logo />

      <h1 class="title">nuxt-project1</h1>
      <h2 class="subtitle">My finest Nuxt.js project</h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
      </div>
      <h1 class="subtitle">Users</h1>

      <table class="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.role }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>



<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>



<script>
import Logo from "~/components/Logo.vue";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    Logo
  },
  created() {
    // will trigger actions -> getAllUsers
    this.$store.dispatch("user/getAllUsers");
  },
  computed: {
    //use this pattern if state in modules
    ...mapState({
      users: state => state.user.users
    })

    //use this pattern if state in root
    //...mapState(['users'])
  },
  methods: {
    //use this pattern if action in modules
    ...mapActions("user", ["getAllUsers"])

    //use this pattern if action in root
    // ...mapActions(['getAllUsers'])
  }
};
</script>