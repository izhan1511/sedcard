<template>
  <div class="col-span-2 grid grid-cols-1 h-screen overflow-y-scroll pt-5">
    <!-- Template Images -->
    <ul>
      <!-- Heading Text -->
      <div class="text-center mb-5 mt-14">
        <h1 class="font-bold text-lg text-black">Change Template</h1>
        <p class="text-xs">Choose a template to start editing.</p>
      </div>
      <li @click="activateTemplate(1)">
        <img
          class="p-5"
          :class="{ 'bg-[#4E67EB]': activeTemplate === 1 }"
          src="../assets/img/template1.png"
          alt="template1"
        />
      </li>
      <li @click="activateTemplate(2)">
        <img
          class="p-5"
          :class="{ 'bg-[#4E67EB]': activeTemplate === 2 }"
          src="../assets/img/template2.png"
          alt="template2"
        />
      </li>
      <li @click="activateTemplate(3)">
        <img
          class="p-5"
          :class="{ 'bg-[#4E67EB]': activeTemplate === 3 }"
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
  data() {
    return {
      activeTemplate: 1,
    };
  },
  methods: {
    ...mapMutations(["setSelectedTemplate"]),
    emitSelectedTemplate(template) {
      this.setSelectedTemplate({ template });
    },
    activateTemplate(val) {
      this.emitSelectedTemplate(val);
      this.activeTemplate = val;
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
