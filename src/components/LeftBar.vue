<template>
  <div
    class="col-span-10 grid grid-cols-10 h-screen items-center justify-center"
  >
    <div class="col-span-4 grid grid-cols-4">
      <!-- Options Bar -->
      <div class="col-span-1 p-5 font-semibold text-xs">
        <ul class="flex flex-col space-y-8 items-center justify-center">
          <li
            class="flex flex-col items-center cursor-pointer"
            @click="activeForm = 'front'"
            :class="{
              'flex flex-col items-center cursor-pointer text-primary':
                activeForm === 'front',
            }"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
              />
            </svg>
            <span>Front</span>
          </li>
          <li
            class="flex flex-col items-center cursor-pointer"
            :class="{
              'flex flex-col items-center cursor-pointer text-primary':
                activeForm === 'back',
            }"
            @click="activeForm = 'back'"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
              />
            </svg>
            <span>Back</span>
          </li>
          <li
            class="flex flex-col items-center cursor-pointer"
            :class="{
              'flex flex-col items-center cursor-pointer text-primary':
                activeForm === 'checkout',
            }"
            @click="activeForm = 'checkout'"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            <span>Checkout</span>
          </li>
        </ul>
      </div>
      <!-- Form -->
      <div class="col-span-3">
        <!-- Front Form -->
        <div v-if="activeForm === 'front'">
          <div class="bg-white drop-shadow-xl rounded-lg p-5 text-xs h-auto">
            <div class="pb-3">
              <h1 class="text-lg font-semibold text-black">Info</h1>
              <p>Add your information below.</p>
            </div>
            <!-- Info -->
            <form class="col-span-4 grid grid-cols-3 pb-3">
              <input
                type="text"
                placeholder="Name"
                class="py-1 mb-3 border-b border-gray-300 col-span-4"
                v-model="frontFormInput.name"
              />
              <input
                type="text"
                placeholder="Tag line"
                class="py-1 mb-3 border-b border-gray-300 col-span-4"
                v-model="frontFormInput.tagline"
              />
              <input
                type="file"
                id="imageUpload"
                class="hidden"
                @change="onFileChange"
              />
              <button
                type="button"
                @click="uploadImage"
                class="col-span-4 flex flex-row space-x-5 bg-white border border-primary justify-center items-center rounded-md mt-1 py-1 text-primary font-semibold"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
                <span>Add Image</span>
              </button>
              <!-- Design -->
              <div class="col-span-4 mt-3">
                <h1 class="text-lg font-semibold text-black">Design</h1>
                <p>Add and design your information below.</p>
              </div>
              <!-- Font & Font Size -->
              <div
                class="col-span-4 flex flex-row space-x-3 justify-center items-center my-3"
              >
                <select
                  class="flex-1 border-b border-gray-400 pb-2"
                  v-model="frontFormInput.font"
                >
                  <option value="Abril Fatface, cursive">
                    Abril Fatface, cursive
                  </option>
                  <option value="Montserrat, sans-serif">
                    Montserrat, sans-serif
                  </option>
                  <option value="Boogaloo, cursive">Boogaloo, cursive</option>
                  <option value="Chelsea Market, cursive">
                    Chelsea Market, cursive
                  </option>
                  <option value="Finger Paint, cursive">
                    Finger Paint, cursive
                  </option>
                  <option value="Kanit, sans-serif">Kanit, sans-serif</option>
                  <option value="Lora, sans-serif">Lora, sans-serif</option>
                  <option value="Open Sans, sans-serif">
                    Open Sans, sans-serif
                  </option>
                  <option value="Playfair Display, sans-serif">
                    Playfair Display, sans-serif
                  </option>
                  <option value="Poiret One, sans-serif">
                    Poiret One, sans-serif
                  </option>
                  <option value="Poppins, sans-serif">
                    Poppins, sans-serif
                  </option>
                  <option value="Raleway, sans-serif">
                    Raleway, sans-serif
                  </option>
                  <option value="Roboto, sans-serif">Roboto, sans-serif</option>
                  <option value="Syncopate, sans-serif">
                    Syncopate, sans-serif
                  </option>
                  <option value="Ubuntu, sans-serif">Ubuntu, sans-serif</option>
                </select>
                <div class="flex flex-row border-b border-gray-400 pb-1">
                  <button type="button" @click="decrementFontSize">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-[23px]"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                  <input
                    type="Number"
                    placeholder="In px"
                    class="w-[30px] text-center outline-none text-[16px]"
                    v-model="frontFormInput.fontSize"
                  />
                  <button type="button" @click="incrementFontSize">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-[23px]"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <!-- BG Color -->
              <div
                class="col-span-4 flex flex-row justify-between items-center space-x-[112px] mb-5 border-b pb-1 border-gray-400"
              >
                <label for="" class="flex">BG Color</label>
                <div
                  class="flex flex-row items-center justify-center space-x-2"
                >
                  <span class="uppercase">{{ frontFormInput.background }}</span>
                  <input
                    class="flex color"
                    type="color"
                    v-model="frontFormInput.background"
                  />
                </div>
              </div>
              <!-- Font Color -->
              <div
                class="col-span-4 flex flex-row justify-between items-center space-x-[112px] mb-5 border-b pb-1 border-gray-400"
              >
                <label for="" class="flex">Font Color</label>
                <div
                  class="flex flex-row items-center justify-center space-x-2"
                >
                  <span class="uppercase">{{ frontFormInput.fontColor }}</span>
                  <input
                    class="flex color"
                    type="color"
                    v-model="frontFormInput.fontColor"
                  />
                </div>
              </div>
              <!-- Text Alignment -->
              <div
                class="col-span-4 flex flex-row space-x-3 justify-between items-center mb-5"
              >
                <select
                  class="flex-1 border-b border-gray-400 pb-2"
                  v-model="frontFormInput.textAlignment"
                >
                  <option value="left">left</option>
                  <option value="right">right</option>
                  <option value="center">center</option>
                  <option value="justify">justify</option>
                </select>
              </div>
              <!-- Spacer -->
              <div class="col-span-1"></div>
              <div class="col-span-1"></div>
              <div class="col-span-1">
                <button
                  type="submit"
                  @click="saveUserStyles"
                  class="bg-primary w-full text-white text-xs font-semibold px-5 py-2 rounded-md"
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>
        <!-- Back Form -->
        <div v-else-if="activeForm === 'back'">
          <div
            v-if="this.$router.currentRoute.fullPath !== '/acom'"
            class="grid grid-cols-4 col-span-4"
          >
            <div
              class="col-span-4 bg-white drop-shadow-xl rounded-lg p-5 text-xs h-auto"
            >
              <!-- Info Form -->
              <div class="pb-3">
                <h1 class="text-lg font-semibold text-black">Info</h1>
                <p>Add your information below.</p>
              </div>
              <form class="grid grid-cols-4 pb-3">
                <div class="col-span-4 grid grid-cols-4">
                  <!-- Toggler -->
                  <div class="grid grid-cols-4 col-span-4 items-center pb-5">
                    <span class="col-span-3">Print on Back ?</span>
                    <div
                      class="col-span-1 flex flex-col cursor-pointer text-white"
                      @click="toggleForm = !toggleForm"
                    >
                      <div
                        class="mx-auto items-center w-16 h-8 bg-gray-400 rounded-2xl p-1 flex flex-row space-x-1"
                        :class="{
                          'w-16 h-8 rounded-2xl p-1 flex flex-row space-x-1 bg-[#4E67EB]':
                            toggleForm,
                        }"
                      >
                        <div
                          class="w-6 h-6 bg-white rounded-2xl"
                          :class="{ 'order-1': toggleForm }"
                        ></div>
                        <div>
                          <p class="font-semibold mr-1">
                            {{ toggleForm ? "YES" : "NO" }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Form -->
                  <div v-if="toggleForm" class="grid grid-cols-4 col-span-4">
                    <!-- Select File Type -->
                    <div
                      class="col-span-4 flex flex-row space-x-3 justify-between items-center mb-5"
                    >
                      <select
                        class="flex-1 border-b border-gray-400 pb-2"
                        v-model="backFormInput.backFileType"
                      >
                        <option disabled selected hidden>
                          Select File Type
                        </option>
                        <option value="png">PNG</option>
                        <option value="jpeg">JPEG</option>
                      </select>
                    </div>
                    <input
                      type="file"
                      class="hidden"
                      id="backImageUpload"
                      name="backImageUpload"
                      @change="onFileChange"
                      :accept="`image/${backFormInput.backFileType}`"
                    />
                    <button
                      @click="uploadImage"
                      class="col-span-4 flex flex-row space-x-5 bg-white border border-primary justify-center items-center rounded-md mb-5 text-primary font-semibold py-2"
                    >
                      Select File
                    </button>
                    <button
                      type="submit"
                      @click="activeForm = 'front'"
                      class="col-span-3 text-primary text-xs font-semibold rounded-md flex flex-row items-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-4 h-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.75 19.5L8.25 12l7.5-7.5"
                        />
                      </svg>

                      <span>Previous</span>
                    </button>
                    <button
                      type="submit"
                      @click="activeForm = 'check'"
                      class="bg-primary w-full text-white text-xs font-semibold px-5 py-2 rounded-md"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div
            v-else
            class="bg-white drop-shadow-xl rounded-lg p-5 text-xs h-auto"
          >
            <div class="pb-3">
              <h1 class="text-lg font-semibold text-black">Info</h1>
              <p>Add your information below.</p>
            </div>
            <!-- Info -->
            <form class="col-span-4 grid grid-cols-3 pb-3">
              <!-- Select Number of Images -->
              <div
                class="col-span-4 flex flex-row space-x-3 justify-between items-center mb-5"
              >
                <select
                  class="flex-1 border-b border-gray-400 pb-2"
                  v-model="backACOMInput.images"
                >
                  <option value="2">2 Images</option>
                  <option value="2B">2 Images B</option>
                  <option value="2C">2 Images C</option>
                  <option value="3">3 Images</option>
                  <option value="3B">3 Images B</option>
                  <option value="4">4 Images</option>
                  <option value="4B">4 Images B</option>
                  <option value="6">6 Images</option>
                  <option value="7">7 Images</option>
                  <option value="8">8 Images</option>
                  <option value="9">9 Images</option>
                </select>
              </div>
              <!-- BG Color -->
              <div
                class="col-span-4 flex flex-row justify-between items-center space-x-[112px] mb-5 border-b pb-1 border-gray-400"
              >
                <label for="" class="flex">BG Color</label>
                <div
                  class="flex flex-row items-center justify-center space-x-2"
                >
                  <span class="uppercase">{{ backACOMInput.background }}</span>
                  <input
                    class="flex color"
                    type="color"
                    v-model="backACOMInput.background"
                  />
                </div>
              </div>
              <!-- Font Color -->
              <div
                class="col-span-4 flex flex-row justify-between items-center space-x-[112px] mb-5 border-b pb-1 border-gray-400"
              >
                <label for="" class="flex">Font Color</label>
                <div
                  class="flex flex-row items-center justify-center space-x-2"
                >
                  <span class="uppercase">{{ backACOMInput.fontColor }}</span>
                  <input
                    class="flex color"
                    type="color"
                    v-model="backACOMInput.fontColor"
                  />
                </div>
              </div>
              <!-- Design -->
              <div class="col-span-4 mt-3">
                <h1 class="text-lg font-semibold text-black">Your Data</h1>
              </div>
              <!-- Sex & Height -->
              <div
                class="col-span-4 flex flex-row space-x-3 justify-between items-center my-3"
              >
                <select
                  class="border-b border-gray-400 pb-2 w-full"
                  v-model="backACOMInput.sex"
                >
                  <option value="M">Male</option>
                  <option value="F">Female</option>
                </select>
                <div class="flex flex-row border-b border-gray-400 pb-1">
                  <input
                    type="Number"
                    placeholder="Height"
                    class="outline-none py-[3px]"
                    v-model="backACOMInput.height"
                  />
                </div>
              </div>
              <!-- Eyes & Hair -->
              <div
                class="col-span-4 flex flex-row space-x-3 justify-between items-center my-3"
              >
                <input
                  type="text"
                  placeholder="Eyes"
                  class="border-b border-gray-400 pb-2 outline-none py-[3px] w-full"
                  v-model="backACOMInput.eyes"
                />
                <div class="flex flex-row border-b border-gray-400 pb-1">
                  <input
                    type="text"
                    placeholder="Hair"
                    class="outline-none py-[3px]"
                    v-model="backACOMInput.hair"
                  />
                </div>
              </div>
              <!-- Shoes & Age -->
              <div
                class="col-span-4 flex flex-row space-x-3 justify-between items-center my-3"
              >
                <input
                  type="text"
                  placeholder="Shoe Size"
                  class="border-b border-gray-400 pb-2 outline-none py-[3px] w-full"
                  v-model="backACOMInput.shoe"
                />
                <div class="flex flex-row border-b border-gray-400 pb-1">
                  <input
                    type="text"
                    placeholder="Age"
                    class="outline-none py-[3px]"
                    v-model="backACOMInput.age"
                  />
                </div>
              </div>
              <!-- Other information -->
              <textarea
                class="col-span-4 rounded-md w-[100%] border border-gray-300 my-3 p-3"
                v-model="backACOMInput.other"
              ></textarea>
              <div class="col-span-4 grid grid-cols-3">
                <button
                  type="submit"
                  @click="activeForm = 'front'"
                  class="text-primary text-xs font-semibold rounded-md flex flex-row items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>

                  <span>Previous</span>
                </button>
                <div class="col-span-1"></div>
                <button
                  type="submit"
                  @click="activeForm = 'check'"
                  class="bg-primary w-full text-white text-xs font-semibold px-5 py-2 rounded-md"
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>
        <!-- Checkout Form -->
        <div v-else>
          <CheckoutForm />
        </div>
      </div>
    </div>
    <!-- Spacer -->
    <div class="col-span-1"></div>
    <!-- Right -->
    <div class="col-span-4">
      <TemplateDisplay
        :activeForm="activeForm"
        :activeModal="activeModal"
        :frontFormInput="frontFormInput"
        :backFormInput="backFormInput"
        @toggleActiveModal="toggleActiveModal"
      />
    </div>
    <!-- Spacer -->
    <div class="col-span-1"></div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

import CheckoutForm from "./CheckoutForm.vue";
import TemplateDisplay from "./TemplateDisplay.vue";

export default {
  name: "LeftBar",
  components: {
    CheckoutForm,
    TemplateDisplay,
  },
  data() {
    return {
      activeForm: "front",
      activeModal: false,
      frontFormInput: {
        name: "Your Name Here",
        tagline: "Your Tagline Here",
        imageURL: "",
        font: "Ubuntu, sans-serif",
        fontSize: 36,
        background: "#FFFFFF",
        fontColor: "#4E67EB",
        textAlignment: "center",
      },
      backFormInput: {
        backImageURL: "",
        backFileType: "",
      },
      backACOMInput: {
        background: "#FFFFFF",
        fontColor: "#4E67EB",
        images: "2",
        sex: "M",
        height: "5,11",
        eyes: "",
        hair: "",
        shoe: "",
        age: "",
        other: "Other information...",
      },
      toggleForm: false,
    };
  },
  computed: {
    ...mapGetters(["getSelectedTemplate"]),
  },
  methods: {
    ...mapMutations(["setUserFrontStyles"]),
    toggleActiveModal(value) {
      this.activeModal = value;
    },
    saveUserStyles() {
      this.setUserFrontStyles({ frontFormInput: this.frontFormInput });
      this.activeForm = "back";
    },
    uploadImage(e) {
      e.preventDefault();
      if (this.activeForm === "front") {
        document.getElementById("imageUpload").click();
      } else {
        document.getElementById("backImageUpload").click();
      }
    },
    onFileChange(e) {
      if (this.activeForm === "front") {
        this.frontFormInput.imageURL = URL.createObjectURL(e.target.files[0]);
      } else {
        this.backFormInput.backImageURL = URL.createObjectURL(
          e.target.files[0]
        );
      }
      this.activeModal = true;
    },
    incrementFontSize() {
      if (this.frontFormInput.fontSize < 60) {
        this.frontFormInput.fontSize++;
      }
    },
    decrementFontSize() {
      if (this.frontFormInput.fontSize > 10) {
        this.frontFormInput.fontSize--;
      }
    },
  },
};
</script>

<style scoped>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
  appearance: textfield;
}
.color {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 25px;
  height: 30px;
  background-color: transparent;
  cursor: pointer;
}
.color::-webkit-color-swatch {
  border-radius: 5px;
  border: 1px solid lightgray;
}
.color::-moz-color-swatch {
  border-radius: 15px;
  border: 1px solid lightgray;
}
</style>
