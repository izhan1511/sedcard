<template>
  <div
    class="w-screen flex flex-row items-center bg-white z-50 h-16 text-sm font-semibold drop-shadow-md"
  >
    <!-- Logo -->
    <div class="flex flex-1 justify-center">
      <img src="#" alt="logo" />
    </div>

    <!-- Nav Items -->
    <div class="flex flex-1 justify-center text-center">
      <ul class="flex flex-row">
        <li
          class="cursor-pointer bg-white text-sm border border-gray-200 p-3 shadow-sm w-32 rounded-l-lg"
          :class="{ 'text-primary bg-gray-100': selected === 'Headshot' }"
          @click="isSelected('Headshot')"
        >
          <router-link to="/headshot">Headshot</router-link>
        </li>
        <li
          class="cursor-pointer bg-white text-sm border border-gray-200 p-3 shadow-sm w-32 rounded-r-lg"
          :class="{ 'text-primary bg-gray-100': selected === 'ACOM' }"
          @click="isSelected('ACOM')"
        >
          <router-link to="/acom">ACOM</router-link>
        </li>
      </ul>
    </div>

    <!-- Empty Div -->
    <div class="flex flex-1"></div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      selected: "Headshot",
    };
  },
  methods: {
    isSelected(value) {
      this.selected = value;
    },
  },
};
</script>
