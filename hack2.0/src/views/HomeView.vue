<template>
  <div class="home" id = "fondoHome">
   
  </div>

  <div class="Nosotros" id = "Nosotros"> 
  <h1 id="TNosotros" CLASS="TNosotros">Nosotros</h1>
  <h3 id="TNosotros" CLASS="TNosotros">Somos un grupo organizado con el fin de preeservar la fauna maritima</h3>
    <div class="apoyanos" id = "apoyanos">
      <b-button variant="success">Apoyanos</b-button>


    </div>

  </div>

  <div class="Donaciones" id = "donaciones"> 
  <h1 id="Tdonaciones" CLASS="Tdonaciones">Donaciones</h1>
  <h3 id="Tdonacione" CLASS="Tdonaciones">Puedes apoyar el proyecto donando la cantiudad de dinero que quieras esto nos ayuda a invertir en el cuidadado de la fauna marina</h3>
  
    <div class="Donacion" id = "Donacion">
      <b-button variant="success">Donar</b-button>


    </div>

  </div>

  <div class="organiza" id = "organiza"> 
  <h1 id="Torganiza" CLASS="Torganiza">Organiza</h1>
  <h3 id="Torganiza" CLASS="Torganiza">Puedes tambien apoyar el proyecto organizando un brigada o un proyecto para el cuidadado de la fauna marina</h3>
  
    <div class="organizaB" id = "organizaB">
      <b-button variant="success">Organiza</b-button>


    </div>

  </div>

</template>

<script>


export default {
  name: 'HomeView',
 
}
</script>
<style>

.Nosotros{
            text-align: center;
            border-radius: 10px;
            width: 570px;
            height: 700px;
            box-shadow: 0px 0px 10px;
            position: absolute;
            top: 150px;
            left: 50px;
            background-color: rgba(248, 156, 18, 0.664);
        }
.apoyanos {
   width: 50px;
  height: 75px;
  margin-bottom: 10%;
   position: absolute;
    top: 650px;
    left: 250px;
}

.Donaciones{
            text-align: center;
            border-radius: 10px;
            width: 570px;
            height: 700px;
            box-shadow: 0px 0px 10px;
            position: absolute;
            top: 150px;
            left: 650px;
            background-color: #93416d;
        }
.Donacion {
   width: 50px;
  height: 75px;
  margin-bottom: 10%;
   position: absolute;
    top: 650px;
    left: 250px;

}
.home{
    background-image: url("../assets/litorales.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-color: transparent;
    width: 1880px;
    height: 1000px;

        }
.organiza{
            text-align: center;
            border-radius: 10px;
            width: 570px;
            height: 700px;
            box-shadow: 0px 0px 10px;
            position: absolute;
            top: 150px;
            left: 1250px;
            background-color: rgba(248, 156, 18, 0.664);
        }
.organizaB {
   width: 50px;
  height: 75px;
  margin-bottom: 10%;
   position: absolute;
    top: 650px;
    left: 250px;

}
</style>
