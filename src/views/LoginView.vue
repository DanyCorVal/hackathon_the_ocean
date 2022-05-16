<style>
.error {
  margin: 1rem 0 0;
  color: #ff4a96;
}
</style>

<template>
  <div class="body-sign">


    <div class="form_sign" id="log_in">

        <h1>log in</h1>

        <div class="mb-3">
          <label for="email" class="form-label">Enter your email or username:</label>
          <input type="text" class="form-control" id="email" size="30" required v-model="login.username">
        </div>

        <div class="mb-3">
          <label for="password" class="form-label">Enter your password:</label>
          <input type="password" id="password" class="form-control" required v-model="login.password">
        </div>
        <p v-if="error" class="error">Has introducido mal el email o la contraseña.</p>
        <div class="col-auto">
            <button type="submit" class="btn btn-login mb-3" @click="login1">Confirm identity</button>
        </div>

        <router-link to="/SignUp" class="register">i don't have account</router-link>
    </div>
  </div>
</template>

<script>
  import LoginService from "./../services/LoginService";
  export default {
    name: "login",
    data() {
      return {
        login: {
          username: "",
          password: "",
          error: false
        }
      };
    },
    methods: {
      login1() {
        var data = {
          username: this.login.username,
          password: this.login.password
        };
        LoginService.login(data)
        .then(response => {

          if(response.data.encontrado===true){
            this.$router.push({ name: 'Dashboard' })
          }else{
            this.error = true;
          }

          this.$forceUpdate();

          })
          .catch(e => {
            console.log(e);
             this.error = true;
          });
      }
    }
  };
</script>