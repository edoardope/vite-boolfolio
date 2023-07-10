<script>
export default {
  name: "Header",
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<template>
  <nav class="container-fluid">
    <div class="d-flex justify-content-between">
      <!-- logo -->
      <img src="" alt="logo">
      <!-- menu opt -->
      <ul>
        <li class="text-color d-none d-xl-inline-block"><a href="/">HOME</a></li>
        <li class="text-color d-none d-xl-inline-block"><a href="/portfolio">PORTFOLIO</a></li>
        <li class="text-color d-none d-xl-inline-block"><a href="">RESUME</a></li>
        <li class="w-shadow"><button id="nav-btn2" type="button" class="btn text-danger">U</button></li>
        <li class="w-shadow"><button id="nav-btn" type="button" class="btn text-danger">LINK</button></li>
        <button id="off-canv-btn" class="btn btn-primary ms-4 text-danger" type="button" data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><i
            class="fa-solid fa-bars"></i></button>
        <!-- offcanv content -->
        <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions"
          aria-labelledby="offcanvasWithBothOptionsLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdrop with scrolling</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <p>Try scrolling the rest of the page to see this option in action.</p>
          </div>
        </div>
      </ul>

    </div>
  </nav>
</template>

<style lang="scss" scoped></style>
