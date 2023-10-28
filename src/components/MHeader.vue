<template>
  <header class="absolute left-0 top-0 z-10 w-full">
    <div class="h-12 w-full bg-black">
      <div
        class="container mx-auto flex h-full w-full items-center justify-between px-4"
      >
        <div class="flex gap-4">
          <a
            href="tel:+7912666666"
            class="text-white transition-colors hover:text-primary"
          >
            <i class="bx bx-phone bx-fw text-primary"></i>
            +7 (912) 666-66-66
          </a>
          <a
            href="mailto:milleyz_z@mail.ru"
            class="hidden text-white transition-colors hover:text-primary sm:inline"
          >
            <i class="bx bx-envelope bx-fw text-primary"></i>
            milleyz_z@mail.ru
          </a>
        </div>
        <div class="">
          <a href="" class="font-bold text-primary hover:underline"
            >Заказать звонок</a
          >
        </div>
      </div>
    </div>
    <div class="bg-black/70 backdrop-blur-sm">
      <div
        class="container mx-auto flex flex-row items-center justify-between px-3 pt-2 md:p-5"
      >
        <a class="mb-4 flex items-center font-medium text-white md:mb-0">
          <img src="/images/logo.svg" class="w-[13.5rem]" alt="logo" />
        </a>
        <nav
          aria-label="main-navigation"
          class="hidden flex-wrap items-center justify-center text-base text-white md:ml-auto lg:flex"
        >
          <a
            class="mr-5 cursor-pointer hover:text-primary hover:underline"
            v-for="link in links"
            :key="link.title"
            :href="link.path"
            >{{ link.title }}</a
          >
        </nav>
        <nav
          class="relative flex flex-wrap items-center justify-center text-base text-white md:ml-auto lg:hidden"
        >
          <button
            type="button"
            @click="menu = !menu"
            class="relative z-10 flex h-12 w-12 cursor-pointer select-none items-center justify-center rounded-lg pl-4 pr-4 text-sm font-semibold text-white duration-200"
          >
            <i
              class="bx bx-menu-alt-right bx-md transition-colors duration-300"
              :class="{ 'text-black': menu }"
            ></i>
          </button>
          <Transition name="slide-fade">
            <div
              class="absolute right-0 top-0 z-0 flex min-h-[50vh] w-64 flex-col items-center justify-center gap-4 rounded-lg bg-white"
              v-show="menu"
            >
              <a
                class="cursor-pointer text-xl font-bold text-black hover:text-primary hover:underline"
                v-for="link in links"
                :key="link.title"
                :href="link.path"
                >{{ link.title }}</a
              >
            </div>
          </Transition>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";

const menu = ref(false);

const links = [
  { path: "#", title: "Услуги" },
  { path: "#", title: "О компании" },
  { path: "#", title: "Наши юристы" },
  { path: "#", title: "Отзывы" },
  { path: "#", title: "Новости" },
  { path: "#", title: "Контакты" },
];
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  /* transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1); */
  transition: all 0.3s ease-in;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(40px);
  opacity: 0;
}
</style>
