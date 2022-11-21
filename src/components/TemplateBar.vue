<template>
  <div class="grid grid-cols-1 h-screen overflow-y-scroll pt-5">
    <!-- Template Images -->
    <ul>
      <!-- Heading Text -->
      <div class="text-center">
        <h1 class="font-bold text-lg text-black">Change Template</h1>
        <p class="text-xs">Choose a template to start editing.</p>
      </div>
      <li @click="emitSelectedTemplate(1)">
        <img class="p-5" src="../assets/img/template1.png" alt="template1" />
      </li>
      <li @click="emitSelectedTemplate(2)">
        <img class="p-5" src="../assets/img/template2.png" alt="template2" />
      </li>
      <li @click="emitSelectedTemplate(3)">
        <img
          class="p-5 mb-[100px]"
          src="../assets/img/template3.png"
          alt="template3"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "TemplateBar",
  methods: {
    ...mapMutations(["setSelectedTemplate"]),
    emitSelectedTemplate(template) {
      this.setSelectedTemplate({ template });
    },
  },
};
</script>

<style scoped>
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: lightgray;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: gray;
}
</style>
