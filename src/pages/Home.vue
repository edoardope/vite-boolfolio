

<script>
export default {
    name: "Home",
    data() {
        return {

        };
    },
    mounted() {

    },
    methods: {

    },
};
</script>

<template>
    <main>
        <!-- welcome to my world -->
        <section id="first-s" class="container-sm">
            <div class="row h100 justify-content-between">
                <!-- img cont xs -->
                <div class="col-12 h100 d-lg-none">
                    <div class="img-c">
                        <div class="img-c2">
                            <!-- <img id="c" src="asset/img/WhatsApp Image 2023-02-19 at 16.52.31.png" alt=""> -->
                        </div>
                    </div>
                </div>

                <div id="wtmw" class="col-12 col-lg-7 pt-5">
                    <!-- hi my name is -->
                    <span class="text-color d-block mt-5 fw-bold">WELCOME TO MY WORLD</span>
                    <h1 class="text-white mt-3 font-s-4">HI, i'm <span class="text-danger">Edoardo Penco</span></h1>
                    <div class="dinamic-text-c">
                        <span id="first" class="text-dc text-white mb-5 font-s-3">a Web Developer</span>
                    </div>
                    <p class="text-color mt-3" style="width: 90%;">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Deserunt, eligendi id error, quos illo doloremque impedit itaque minus blanditiis ut, dignissimos
                        vero beatae reprehenderit eius. Quam minus unde ea soluta.</p>
                    <!-- social and skill-->
                    <div id="social-skill" class="row justify-content-between">
                        <!-- social -->
                        <div class="col-12 col-xl-5">
                            <span class="text-color d-block">FIND ME ON</span>
                            <button id="social-btn" type="button" class="btn text-danger p-3 ms-1 mt-3"><i
                                    class="fa-brands fa-square-facebook fa-beat fa-lg"></i></button>
                            <button id="social-btn" type="button" class="btn text-danger p-3 ms-3 mt-3"><i
                                    class="fa-brands fa-square-facebook fa-beat fa-lg"></i></button>
                            <button id="social-btn" type="button" class="btn text-danger p-3 ms-3 mt-3"><i
                                    class="fa-brands fa-square-facebook fa-beat fa-lg"></i></button>

                        </div>
                        <!-- skill -->
                        <div id="skill" class="col-12 col-xl-5">
                            <span class="text-color d-block">MY SKILL</span>
                            <button id="social-btn" type="button" class="btn text-danger p-3 ms-1 mt-3"><img class="img-100"
                                    src="asset/img/html-5.png" alt=""></button>
                            <button id="social-btn" type="button" class="btn text-danger p-3 ms-3 mt-3"><img class="img-100"
                                    src="asset/img/css-3.png" alt=""></button>
                            <button id="social-btn" type="button" class="btn text-danger p-3 ms-3 mt-3"><img class="img-100"
                                    src="asset/img/java-script.png" alt=""></button>
                            <button id="social-btn" type="button"
                                class="d-none d-xl-inline-block btn text-danger p-3 ms-5 mt-3"><img class="img-100"
                                    src="asset/img/bootstrap.png" alt=""></button>
                            <button id="social-btn" type="button" class="d-xl-none btn text-danger p-3 ms-3 mt-3"><img
                                    class="img-100" src="asset/img/bootstrap.png" alt=""></button>
                            <button id="social-btn" type="button" class="btn text-danger p-3 ms-3 mt-3"><img class="img-100"
                                    src="asset/img/php.png" alt=""></button>
                        </div>

                    </div>
                </div>
                <!-- img cont lg -->
                <div class="col-5 h100 d-none d-lg-block">
                    <div class="img-c">
                        <div class="img-c2">
                            <!-- <img id="c" src="" alt=""> -->
                        </div>
                    </div>
                </div>
                <hr>
                <!-- fine welcome to my world -->
            </div>

        </section>
    </main>
</template>

<style lang="scss">
@use '../style/main.scss' as *;
</style>
