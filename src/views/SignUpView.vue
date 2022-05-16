<template>

<div class="body-sign">
    <div class="form_sign" id="signUp">

        <h1>sign up</h1>

        <div class="row g-2">
            <div class="col-md">
                <div class="form-floating">
                    <input type="text" class="form-control" id="floatingInputGrid" v-model="user.name">
                    <label for="floatingInputGrid">Name</label>
                </div>
            </div>

            <div class="col-md">
                <div class="form-floating">
                    <input type="text" class="form-control" id="floatingInputGrid" v-model="user.firtsName">
                    <label for="floatingInputGrid">Last Name</label>
                </div>
            </div>

            <!-- Aclaración: Validar Metodos de obtencion de apellidos-->
            <div class="col-md"> 
                <div class="form-floating">
                    <input type="text" class="form-control" id="floatingInputGrid" v-model="user.lastName">
                    <label for="floatingInputGrid">2nd Last Name</label>
                </div>
            </div>

        </div>
        

        <!-- Credenciales 
        <div class="col-md">
            <div class="form-floating">
                <input type="text" class="form-control" id="floatingInputGrid">
                <label for="floatingInputGrid">Username</label>
            </div>
        </div>-->

        <div class="row g-2">
            <div class="col-md">
                <div class="form-floating">
                    <input type="email" class="form-control" id="floatingInputGrid"  placeholder="name@example.com" v-model="user.username">
                    <label for="floatingInputGrid">Email</label>
                </div>
            </div>

            <div class="col-md">
                <div class="form-floating">
                    <input type="password" class="form-control" id="floatingInputGrid" v-model="user.password">
                    <label for="floatingInputGrid">Password</label>
                </div>
            </div>
        </div>

         <p>{{this.message}}</p>

        <div class="col-auto">
            <button type="submit" class="btn btn-login mb-3" @click="register">Confirm identity</button>
        </div>

        <router-link to="/login" class="register">i have account</router-link>
    </div>

    </div>
</template>

<script>
  import UserService from "./../services/UserService";
  export default {
    name: "userRegister",
    data() {
      return {
        user: {
          name: "",
          firtsName: "",
          lastName: "",
          username: "",
          password: "",
          accessLevel: "",
          profileId: ""
        },
        message: ''
      };
    },
    methods: {
      register() {
        var data = {
          name: this.user.name,
          firtsName: this.user.firtsName,
          lastName: this.user.lastName,
          username: this.user.username,
          password: this.user.password,
          accessLevel: "1",
          profileId: 1
        };
        UserService.create(data)
        .then(response => {

            this.message = response.data.message;
            this.$forceUpdate();

            setTimeout(function(){
                window.location.href = '/#/login';
            }, 3000);
          })
          .catch(e => {
            console.log(e);
            this.message = "Hubo un error";
            this.$forceUpdate();
          });
      }
    }
  };
</script>