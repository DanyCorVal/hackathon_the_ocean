<template>
  <!-- Hero -->
  <div class="Hero">
    <h1>Embajadores por el mar</h1>
  </div>

  <main>  
    
    <section class="Tabs" id="Project">
      <h1>Project</h1>
      <h3>Our project is to create a web portal where a catalog of protected fishing areas is displayed, the portal will allow anyone to become an ambassador of the areas and select the way in which they will support said area</h3>
    </section>

    <section class="Tabs" id="Enterprise">
      <h1>Enterprise</h1>

        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            
            <div class="card bg-dark text-white">
              <img src="./../../public/Assets/aeroMexico.jpg" class="card-img" alt="...">
              <div class="card-img-overlay">
                <h5 class="card-title"><b>AEROMÉXICO</b></h5>
                <p class="card-text"><b>With its Vuela Verde program, the airline invites its customers and collaborators to make a contribution of $35.00 when purchasing their flight, the proceeds going to programs that help reduce greenhouse gas emissions.</b></p>
              </div>
            </div>

          </div>

          <div class="col">

            <div class="card bg-dark text-white">
              <img src="./../../public/Assets/bimbo.jpg" class="card-img" alt="...">
              <div class="card-img-overlay">
                <h5 class="card-title"><b> GRUPO BIMBO</b></h5>
                <p class="card-text"> <b>Bimbo has 99 wastewater treatment plants, reusing 76% of the treated water last year. In addition, 73 of its work centers maintain rainwater harvesting systems that are subsequently stored and used.</b></p>
              </div>
            </div>

          </div>

          <div class="col">

            <div class="card bg-dark text-white">
              <img src="./../../public/Assets/cemex.jpg" class="card-img"  alt="...">
              <div class="card-img-overlay">
                <h5 class="card-title"><b>CEMEX</b></h5>
                <p class="card-text"> <b>They implement conservation programs in eight countries, provide environmental education on habitat and biodiversity conservation, and operate 26 certified preservation projects.</b></p>
              </div>
            </div>

          </div>

        </div>
    </section>

    <section class="Tabs" id="ProtectedAreas">
      <!--<h1>Protected Areas</h1>
      <h3>something about protected areas</h3>-->
      <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        
        <div class="carousel-inner">
          
          <div class="carousel-item active" data-bs-interval="10000">
            <img src="../../public/Assets/arrecifes.jpg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>Natural Areas</h5>
              <p>Protected areas that we have in Mexico</p>
            </div>
          </div>

          <div class="carousel-item" data-bs-interval="2000">
            <img src="../../public/Assets/Vaquita_Marina.jpg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>Vaquita Marina</h5>
              <p>The vaquita marina is an endangered species that needs our help</p>
            </div>
          </div>

          <div class="carousel-item">
            <img src="../../public/Assets/area_natural.jpg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>Reefs</h5>
              <p>The environmental impact we have made is very important and with your help we can make a good impact on the ocean.</p>
            </div>
          </div>

        </div>

        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>

        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
        
      </div>
    </section>

    <div class="title">

    </div>

    <section class="Tabs" id="Embassadors">
      <h1>Help the maritime ecosystem</h1>
    
      <h3>If you help the ecosystem we can save our little friends</h3>
      <div id="gallery">
        <div><img src="https://www.tekcrispy.com/wp-content/uploads/2018/12/Acidificaci%C3%B3n-Oc%C3%A9anos.jpg"/></div>
        <div><img src="https://media-pierre-fabre.wedia-group.com/api/wedia/dam/transform/jbcyk9ugcxa5kwwging81cw6gw/AV_SPOR_2015_Pejarakan_Bali_CopyrightPURProjet_05?t=crop&x=0.000&y=0.144&width=1.000&height=0.750&outputWidth=1202&outputHeight=676"/></div>
        <div><img src="https://www.semana.com/resizer/uBINeLt0PRTmBf39BVZ--2pn2TE=/1200x675/filters:format(jpg):quality(50)//cloudfront-us-east-1.images.arcpublishing.com/semana/U5KPOEIT7ZA43KGININLOI7BMY.jpg"/></div>
        <div><img src="https://www.ambientum.com/wp-content/uploads/2020/09/ecosistema-marino.jpg"/></div>
        <div><img src="https://www.renovablesverdes.com/wp-content/uploads/2021/09/Ecosistemas-marinos.jpg"/></div>
        <div><img src="https://s.yimg.com/ny/api/res/1.2/s3kROcB3ZTIagXyGRQu_Rg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://s.yimg.com/uu/api/res/1.2/gy6XPpQtGn.Qt1gwP_fOmA--~B/aD04NTM7dz0xMjgwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/es/lanacion.com.ar/91c6e76cbfebcf0b40ea73062661eecd"/></div>
        <div><img src="https://www.gob.mx/cms/uploads/image/file/418612/12717687_1985518868340772_6065080226008542563_n.jpg"/></div>
        <div><img src="https://diccionarioactual.com/wp-content/uploads/2017/07/ecosistema-acu%C3%A1tico.jpg"/></div>
        <div><img src="https://decologia.info/wp-content/uploads/2019/01/bioma-del-arrecife-de-coral.3.jpg"/></div>
        <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgz3KdxCIJqxgppcvN4rm0okXrmrd_o8KBdw&usqp=CAU"/></div>
        <div><img src="https://www.semana.com/resizer/mGa5Et2J6z4aMrYVz00l6ljPzXo=/1200x675/filters:format(jpg):quality(50)//cloudfront-us-east-1.images.arcpublishing.com/semana/Z2KBSUYSOBBLBMRUECVDNAQEEE.jpg"/></div>
        <div><img src="https://decologia.info/wp-content/uploads/2018/11/perdida-y-destruccion-del-habitat-marino-2.jpg"/></div>
        <div><img src="https://static.dw.com/image/54298064_401.jpeg"/></div>
        <div><img src="https://eresmedioambiente.com/wp-content/uploads/2020/06/ecosistemas-acuaticos.jpg"/></div>
        <div><img src="https://www.un.org/sites/un2.un.org/files/styles/large-article-image-style-16-9/public/field/image/adele_pedder_3crop_1.jpg?itok=3z6gH-EY&c=59f2077ee1f23376dc7286b1d08ebf1d"/></div>
        <div><img src="https://t2.ev.ltmcdn.com/es/posts/1/5/0/la_biodiversidad_marina_51_600.jpg"/></div>
        <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDbwX7BGRZtUIw3u4jxaFwlD-bnEx7lePMcaEIO9sE0RPRmU2WfN3Gs7HCwgfA6TBnU1A&usqp=CAU"/></div>
        <div><img src="https://www.tekcrispy.com/wp-content/uploads/2018/12/Acidificaci%C3%B3n.jpg"/></div>
      </div>
    </section>

    <section class="Tabs" id="BecomeEmbassadors">
      
      <h1> If you want to be part of this beautiful community and be an ambassador <router-link class="embassador" to="/SignUp">become an embassadors</router-link><br>
      something about become embassadors</h1>
    </section>

  </main>
</template>

<script>
export default {
  name: 'HomeView',
  Comment: {

  }
}
</script>
