<template>
  <footer class="w-full text-center p-4 pin-b">
    <div class="font-bold font-aileron text-gray-700">
      Data provided by
      <a
        href="https://www.worldometers.info/coronavirus/"
        class="text-primary"
      >Worldometers</a> and
      <a href="https://github.com/novelcovid/api" class="text-primary">NovelCovid - API</a>
    </div>
    <div class="font-bold font-aileron text-gray-700">
      By
      <a href="https://instagram.com/juanwmv" target="_blank" class="text-primary">juanwmv</a>
      {{ new Date() | moment("YYYY")}}
    </div>
  </footer>
</template>