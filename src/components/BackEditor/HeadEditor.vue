<template>
  <div class="relative w-[350px] h-[500px]">
    <div
      v-if="backImageURL === ''"
      class="text-center w-fill text-sm font-semibold"
    >
      <img
        class="w-[350px] h-[500px]"
        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80"
        alt="user-image"
      />
    </div>
    <div v-else>
      <img
        class="w-[350px] h-[500px]"
        v-if="backImageResultURL"
        :src="backImageResultURL"
        alt="user-image"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "HeadEditor",
  props: {
    backImageURL: String,
    backImageResultURL: String,
  },
};
</script>
