<template>
  <div class="log_in" >

    <h1>log in</h1>
    <div class="formularioEmail">
        <label for="email">Enter your email:<br> </label>

        <input type="email" id="email" pattern=".+@globex\.com" size="30" required>

    </div>

    <div class="formulariopassword">
        <label for="password">Password: <br></label>

        <input type="password" id="password">
    </div>
     
    <div class="log_inB"> 
      <b-button variant="success">Log in</b-button>
    </div>

  </div>
   
</template>
<style >
.log_in{
  text-align: center;
  border-radius: 10px;
  width: 570px;
  height: 700px;
  box-shadow: 0px 0px 10px;
  position: absolute;
  top: 150px;
  left: 650px;
  background-color: rgba(248, 156, 18, 0.664);
   }
.log_inB {
   width: 50px;
  height: 75px;
  margin-bottom: 10%;
   position: absolute;
    top: 650px;
    left: 250px;

}

.formularioEmail{
  position: absolute;
    top: 150px;
    left: 160px;
}

.formulariopassword{
  position: absolute;
    top: 230px;
    left: 190px;
}
</style>