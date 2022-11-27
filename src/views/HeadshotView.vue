<template>
  <div class="bg-gray-100 text-gray-400 grid grid-cols-12 overflow-hidden">
    <LeftBar name="Your Name Here" tagline="Your Tagline Here" />
    <TemplateBar @changeTemplate="changeTemplate" />
  </div>
</template>

<script>
import { mapMutations } from "vuex";

import LeftBar from "@/components/LeftBar.vue";
import TemplateBar from "@/components/TemplateBar.vue";

export default {
  name: "HeadshotView",
  components: {
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
