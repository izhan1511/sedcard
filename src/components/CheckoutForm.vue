<template>
  <div
    class="grid grid-cols-4 col-span-4 p-5 bg-white drop-shadow-xl rounded-lg text-xs h-[500px] overflow-y-scroll"
  >
    <div class="col-span-4">
      <h1 class="text-lg font-semibold text-black col-span-4 mb-5">
        Product Selection
      </h1>
      <div class="col-span-4 grid grid-cols-4">
        <!-- Download Toggle -->
        <div class="col-span-2 grid grid-cols-2 items-center">
          <span class="text-xs text-black">Digital Download</span>
          <div
            class="flex flex-col cursor-pointer text-white"
            @click="digitalDownload = !digitalDownload"
          >
            <div
              class="mx-auto items-center w-16 h-8 bg-gray-400 rounded-2xl p-1 flex flex-row space-x-1"
              :class="{
                'w-16 h-8 rounded-2xl p-1 flex flex-row space-x-1 bg-[#4E67EB]':
                  digitalDownload,
              }"
            >
              <div
                class="w-6 h-6 bg-white rounded-2xl"
                :class="{ 'order-1': digitalDownload }"
              ></div>
              <div>
                <p class="font-semibold mr-1">
                  {{ digitalDownload ? "YES" : "NO" }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- Printed Toggle -->
        <div class="col-span-2 grid grid-cols-2 items-center">
          <span class="text-xs text-black">Printed Copies</span>
          <div
            class="flex flex-col cursor-pointer text-white"
            @click="printedCopies = !printedCopies"
          >
            <div
              class="mx-auto items-center w-16 h-8 bg-gray-400 rounded-2xl p-1 flex flex-row space-x-1"
              :class="{
                'w-16 h-8 rounded-2xl p-1 flex flex-row space-x-1 bg-[#4E67EB]':
                  printedCopies,
              }"
            >
              <div
                class="w-6 h-6 bg-white rounded-2xl"
                :class="{ 'order-1': printedCopies }"
              ></div>
              <div>
                <p class="font-semibold mr-1">
                  {{ printedCopies ? "YES" : "NO" }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Printed Copies Form -->
      <div v-if="printedCopies" class="col-span-4">
        <!-- Printed Quantity -->
        <div
          v-if="printedCopies"
          class="col-span-4 grid grid-cols-4 items-center mb-5"
        >
          <h2 class="col-span-4 mb-3 text-sm text-black font-semibold mt-5">
            Printed Quantity
          </h2>
          <div class="col-span-1 grid grid-cols-1 items-center">
            <div class="flex items-center">
              <input id="pq1" type="radio" name="pq" />
              <label
                for="default-radio-1"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >25</label
              >
            </div>
          </div>
          <div class="col-span-1 grid grid-cols-1 items-center">
            <div class="flex items-center">
              <input checked id="pq2" type="radio" name="pq" />
              <label
                for="default-radio-2"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >50</label
              >
            </div>
          </div>
          <div class="col-span-1 grid grid-cols-1 items-center">
            <div class="flex items-center">
              <input checked id="pq3" type="radio" name="pq" />
              <label
                for="default-radio-3"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >75</label
              >
            </div>
          </div>
          <div class="col-span-1 grid grid-cols-1 items-center">
            <div class="flex items-center">
              <input checked id="pq4" type="radio" name="pq" />
              <label
                for="default-radio-4"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >100</label
              >
            </div>
          </div>
        </div>
        <!-- Coating -->
        <div
          v-if="printedCopies"
          class="col-span-4 grid grid-cols-4 items-center mb-5"
        >
          <h2 class="mb-3 col-span-4 text-sm text-black font-semibold">
            Coating
          </h2>
          <div class="col-span-2 grid grid-cols-2 items-center">
            <div class="col-span-2 flex flex-row">
              <input id="co1" type="radio" name="co" />
              <label
                for="default-radio-1"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Full Glass Coating</label
              >
            </div>
          </div>
          <div class="col-span-2 grid grid-cols-2 items-center">
            <div class="col-span-2 flex flex-row">
              <input id="co2" type="radio" name="co" />
              <label
                for="default-radio-1"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Matte Stain Finish</label
              >
            </div>
          </div>
        </div>
        <!-- Shipping Method -->
        <div
          v-if="printedCopies"
          class="col-span-4 grid grid-cols-4 items-center mb-5"
        >
          <h2 class="mb-3 col-span-4 text-sm text-black font-semibold">
            Shipping Method
          </h2>
          <div class="col-span-2 flex flex-col space-y-3">
            <div class="flex flex-row">
              <input id="sm1" type="radio" name="sm" />
              <label
                for="default-radio-1"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Free Ground</label
              >
            </div>
            <div class="flex flex-row">
              <input checked id="sm2" type="radio" name="sm" />
              <label
                for="default-radio-2"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Overnight - Next Bus Day</label
              >
            </div>
          </div>
          <div class="col-span-2 flex flex-col space-y-3">
            <div class="flex flex-row">
              <input checked id="sm3" type="radio" name="sm" />
              <label
                for="default-radio-3"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >2 Bus Day Shipping Service</label
              >
            </div>
            <div class="flex flex-row">
              <input checked id="sm4" type="radio" name="sm" />
              <label
                for="default-radio-4"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >3 Bus Day Shipping Service</label
              >
            </div>
          </div>
        </div>
        <hr class="col-span-4 border-1 bg-gray-300" />
      </div>
      <!-- Shipping Address Form -->
      <h1 class="text-lg font-semibold text-black col-span-4 my-5">
        Shipping Address
      </h1>
      <form class="col-span-4 grid grid-cols-2 gap-x-2 items-center">
        <!-- Row 1 -->
        <div class="col-span-1 flex flex-col space-y-2">
          <label for="name" class="text-xs font-semibold text-black"
            >Full Name</label
          >
          <input
            type="text"
            class="py-2 px-3 border border-gray-300 rounded-md"
            name="name"
            placeholder="Name"
          />
        </div>
        <div class="col-span-1 flex flex-col space-y-2">
          <label for="email" class="w-fulltext-xs font-semibold text-black"
            >Email</label
          >
          <input
            type="email"
            class="py-2 px-3 border border-gray-300 rounded-md"
            name="email"
            placeholder="name@example.com"
          />
        </div>
        <!-- Row 2 -->
        <div class="col-span-2 flex flex-col space-y-2 mt-5">
          <label for="address" class="text-xs font-semibold text-black"
            >Address</label
          >
          <input
            type="text"
            class="py-2 px-3 border border-gray-300 rounded-md"
            name="address"
            placeholder="Please enter your Address"
          />
          <p class="text-left text-xs text-[#4E67EB] font-semibold">
            + Add New Line
          </p>
        </div>
        <!-- Row 3 -->
        <div class="col-span-1 flex flex-col space-y-2 mt-5">
          <label for="zip" class="text-xs font-semibold text-black">Zip</label>
          <input
            type="text"
            class="py-2 px-3 border border-gray-300 rounded-md"
            name="zip"
            placeholder="Enter Zip code"
          />
        </div>
        <div class="col-span-1 flex flex-col space-y-2 mt-5">
          <label for="email" class="text-xs font-semibold text-black"
            >Email</label
          >
          <input
            type="email"
            class="py-2 px-3 border border-gray-300 rounded-md"
            name="email"
            placeholder="name@example.com"
          />
        </div>
        <!-- Row 4 -->
        <div class="col-span-1 flex flex-col space-y-2 mt-5">
          <label for="state" class="text-xs font-semibold text-black"
            >State</label
          >
          <input
            type="text"
            class="py-2 px-3 border border-gray-300 rounded-md"
            name="state"
            placeholder="Enter State"
          />
        </div>
      </form>
      <!-- Order Summary -->
      <h1 class="text-lg font-semibold text-black col-span-4 my-5">
        Order Summary
      </h1>
      <div class="col-span-4 flex flex-row my-5">
        <p class="flex flex-1 text-xs text-black font-semibold">Subtotal</p>
        <p class="flex text-xs text-black font-semibold">$49.80</p>
      </div>
      <div class="col-span-4 flex flex-row mb-5">
        <p class="flex flex-1 text-xs text-black font-semibold">Shipping</p>
        <p class="flex text-xs text-black font-semibold">$7.24</p>
      </div>
      <div class="col-span-2 flex flex-row mb-5 items-center">
        <p class="flex flex-1 text-xs text-black font-semibold">
          Gift or discount code?
        </p>
        <div
          class="flex flex-col cursor-pointer text-white"
          @click="discount = !discount"
        >
          <div
            class="mx-auto items-center w-16 h-8 bg-gray-400 rounded-2xl p-1 flex flex-row space-x-1"
            :class="{
              'w-16 h-8 rounded-2xl p-1 flex flex-row space-x-1 bg-[#4E67EB]':
                discount,
            }"
          >
            <div
              class="w-6 h-6 bg-white rounded-2xl"
              :class="{ 'order-1': discount }"
            ></div>
            <div>
              <p class="font-semibold mr-1">
                {{ discount ? "YES" : "NO" }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div v-if="discount" class="col-span-4 flex flex-row space-x-2 mb-5">
        <input
          type="text"
          class="flex-1 py-2 px-3 border border-gray-300 rounded-md"
          name="address"
          placeholder="Gift or discount code"
        />
        <button class="rounded-md px-5 py-2 bg-gray-400 text-white">
          Apply
        </button>
      </div>
      <!-- Total -->
      <hr class="col-span-4 border-1 bg-gray-300" />
      <div class="col-span-4 flex flex-row my-5 items-center">
        <p class="flex flex-1 text-sm text-black font-semibold">Total</p>
        <p class="flex text-3xl text-black font-semibold">$59.28</p>
      </div>
      <hr class="col-span-4 border-1 bg-gray-300" />
      <!-- Payment -->
      <h1 class="text-lg font-semibold text-black col-span-4 my-5">Payment</h1>
      <div class="col-span-4 grid grid-cols-2 gap-x-2 items-center">
        <!-- Row 2 -->
        <div class="col-span-2 flex flex-col space-y-2 mb-5">
          <label for="card" class="text-xs font-semibold text-black"
            >Card Number</label
          >
          <input
            type="text"
            class="py-2 px-3 border border-gray-300 rounded-md"
            name="card"
            placeholder="1234 5678 9101 1121"
          />
        </div>
        <!-- Row 1 -->
        <div class="col-span-1 flex flex-col space-y-2">
          <label for="expiry" class="text-xs font-semibold text-black"
            >Expiration Date</label
          >
          <input
            type="text"
            class="py-2 px-3 border border-gray-300 rounded-md"
            name="expiry"
            placeholder="MM/YY"
          />
        </div>
        <div class="col-span-1 flex flex-col space-y-2">
          <label for="cvv" class="w-fulltext-xs font-semibold text-black"
            >CVV</label
          >
          <input
            type="text"
            class="py-2 px-3 border border-gray-300 rounded-md"
            name="cvv"
            placeholder="123"
          />
        </div>
      </div>
      <!-- Disclaimer -->
      <div class="col-span-4 grid grid-cols-2 gap-x-2 items-center mt-5">
        <div class="col-span-2 flex flex-col space-y-2 mb-5">
          <p>
            Your personal data will be used to process your order, support your
            experience throughout this website, and for other purposes described
            in our privacy policy.
          </p>
          <button
            type="submit"
            class="bg-primary w-full text-white text-sm font-semibold px-5 py-2 rounded-md"
          >
            Pay USD59.28
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckoutForm",
  data() {
    return {
      digitalDownload: false,
      printedCopies: false,
      discount: false,
    };
  },
};
</script>
