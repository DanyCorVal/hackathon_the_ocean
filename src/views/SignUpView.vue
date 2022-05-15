<template>

<div class="body-sign">
    <div class="form_sign" id="signUp">

        <h1>sign up</h1>

        <div class="row g-2">
            <div class="col-md">
                <div class="form-floating">
                    <input type="text" class="form-control" id="floatingInputGrid">
                    <label for="floatingInputGrid">Name</label>
                </div>
            </div>

            <div class="col-md">
                <div class="form-floating">
                    <input type="text" class="form-control" id="floatingInputGrid">
                    <label for="floatingInputGrid">Last Name</label>
                </div>
            </div>

            <!-- Aclaración: Validar Metodos de obtencion de apellidos-->
            <div class="col-md"> 
                <div class="form-floating">
                    <input type="text" class="form-control" id="floatingInputGrid">
                    <label for="floatingInputGrid">2nd Last Name</label>
                </div>
            </div>

        </div>
        

        <!-- Credenciales -->
        <div class="col-md">
            <div class="form-floating">
                <input type="text" class="form-control" id="floatingInputGrid">
                <label for="floatingInputGrid">Username</label>
            </div>
        </div>

        <div class="row g-2">
            <div class="col-md">
                <div class="form-floating">
                    <input type="email" class="form-control" id="floatingInputGrid"  placeholder="name@example.com">
                    <label for="floatingInputGrid">Email</label>
                </div>
            </div>

            <div class="col-md">
                <div class="form-floating">
                    <input type="password" class="form-control" id="floatingInputGrid">
                    <label for="floatingInputGrid">Password</label>
                </div>
            </div>
        </div>

        <div class="col-auto">
            <button type="submit" class="btn btn-login mb-3">Confirm identity</button>
        </div>

        <router-link to="/login" class="register">i have account</router-link>
    </div>

    </div>
</template>

