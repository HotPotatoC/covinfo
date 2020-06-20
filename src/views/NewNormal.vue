<template>
  <div class="flex flex-wrap">
    <div class="w-full mt-48">
      <h1 class="font-gilroy text-6xl text-center tracking-tight">
        <span class="text-primary">New</span> Normal
      </h1>
      <p class="font-gilroy font-aileron text-gray-800 text-center tracking-tight">By Juan Christian</p>
    </div>

    <div class="w-full md:w-2/3 mt-48">
      <h1 class="font-gilroy text-5xl tracking-tight">The New Normal</h1>
      <p class="font-gilroy font-aileron text-lg text-gray-800 tracking-tight">
        <b>New Normal</b> maksudnya apa ya?
        Disebutkan bahwa New Normal merupakan kebijakan membuka kembali aktifitas ekonomi, sosial dan kegiatan publik secara terbatas. Dengan menggunakan standar atau protokol kesehatan yang ditetapkan oleh Pemerintah.
      </p>
      <br />
      <p
        class="font-gilroy font-aileron text-lg text-gray-800 tracking-tight"
      >Pada situasi New Normal, tempat kerja perkantoran, industri, tempat kerja sektor jasa dan perdagangan akan dibuka untuk mendukung Keberlangsungan usaha perekonomian.</p>
      <br />
      <p class="font-gilroy font-aileron text-lg text-gray-800 tracking-tight">
        Dengan tetap memperhatikan protokol kesehatan yang ditetapkan oleh Pemerintah, yang diawasi oleh aparat TNI/Polri.
        <a
          class="text-primary"
          href="https://wahyublahe.id/new-normal/"
          target="__blank"
        >
          <sup>[1]</sup>
        </a>
      </p>
      <h1 class="font-gilroy text-5xl tracking-tight mt-12">New Normal Di Indonesia</h1>
      <p
        class="font-gilroy font-aileron text-lg text-gray-800 tracking-tight"
      >Pada tanggal 15 Mei 2020, istilah New Normal muncul di Indonesia setelah Presiden Joko Widodo menegaskan masyarakat harus bisa berkompromi, hidup berdampingan, dan berdamai dengan Covid-19 agar tetap produktif.</p>
      <br />
      <p
        class="font-gilroy font-aileron text-lg text-gray-800 tracking-tight"
      >Selanjutnya, pada tanggal 20 Mei 2020, Pemerintah pusat melalui Kemenkes mengeluarkan; Kepmenkes No. HK.01.07/Menkes/328/2020 tentang Panduan Pencegahan Dan Covid-19 Di Tempat Kerja Perkantoran Dan Industri Dalam Mendukung Keberlangsungan Usaha Pada Situasi Pandemi</p>
      <br />
      <p class="font-gilroy font-aileron text-lg text-gray-800 tracking-tight">
        Surat Edaran Nomor HK.02.01/MENKES/335/2020 Tentang Protokol Pencegahan PenularanCovid-19 Di Tempat Kerja Sektor Jasa Dan Perdagangan (Area Publik) Dalam Mendukung Keberlangsungan Usaha hingga Surat Edaran HK.02.01/MENKES/334/2020 tentang Protokol Pencegahan Penularan Covid-19 bagi Aparat yang Melaksanakan Tugas Pengamanan dan Penertiban Dalam Rangka Percepatan Penanganan Covid-19.
        <a
          class="text-primary"
          href="https://wahyublahe.id/new-normal/"
          target="__blank"
        >
          <sup>[2]</sup>
        </a>
      </p>
      <h1 class="font-gilroy text-5xl tracking-tight mt-12">Penerapan New Normal</h1>
      <p
        class="font-gilroy font-aileron text-lg text-gray-800 tracking-tight"
      >Protokol pencegahan yang diterapkan pada semua tempat kerja seperti perkantoran, industri, sektor jasa, dan perdagangan dalam implementasi.</p>
      <ul class="list-disc mt-4 ml-4 md:ml-10">
        <li>Memastikan kebersihan tangan</li>
        <li>Memastikan kebersihan pernapasan, baik itu penggunaan masker, etiket batuk, dan bersin.</li>
        <li>Memastikan Penjagaan jarak fisik</li>
        <li>Memastikan pengurangan dan pengelolaan perjalanan dinas</li>
        <li>Memastikan pembersihan dan disinfeksi lingkungan kerja secara berkala</li>
        <li>Memastikan komunikasi, pelatihan, dan edukasi risiko</li>
        <li>Memastikan tatalaksana orang-orang dengan COVID-19 atau kontak-kontaknya</li>
      </ul>
      <a class="text-primary" href="https://wahyublahe.id/new-normal/" target="__blank">
        <sup>[3]</sup>
      </a>
    </div>
    <div class="w-full mt-12 md:w-1/4 md:mt-48 md:ml-12">
      <h1 class="font-aileron text-2xl md:text-right tracking-tight">Berita Terkini</h1>
      <div v-if="ready">
        <a v-for="article in articles" :key="article.url" :href="article.url">
          <base-card class="news-card hover:bg-gray-100 hover:shadow-2xl">
            <h1 class="font-gilroy text-xl text-primary">{{ article.title }}</h1>
            <img v-lazy="article.urlToImage" class="shadow-xl rounded-lg" alt />
          </base-card>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchNews } from "../services/news";

export default {
  data() {
    return {
      articles: [],
      ready: false
    };
  },
  async created() {
    try {
      const articles = await fetchNews();

      this.articles = articles;
      console.log(articles);
    } catch (error) {
      console.error(error);
    } finally {
      this.ready = true;
    }
  }
};
</script>

<style lang="scss">
.news-card {
  transition: 0.25s;
}
</style>