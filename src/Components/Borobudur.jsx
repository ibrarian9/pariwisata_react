import React from "react";
import "../Style/content.css";
import { Link } from "react-router-dom";
import img_1 from "../Assets/1.webp";
import img_2 from "../Assets/2.jpg";
import img_3 from "../Assets/3.webp";
import img_4 from "../Assets/4.webp";

const Borobuddur = () => {
  return (
    <div>
      {/* Content Start */}
      <div>
        <div className="section intro text-light"></div>
      </div>
      {/* Main Content Start */}
      <div className="container text-md-start mt-5 mb-5">
        <div className="row align-items-center">
          <div className="col-md-8 offset-md-2">
            <nav className="bc" aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Borobudur
                </li>
              </ol>
            </nav>
            <h1 className="mb-4 text-center">Candi Borobuddur</h1>
            <hr className="border border-dark border-3 opacity-75" />
            <p>
              Sobat Pesona pastinya sudah tidak asing kan dengan Candi
              Borobudur? Terletak di Kabupaten Magelang, Jawa Tengah, candi yang
              sangat megah dan rupawan ini telah dikenal oleh wisatawan lokal
              maupun mancanegara sebagai kuil Buddha terbesar di dunia. Wajar
              saja, karena Candi Borobudur memiliki luas sekitar 2500 meter
              persegi, dengan panjang 121,66 meter, lebar 121,38 meter, dan
              tinggi 35,40 meter.
            </p>
            <div className="row align-items-center mb-5 mt-5">
              <img src={img_1} alt="1" />
            </div>
            <p>
              Selain dari skalanya yang besar, Candi yang sangat legendaris ini
              tentunya juga menyimpan beragam fakta unik, serta berbagai macam
              hal menarik yang bisa Sobat Pesona temui saat berkunjung kesini.
              Sebelum Sobat Pesona beranjak ke Candi Borobudur, simak dulu yuk
              ulasan lengkapnya di bawah ini!
            </p>
            <h3 className="text-center mb-4">Sejarah</h3>
            <p>
              Candi legendaris ini diperkirakan dibangun pada abad ke-8,
              tepatnya sekitar tahun 750-an masehi pada masa pemerintahan
              dinasti Syailendra. Pembangunannya diperkirakan berlangsung
              sekitar 75 tahun sampai akhirnya rampung pada saat pemerintahan
              raja Samaratungga berlangsung. Candi Borobudur terletak diatas
              bukit hijau yang asri di mana Sobat Pesona bisa menyaksikan
              bukit-bukit hijau lain di sekitarnya. Bangunannya sendiri terdiri
              atas jutaan blok batu yang dibuat kedalam tiga struktur yang
              menggambarkan tingkatan alam semesta menurut filsafat Buddha.
              Bangunan kolosal ini juga dihiasi oleh 2.672 panel relief dan 504
              patung Buddha.
            </p>
            <div className="row align-items-center mb-5 mt-5">
              <img src={img_2} alt="2" />
            </div>
            <p>
              Terjadinya erupsi Gunung Merapi yang dahsyat pada sekitar tahun
              1006 menyebabkan Candi Borobudur tertimbun oleh debu vulkanik
              selama ratusan tahun lamanya. Beberapa abad kemudian, Candi
              Borobudur akhirnya ditemukan kembali pada tahun 1814 oleh seorang
              insinyur Belanda bernama Hermanus Christiaan Cornelius, ketika
              kerajaan Inggris yang diwakili oleh Thomas Stamford Raffles
              menduduki beberapa bagian pulau Jawa, termasuk Jawa Tengah.
              Setelah Indonesia merdeka, pada akhir tahun 60-an pemerintah
              bekerja sama dengan UNESCO untuk merenovasi Candi Borobudur selama
              bertahun-tahun, sampai akhirnya UNESCO menetapkan mahakarya agung
              tersebut sebagai Situs Warisan Dunia di tahun 1991.
            </p>
            <h3 className="text-center mb-4">Destinasi</h3>
            <p>
              Tak hanya menawarkan keajaiban dunia, di sini Sobat Pesona juga
              bisa menemukan beraneka ragam objek wisata lainnya yang tidak
              kalah menarik. Di sekitar candi, terdapat tiga museum yang Sobat
              Pesona bisa kunjungi untuk menambah wawasan, yaitu Museum
              Borobudur, Museum Kapal Samudraraksa, dan Museum MURI. Jika ada di
              antara Sobat Pesona yang ingin melihat pemandangan luar biasa
              Candi Borobudur dari kejauhan, maka Sobat Pesona wajib mendatangi
              Punthuk Setumbu yang berlokasi di bagian barat Candi Borobudur. Di
              sini, Sobat Pesona juga bisa menyaksikan indahnya matahari terbit
              atau terbenam di masing-masing ufuk.
            </p>
            <div className="row align-items-center mb-5 mt-5">
              <img src={img_3} alt="3" />
            </div>
            <p>
              Tak jauh dari Punthuk Setumbu, Sobat Pesona juga bisa menemukan
              sebuah bangunan yang memiliki bentuk unik jika berjalan ke arah
              utara. Bangunan yang berbentuk seperti ayam ini adalah gereja yang
              dibangun pada tahun 90-an dan dikenal sebagai Gereja Ayam oleh
              warga setempat. Jika Sobat Pesona masih belum puas, di bagian
              timur Candi Borobudur terdapat tiga buah candi kecil yang juga tak
              kalah bagus, yaitu Candi Pawon, Candi Ngawen, dan Candi Mendut.
              Ingin menghabiskan waktu lebih lama lagi di sekitar Candi
              Borobudur? Coba menginap ke Desa Wisata yang ada di sekitar Candi
              Borobudur aja! Diantaranya seperti Desa Wanurejo, Desa Karangrejo,
              Desa Tanjungsari, Desa Giritengah, Desa Majaksingi, dan Desa
              Candirejo.
            </p>
            <h3 className="text-center mb-4">Kuliner</h3>
            <p>
              Jika Sobat Pesona merasa lapar setelah menyambangi tempat-tempat
              keren tersebut, tidak ada salahnya untuk mencoba kuliner khas
              Magelang di sekitar Candi Borobudur yang begitu nikmat. Salah satu
              makanan yang paling terkenal di daerah ini adalah olahan ikan
              bernama mangut beong atau ndas beong. Coba juga lezatnya sego
              godog dan kupat tahu yang dapat memanjakan lidah Sobat Pesona.
              Masih lapar juga? Rasakan sedapnya sop senerek dan nasi lesah!
              Cita rasa yang mantap dari kedua hidangan ini bisa membuat Sobat
              Pesona menambah lagi dan lagi sampai puas.
            </p>
            <div className="row align-items-center mb-5 mt-5">
              <img src={img_4} alt="4" />
            </div>
            <p>
              Masih ingin merasakan nikmatnya kuliner khas Magelang? Tahu bacem
              dan tempe mendoan yang sering dijual di sekitar sini sangatlah
              cocok untuk dijadikan sebagai bekal perjalanan pulang Sobat
              Pesona.
            </p>
          </div>
        </div>
      </div>
      {/* Main Content End */}
      {/* Content End */}
      {/* Footer Start */}
      <footer className="footer text-white">
        <p>
          Created with <i className="bi bi-heart-fill text-danger"></i> by_
          <Link
            to="https://www.instagram.com/ibra_rian/"
            className="text-white fw-bold"
          >
            Ibra Sahrian Alsa
          </Link>
        </p>
      </footer>
      {/* Footer End */}
    </div>
  );
};

export default Borobuddur;
