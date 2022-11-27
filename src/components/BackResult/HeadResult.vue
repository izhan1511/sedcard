<template>
  <div class="col-span-2 relative w-[350px] h-[500px]">
    <div
      v-if="backImageURL === ''"
      class="text-center w-fill text-sm font-semibold py-5"
    >
      <span>Please Upload a Back Image to get Started</span>
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
  name: "HeadResult",
  props: {
    backImageURL: String,
    backImageResultURL: String,
  },
};
</script>
