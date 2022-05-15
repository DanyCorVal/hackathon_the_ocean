<template>
  <div class="body-sign">


    <div class="form_sign" id="log_in">

        <h1>log in</h1>

        <div class="mb-3">
          <label for="email" class="form-label">Enter your email or username:</label>
          <input type="text" class="form-control" id="email" size="30" required>
        </div>

        <div class="mb-3">
          <label for="password" class="form-label">Enter your password:</label>
          <input type="password" id="password" class="form-control">
        </div>

        <div class="col-auto">
            <button type="submit" class="btn btn-login mb-3">Confirm identity</button>
        </div>

        <router-link to="/SignUp" class="register">i don't have account</router-link>
    </div>
  </div>
</template>