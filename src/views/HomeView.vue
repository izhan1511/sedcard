<template>
  <div class="bg-gray-100 overflow-hidden h-screen text-gray-400">
    <NavBar />
    <div class="grid grid-cols-12">
      <div class="col-span-9">
        <LeftBar name="Your Name Here" tagline="Your Tagline Here" />
      </div>
      <!-- Spacer -->
      <div class="col-span-1"></div>
      <div class="col-span-2">
        <TemplateBar @changeTemplate="changeTemplate" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

import NavBar from "@/components/NavBar.vue";
import LeftBar from "@/components/LeftBar.vue";
import TemplateBar from "@/components/TemplateBar.vue";

export default {
  name: "HomeView",
  components: {
    NavBar,
    LeftBar,
    TemplateBar,
  },
  data() {
    return {
      selectedTemplate: 1,
    };
  },
  methods: {
    ...mapMutations(["setSelectedTemplate"]),
    changeTemplate(value) {
      this.selectedTemplate = value;
      this.setSelectedTemplate(this.selectedTemplate);
    },
  },
};
</script>
