<template>
  
  <nav class="navbar navbar-expand">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand"><img src="https://cdn-icons-png.flaticon.com/512/1198/1198657.png?w=740" alt="logo" height="50"></router-link>
      
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
          
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          
          <!--<li class="nav-item">
            <router-link to="/about" class="nav-link" >Link</router-link>
          </li>

          <li class="nav-item">
            <router-link to="/about" class="nav-link" >Link</router-link>
          </li>

          <li class="nav-item">
            <router-link to="/about" class="nav-link" >Link</router-link>
          </li>-->
        </ul>

        <ul class="nav justify-content-end">
          <li class="nav-item">
            <router-link to="/login" class="nav-link" id="btnLogin">Login</router-link>
          </li>
        </ul>
      </div>

    </div>
  </nav>

  <router-view/>
</template>
