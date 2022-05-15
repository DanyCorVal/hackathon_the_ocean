<template>
      <!-- Hero -->
  <div class="Hero">
    <h1>Embajadores por el mar</h1>
  </div>

  <main>  
    
    <section class="Tabs" id="Project">
      <h1>Project</h1>
      <h3>something about project</h3>
    </section>

    <section class="Tabs" id="Enterprise">
      <h1>Enterprise</h1>

        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            
            <div class="card bg-dark text-white">
              <img src="./../../public/Assets/slides.jpg" class="card-img" alt="...">
              <div class="card-img-overlay">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text">Last updated 3 mins ago</p>
              </div>
            </div>

          </div>

          <div class="col">

            <div class="card bg-dark text-white">
              <img src="./../../public/Assets/slides.jpg" class="card-img" alt="...">
              <div class="card-img-overlay">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text">Last updated 3 mins ago</p>
              </div>
            </div>

          </div>

          <div class="col">

            <div class="card bg-dark text-white">
              <img src="./../../public/Assets/slides.jpg" class="card-img" alt="...">
              <div class="card-img-overlay">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text">Last updated 3 mins ago</p>
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
            <img src="../../public/Assets/slides.jpg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>

          <div class="carousel-item" data-bs-interval="2000">
            <img src="../../public/Assets/slides.jpg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>

          <div class="carousel-item">
            <img src="../../public/Assets/slides.jpg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
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

    <section class="Tabs" id="Embassadors">
      <!--<h1>Embassadors</h1>
      <h3>something about embassadors</h3>-->
      
      <div id="gallery">
        <div><img src="https://picsum.photos/600/600/?image=512"/></div>
        <div><img src="https://picsum.photos/600/600/?image=513"/></div>
        <div><img src="https://picsum.photos/600/600/?image=514"/></div>
        <div><img src="https://picsum.photos/600/600/?image=515"/></div>
        <div><img src="https://picsum.photos/600/600/?image=516"/></div>
        <div><img src="https://picsum.photos/600/600/?image=517"/></div>
        <div><img src="https://picsum.photos/600/600/?image=518"/></div>
        <div><img src="https://picsum.photos/600/600/?image=519"/></div>
        <div><img src="https://picsum.photos/600/600/?image=520"/></div>
        <div><img src="https://picsum.photos/600/600/?image=521"/></div>
        <div><img src="https://picsum.photos/600/600/?image=522"/></div>
        <div><img src="https://picsum.photos/600/600/?image=523"/></div>
        <div><img src="https://picsum.photos/600/600/?image=524"/></div>
        <div><img src="https://picsum.photos/600/600/?image=525"/></div>
        <div><img src="https://picsum.photos/600/600/?image=526"/></div>
        <div><img src="https://picsum.photos/600/600/?image=527"/></div>
        <div><img src="https://picsum.photos/600/600/?image=528"/></div>
        <div><img src="https://picsum.photos/600/600/?image=529"/></div>
      </div>
    </section>

    <section class="Tabs" id="BecomeEmbassadors">
      <h1><router-link to="/SignUp">Become an Embassadors</router-link></h1>
      <h3>something about become embassadors</h3>
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