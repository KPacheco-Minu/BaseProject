<template>
  <div class="main">
    <span class="main__title">
      Prueba incode
    </span>

    <div class="main__content">
      <span class="main__action">
        Click to open Camera
      </span>
    </div>

  </div>
</template>

<script>
import { openNativeCamera } from "@/capacitor/myPlugin";

export default {
  name: "App",
  methods: {
    async openCamera() {
      await openNativeCamera();
    }
  }
};
</script>

<style lang="scss">

html {
  background: #F6F7F9;
}

body {
  margin: 0;
}

.main {
  height: 100vh;
  background-color: white;
  padding: 24px;

  &__title {
    font-size: 20px;
    font-weight: bold;;
    color: black;
  }

  &__content {
    padding-top: 24px;
    padding-bottom: 24px;
  }

  &__action {
    margin: 12px 0;
    font-size: 14px;
    color: grey;
  }
}

</style>