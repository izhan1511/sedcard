<template>
  <div class="col-span-5 grid grid-cols-5">
    <!-- Modal -->
    <div
      v-if="activeModal"
      class="col-span-6 rounded-lg shadow dark:bg-gray-700 w-full"
    >
      <!-- Modal header -->
      <div
        class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600"
      >
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
          Crop Image
        </h3>
        <button
          @click="$emit('toggleActiveModal', false)"
          type="button"
          class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
          data-modal-toggle="defaultModal"
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="sr-only">Close modal</span>
        </button>
      </div>
      <!-- Modal body -->
      <div class="p-6 grid grid-cols-2 gap-x-2">
        <!-- Cropper -->
        <div>
          <clipper-basic
            :min-width="minWidth"
            :min-height="minHeight"
            ref="clipper"
            :src="imageRef"
            preview="preview"
            class="col-span-1 w-full"
          ></clipper-basic>
        </div>
        <div>
          <clipper-preview
            class="col-span-1 fixed md w-[200px]"
            name="preview"
          ></clipper-preview>
        </div>
      </div>
      <!-- Modal footer -->
      <div
        class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600"
      >
        <button
          @click="getResult"
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Clip Image
        </button>
      </div>
    </div>
    <!-- Editor -->
    <div v-else class="col-span-5">
      <!-- Front Editor -->
      <div
        v-if="activeForm === 'front' && !activeModal"
        class="relative w-[350px] h-[500px]"
      >
        <img v-if="imageResultURL" :src="imageResultURL" alt="user-image" />
        <p class="text-sm font-semibold" v-else>Please Upload an Image</p>
        <div
          :style="{
            'font-family': frontFormInput.font,
            'text-align': frontFormInput.textAlignment,
          }"
        >
          <h3
            :style="[
              getTemplate.h3,
              {
                color: frontFormInput.fontColor,
                fontSize: frontFormInput.fontSize + 'px',
              },
              ,
            ]"
          >
            {{ frontFormInput.name }}
          </h3>
          <p :style="getTemplate.p">
            {{ frontFormInput.tagline }}
          </p>
        </div>
      </div>
      <!-- Back Editor -->
      <div
        v-else-if="activeForm === 'back'"
        class="col-span-4 rounded-md m-0 p-0"
      >
        <div
          v-if="backFormInput.backImageURL === ''"
          class="text-center w-fill text-sm font-semibold p-5"
        >
          <span>Please Upload an Image</span>
        </div>
        <div v-else>
          <div class="flex flex-row items-center justify-center">
            <div class="flex-1">
              <!-- Cropper -->
              <clipper-basic
                ref="clipper"
                :src="imageRef"
                preview="preview"
              ></clipper-basic>
            </div>
            <div class="flex">
              <clipper-preview
                class="basic md"
                name="preview"
              ></clipper-preview>
            </div>
          </div>
        </div>
      </div>
      <!-- CheckForm Editor -->
      <div v-else class="col-span-4 rounded-md m-0 p-0">
        <img class="col-span-2" :src="imageResultURL" alt="front" />
        <img class="col-span-2" :src="backmageResultURL" alt="back" />
      </div>
    </div>
    <!-- Spacer -->
    <div class="col-span-1"></div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  props: {
    activeForm: {
      type: String,
      default: "front",
    },
    activeModal: {
      type: Boolean,
      default: false,
    },
    frontFormInput: {
      type: Object,
    },
    backFormInput: {
      type: Object,
    },
  },
  computed: {
    ...mapGetters(["getSelectedTemplate"]),
    imageRef() {
      return this.activeForm === "front"
        ? this.frontFormInput.imageURL
        : this.backFormInput.backImageURL;
    },
    getTemplate() {
      switch (this.getSelectedTemplate) {
        case 1:
          return this.templateOne;
        case 2:
          return this.templateTwo;
        case 3:
          return this.templateThree;
        default:
          return this.templateOne;
      }
    },
  },
  data() {
    return {
      minWidth: 5,
      minHeight: 15,
      imageResultURL: "",
      backImageResultURL: "",
      templateOne: {
        img: {
          width: "350px",
          height: "500px",
        },
        h3: {
          width: "350px",
          position: "absolute",
          top: "400px",
          left: 0,
          "z-index": 100,
          color: "#000000",
          "background-color": "white",
          "font-size": 32,
        },
        p: {
          width: "350px",
          position: "absolute",
          top: "460px",
          left: 0,
          "z-index": 100,
          color: "#FFFFFF",
          "background-color": "transparent",
        },
      },
      templateTwo: {
        img: {
          margin: 0,
          padding: 0,
          width: "350px",
          "background-color": "transparent",
        },
        h3: {
          "font-size": "large",
          "text-align": "center",
          padding: "0px 10px 0px 10px",
          color: "#000000",
          "background-color": "#FFFFFF",
          position: "relative",
          bottom: 0,
          right: 0,
        },
        p: {
          "text-align": "center",
          padding: "0px 10px 0px 10px",
          color: "#FFFFFF",
          background: "transparent",
          position: "relative",
          bottom: 0,
          right: 0,
        },
      },
      templateThree: {
        img: {
          margin: 0,
          padding: 0,
          width: "350px",
          "background-color": "transparent",
        },
        h3: {
          "font-size": "large",
          "text-align": "center",
          padding: "50px",
          color: "#000000",
          "background-color": "#FFFFFF",
          position: "relative",
          bottom: 0,
          right: 0,
        },
        p: {
          "text-align": "center",
          padding: "0px 10px 0px 10px",
          color: "#FFFFFF",
          background: "transparent",
          position: "relative",
          bottom: 0,
          right: 0,
        },
      },
    };
  },
  methods: {
    ...mapMutations(["setImageURL"]),
    getResult() {
      if (this.activeForm === "front") {
        const canvas = this.$refs.clipper.clip();
        this.imageResultURL = canvas.toDataURL("image/jpeg", 1);
        this.setImageURL({ URL: this.imageResultURL, type: this.activeForm });
      } else {
        const canvas = this.$refs.clipper.clip();
        this.backImageResultURL = canvas.toDataURL("image/jpeg", 1);
        this.setImageURL({
          URL: this.backImageResultURL,
          type: this.activeForm,
        });
      }
      this.$emit("toggleActiveModal", false);
    },
  },
};
</script>
