<template>
  <div
    class="grid grid-cols-3 gap-y-4 bg-white text-black place-items-center py-4"
  >
    <!-- User Images -->
    <div class="col-span-3 grid grid-cols-3 gap-x-4">
      <img
        class="w-[190px]"
        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80"
        alt="user-image"
      />
      <img
        class="w-[190px]"
        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80"
        alt="user-image"
      />
      <img
        class="w-[190px]"
        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80"
        alt="user-image"
      />
    </div>
    <div class="col-span-3 grid grid-cols-3 gap-x-4">
      <img
        class="w-[190px]"
        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80"
        alt="user-image"
      />
      <img
        class="w-[190px]"
        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80"
        alt="user-image"
      />
      <img
        class="w-[190px]"
        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80"
        alt="user-image"
      />
    </div>
    <div class="col-span-3 grid grid-cols-3 gap-x-4">
      <img
        class="w-[190px]"
        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80"
        alt="user-image"
      />
      <img
        class="w-[190px]"
        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80"
        alt="user-image"
      />
      <img
        class="w-[190px]"
        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80"
        alt="user-image"
      />
    </div>
    <!-- User Details -->
    <div class="col-span-3">
      <!-- <p class="w-full">
        Height: {{ userData.height }} &bull; Chest: {{ userData.chest }} &bull;
        Waist: {{ userData.waist }} &bull; Hip: {{ userData.hip }} &bull; Eyes:
        {{ userData.eyes }} &bull; Hair: {{ userData.hair }} &bull; Shoe:
        {{ userData.shoes }}
      </p> -->
      <p class="text-xs font-semibold text-black">
        Height: 5'11" &bull; Chest: 52 &bull; Waist: 34 &bull; Hip: 46 &bull;
        Eyes: Brown: &bull; Hair: Black &bull; Shoe: 44
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AcomEditor",
  props: {
    userData: Object,
  },
};
</script>
