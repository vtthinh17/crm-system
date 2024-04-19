<template>
  <div class="w-full fixed inset-y-0 md:pl-56 z-50 h-16">
    <Navbar />
  </div>
  <div class="hidden md:flex flex-col w-56 h-full z-50 fixed inset-y-0">
    <Sidebar />
  </div>
  <div class="pt-14 md:pl-56 bg-blue-200">
    <slot/>
  </div>

</template>