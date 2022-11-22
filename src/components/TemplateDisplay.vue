<template>
  <div class="col-span-6 grid grid-cols-6">
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
      <div class="p-6 grid grid-cols-2 gap-x-28">
        <!-- Cropper -->
        <div>
          <clipper-basic
            ref="clipper"
            class="basic md clipper-basic"
            :scale="scale"
            :ratio="ratio"
            :src="imageRef"
            bg-color="black"
            preview="preview"
          ></clipper-basic>
        </div>
        <div>
          <clipper-preview
            class="col-span-1 basic md w-[200px] h-[200px]"
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
        :style="[
          getTemplate.main,
          {
            backgroundColor: frontFormInput.background,
          },
        ]"
      >
        <img
          class="w-[350px] h-[500px]"
          v-if="imageResultURL"
          :src="imageResultURL"
          alt="user-image"
        />
        <p class="text-sm font-semibold" v-else>Please Upload an Image</p>
        <div
          :style="{
            'font-family': frontFormInput.font,
            'text-align': frontFormInput.textAlignment,
            'background-color': frontFormInput.background,
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
        class="relative w-[350px] h-[500px]"
      >
        <div
          v-if="backFormInput.backImageURL === ''"
          class="text-center w-fill text-sm font-semibold p-5"
        >
          <span>Please Upload an Image</span>
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
      <!-- CheckForm Editor -->
      <div
        v-else
        class="col-span-6 flex flex-row items-center justify-center space-x-4 rounded-md m-0 p-0"
      >
        <!-- Front Result -->
        <div
          class="col-span-3"
          :style="[
            getTemplate.main,
            {
              backgroundColor: frontFormInput.background,
            },
          ]"
        >
          <img
            class="w-[350px] h-[500px]"
            v-if="imageResultURL"
            :src="imageResultURL"
            alt="user-image"
          />
          <p class="text-sm font-semibold" v-else>Please Upload an Image</p>
          <div
            :style="{
              'font-family': frontFormInput.font,
              'text-align': frontFormInput.textAlignment,
              'background-color': frontFormInput.background,
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
        <!-- Back Result -->
        <div class="col-span-3 relative w-[350px] h-[500px]">
          <div
            v-if="backFormInput.backImageURL === ''"
            class="text-center w-fill text-sm font-semibold p-5"
          >
            <span>Please Upload an Image</span>
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
      </div>
    </div>
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
      ratio: 0.7,
      scale: 1,
      imageResultURL: "",
      backImageResultURL: "",
      templateOne: {
        main: {
          width: "350px",
          height: "500px",
          position: "relative",
        },
        h3: {
          width: "100%",
          position: "absolute",
          top: "420px",
          left: 0,
          "z-index": 100,
          color: "#000000",
          "background-color": "white",
          "font-size": 32,
        },
        p: {
          width: "100%",
          position: "absolute",
          top: "480px",
          left: 0,
          "z-index": 100,
          color: "#FFFFFF",
          "background-color": "transparent",
        },
      },
      templateTwo: {
        main: {
          width: "350px",
          height: "600px",
          padding: "0 20px 0 20px",
          position: "relative",
          "text-align": "center",
        },
        img: {
          width: "350px",
          height: "500px",
        },
        h3: {
          width: "100%",
          position: "absolute",
          top: "495px",
          left: 0,
          "z-index": 100,
          color: "black",
          "font-size": "xx-large",
          padding: "5px 0 5px 0",
        },
        p: {
          width: "100%",
          position: "absolute",
          top: "540px",
          left: 0,
          "z-index": 100,
          color: "black",
          padding: "5px 0 5px 0",
        },
      },
      templateThree: {
        main: {
          width: "350px",
          height: "500px",
          position: "relative",
          "text-align": "center",
          overflow: "hidden",
        },
        img: {
          width: "350px",
          height: "500px",
        },
        h3: {
          width: "100%",
          position: "absolute",
          top: "115px",
          left: "100px",
          "z-index": 100,
          color: "white",
          "background-color": "transparent",
          "font-size": "xx-large",
          transform: "rotate(-75deg)",
        },
        p: {
          width: "522px",
          position: "absolute",
          top: "190px",
          left: "95px",
          "z-index": 100,
          color: "black",
          "background-color": "white",
          transform: "rotate(-75deg)",
          "padding-top": "10px",
          "padding-bottom": "125px",
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
