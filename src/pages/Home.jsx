import React from "react";

const Home = () => {
  return (
    <>
      {/* Navbar */}
      <nav class="bg-white py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
          <a href="/" class="flex items-center">
            <img
              src="{{ asset('/') }}image/logo.png"
              class="h-6 mr-3 sm:h-9"
              alt="Logo TD"
            />
            <span class="self-center text-xl font-bold font-heading whitespace-nowrap dark:text-gray-50">
              Terjun Desa
            </span>
          </a>
          <div class="flex md:order-2">
            <button
              id="theme-toggle"
              type="button"
              class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
            >
              <svg
                id="theme-toggle-dark-icon"
                class="hidden w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
              </svg>
              <svg
                id="theme-toggle-light-icon"
                class="hidden w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul class="flex flex-col p-4 mt-4 bg-white border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="/"
                  class="block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 {{ request()->is('/') ? 'text-biru-400' : 'text-gray-700 dark:text-gray-400' }}"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/d"
                  class="block py-2 pl-3 pr-4 rounded  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0 md:dark:hover:text-gray-50 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-50 md:dark:hover:bg-transparent dark:border-gray-700 {{ request()->is('dokumentasi') ? 'text-biru-400 dark:text-biru-400' : 'text-gray-700' }}"
                >
                  Dokumentasi
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-white lg:pt-20 sm:pt-8 dark:bg-gray-900">
        <div className="container py-16 mx-auto text-left xl:text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="mt-6 lg:mt-0">
              Selamat datang di terjun Desa, komunitas yang bertujuan untuk
              membangun desa yang lebih baik dan berkelanjutan
            </h1>
            <p className="mt-2 lg:mt-5">
              Kami percaya bahwa setiap desa memiliki potensi dan sumber daya
              yang unik, dan melalui partisipasi aktif masyarakat, kita dapat
              membangun desa yang lebih sejahtera dan mandiri
            </p>
            <div className="mt-8 lg:mt-6">
              <a href="#" className="button-primary">
                Selengkapnya
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sosprof */}
      <section className="bg-gradient-to-r from-biru-300 to-biru-400">
        <div className="container max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
          <dl className="grid max-w-screen-md gap-8 mx-auto lg:gap-32 sm:grid-cols-3">
            <div className="flex flex-col items-center justify-center">
              <h1 className="mb-2 text-oren-400 dark:text-oren-400">3,5</h1>
              <p className="font-medium text-gray-100 capitalize">
                Tahun Mengabdi
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="mb-2 text-oren-400 dark:text-oren-400">120+</h1>
              <p className="font-medium text-gray-100 capitalize">
                Anggota Tergabung
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="mb-2 text-oren-400 dark:text-oren-400">3</h1>
              <p className="font-medium text-gray-100 capitalize">Kabupaten</p>
            </div>
          </dl>
        </div>
      </section>

      {/* Feature */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="text-left md:text-center xl:text-center">
            <h2 className="">Benefits</h2>

            <p className="max-w-xl mx-auto mt-2">
              Berikut adalah beberapa benefit yang bisa Anda dapatkan jika Anda
              tergabung sebagai anggota Komunitas Terjun Desa
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2">
            <div className="p-6 border-2 border-gray-200 rounded-lg dark:border-gray-700">
              <div className="md:flex md:items-start md:-mx-4">
                <span className="inline-block p-2 rounded-lg text-biru-100 bg-biru-400 md:mx-4 dark:bg-biru-400 dark:text-biru-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                </span>

                <div className="mt-4 md:mx-4 md:mt-0">
                  <h4 className="">Meningkatkan Keterampilan</h4>
                  <p className="mt-3">
                    Komunitas seringkali merupakan tempat yang baik untuk
                    belajar dan mengembangkan diri. Anda dapat memperoleh
                    pengetahuan baru, keterampilan, dan wawasan dari anggota
                    komunitas yang berbagi pengalaman mereka.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6 border-2 border-gray-200 rounded-lg dark:border-gray-700">
              <div className="md:flex md:items-start md:-mx-4">
                <span className="inline-block p-2 rounded-lg text-biru-100 bg-biru-400 md:mx-4 dark:bg-biru-400 dark:text-biru-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                </span>

                <div className="mt-4 md:mx-4 md:mt-0">
                  <h4 className="">Kolaborasi dan jaringan</h4>
                  <p className="mt-3">
                    Komunitas sering kali menjadi tempat yang baik untuk
                    berkolaborasi dengan orang lain yang memiliki minat atau
                    tujuan yang sama. Anda dapat bekerja sama dalam proyek atau
                    inisiatif bersama, yang dapat memperluas jaringan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimoni */}
      <section className="bg-gradient-to-r from-biru-300 to-biru-400">
        <div className="container max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
          <figure className="max-w-screen-md mx-auto">
            <svg
              className="h-12 mx-auto mb-3 text-oren-400"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                fill="currentColor"
              />
            </svg>
            <blockquote>
              <h3 className="">
                "Bergabung dengan sebuah komunitas bisa memberikan banyak
                manfaat bagi kita sebagai individu. kita bisa memperluas
                jaringan sosial kita dengan bertemu dengan orang-orang baru yang
                memiliki minat dan hobi yang sama dengan kita.."
              </h3>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3">
              <img
                className="w-6 h-6 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                alt="profile picture"
              />
              <div className="flex items-center divide-x-2 divide-gray-200 dark:divide-gray-200">
                <p className="pr-3 font-medium text-gray-200 dark:text-gray-200">
                  Ahmad
                </p>
                <p className="pl-3 text-gray-200 dark:text-gray-200">
                  Terjun Desa Lamongan
                </p>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Blog */}
      <section className="py-8 bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="text-left md:text-center xl:text-center">
            <h2 className="">Kabar Terbaru</h2>

            <p className="max-w-xl mx-auto mt-2">
              Berikut ini adalah beberapa kegiatan dan program kerja terbaru
              yang sudah kami laksanakan
            </p>
          </div>
          <div className="flex flex-wrap mt-8 -m-4 md:mt-12">
            <div className="p-4 md:w-1/3">
              <div className="h-full overflow-hidden border-2 border-gray-200 rounded-lg dark:border-gray-700">
                <img
                  className="object-cover object-center w-full lg:h-64 md:h-36"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                  alt="{{ $post->slug }}"
                />
                <div className="p-6">
                  <h4 className="mb-2">
                    Meningkatkan Kesehatan Masyarakat Melalui Pemeriksaan
                    Kesehatan Rutin
                  </h4>
                  <p className="mb-6">
                    Pemeriksaan kesehatan masyarakat adalah langkah penting
                    dalam menjaga kesehatan individu dan masyarakat secara
                    keseluruhan. Dengan melakukan pemeriksaan ke [...]
                  </p>
                  <div className="flex flex-wrap items-center ">
                    <a
                      href="/news/{{ $post->slug }}"
                      className="inline-flex items-center font-medium text-biru-400 hover:text-biru-60 md:mb-2 lg:mb-0 "
                    >
                      Baca selengkapnya
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full overflow-hidden border-2 border-gray-200 rounded-lg dark:border-gray-700">
                <img
                  className="object-cover object-center w-full lg:h-64 md:h-36"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                  alt="{{ $post->slug }}"
                />
                <div className="p-6">
                  <h4 className="mb-2">
                    Meningkatkan Kesehatan Masyarakat Melalui Pemeriksaan
                    Kesehatan Rutin
                  </h4>
                  <p className="mb-6">
                    Pemeriksaan kesehatan masyarakat adalah langkah penting
                    dalam menjaga kesehatan individu dan masyarakat secara
                    keseluruhan. Dengan melakukan pemeriksaan ke [...]
                  </p>
                  <div className="flex flex-wrap items-center ">
                    <a
                      href="/news/{{ $post->slug }}"
                      className="inline-flex items-center font-medium text-biru-400 hover:text-biru-60 md:mb-2 lg:mb-0 "
                    >
                      Baca selengkapnya
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full overflow-hidden border-2 border-gray-200 rounded-lg dark:border-gray-700">
                <img
                  className="object-cover object-center w-full lg:h-64 md:h-36"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                  alt="{{ $post->slug }}"
                />
                <div className="p-6">
                  <h4 className="mb-2">
                    Meningkatkan Kesehatan Masyarakat Melalui Pemeriksaan
                    Kesehatan Rutin
                  </h4>
                  <p className="mb-6">
                    Pemeriksaan kesehatan masyarakat adalah langkah penting
                    dalam menjaga kesehatan individu dan masyarakat secara
                    keseluruhan. Dengan melakukan pemeriksaan ke [...]
                  </p>
                  <div className="flex flex-wrap items-center ">
                    <a
                      href="/news/{{ $post->slug }}"
                      className="inline-flex items-center font-medium text-biru-400 hover:text-biru-60 md:mb-2 lg:mb-0 "
                    >
                      Baca selengkapnya
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-8 bg-white lg:py-20 dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="flex flex-col items-center px-4 py-12 mx-auto text-center rounded-lg bg-gradient-to-r from-biru-300 to-biru-400 justify-items-center">
            <h3 className="max-w-5xl capitalize">
              Open Recruitment Terjun Desa Batch 4
            </h3>
            <p className="max-w-3xl my-4 text-gray-100 dark:text-gray-100">
              Mari bergabung dengan komunitas kami dan berkontribusi dalam
              membangun desa yang lebih baik dan berkelanjutan!
            </p>
            <a href="/gabung/create" className="button-secondary">
              Daftar Sekarang
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer class="p-4 bg-gray-900 shadow md:px-6 md:py-8 dark:bg-gradient-to-r dark:from-biru-300 dark:to-biru-400">
        <div class="container sm:flex sm:items-center sm:justify-between">
          <a href="/" class="flex items-center mb-4 sm:mb-0">
            <img
              src="{{ asset('/') }}image/logo.png"
              class="h-8 mr-3"
              alt="Logo"
            />
            <span class="self-center text-xl font-bold text-gray-100 font-heading whitespace-nowrap dark:text-oren-400">
              Terjun Desa
            </span>
          </a>

          <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-200 sm:mb-0 dark:text-gray-100">
            <li>
              <a
                href="{{ url('/komunitas') }}"
                class="mr-4 hover:underline md:mr-6 "
              >
                Visi Misi
              </a>
            </li>
            <li>
              <a
                href="{{ url('/donasi') }}"
                class="mr-4 hover:underline md:mr-6"
              >
                Donasi
              </a>
            </li>
            <li>
              <a
                href="{{ url('/news') }}"
                class="mr-4 hover:underline md:mr-6 "
              >
                News
              </a>
            </li>
            <li>
              <a href="{{ url('/contact') }}" class="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr class="my-6 border-gray-300 sm:mx-auto dark:border-gray-100 lg:my-8" />
        <span class="block text-sm text-gray-200 sm:text-center dark:text-gray-100">
          ©
          <a href="https://flowbite.com/" class="hover:underline">
            Terjun Desa™
          </a>
          . All Rights Reserved.
        </span>
      </footer>
    </>
  );
};

export default Home;
