import React from "react";
import "../Style/content.css";
import { Link } from "react-router-dom";
import r1 from "../Assets/r1.webp";
import r2 from "../Assets/r2.webp";
import r3 from "../Assets/r3.webp";
import r4 from "../Assets/r4.webp";

const rajaAmpat = () => {
  return (
    <div>
      {/* Content Start */}
      <div>
        <div className="section intro_1 text-light"></div>
      </div>
      {/* Main Content */}
      <div className="container text-md-start mt-5 mb-5">
        <div className="row align-items-center">
          <div className="col-md-8 offset-md-2">
            <nav className="bs" aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Raja Ampat
                </li>
              </ol>
            </nav>
            <h1 className="mb-5 mt-5 text-center">
              Pantai Waiwo, Raja Ampat: Surganya Anak Pantai
            </h1>
            <hr className="border border-dark border-3 opacity-75" />
            <p>
              Keindahan alam Raja Ampat, Papua Barat memang tak perlu diragukan
              lagi. Gugusan pulau di ujung Papua ini menyajikan pesona pantai,
              bawah laut, dan pegunungan yang sangat memanjakan mata dan
              berkelas dunia. Tak hanya itu, Papua juga kaya akan tradisi dan
              budaya yang hingga kini masih terus dilestarikan. Seperti yang
              dikatakan Mas Menteri Pariwisata dan Ekonomi Kreatif, Sandiaga
              Salahuddin Uno, saat berkunjung beberapa waktu lalu, Papua sangat
              kaya akan adat istiadat dan budaya, serta memiliki potensi
              pariwisata berbasis keindahan alam berkelas dunia. Untuk itu,
              Kementerian Pariwisata dan Ekonomi Kreatif akan berkolaborasi
              dengan Pemerintah Provinsi dan Pemerintah Kabupaten/Kota untuk
              mewujudkan pariwisata yang berkualitas dan berkelanjutan dalam
              pembangunan pariwisata Papua ke depan. Tahukah kamu? Salah satu
              pantai yang menjadi primadona di Raja Ampat adalah Pantai Waiwo.
              Pantai ini berada di Pulau Waigeo, pulau terbesar di Raja Ampat.
              Jalur menuju Pantai Waiwo sangatlah mudah, hanya perlu menempuh
              waktu sekitar 20 menit dari pusat Kota Waisai dengan menggunakan
              mobil maupun sepeda motor. Saat tiba di Pantai Waiwo, Sobat Pesona
              akan langsung menemukan beberapa homestay yang berjejer rapi.
              Bersiaplah untuk menghabiskan waktu di pantai ini, dijamin akan
              menjadi pengalaman wisata yang tak terlupakan. Berikut aktivitas
              menarik yang bisa dilakukan untuk menikmati pesona Pantai Waiwo!
            </p>
            <h3 className="text-center mt-4 mb-4">
              Bersantai di Dermaga Tempat Presiden Menyambut Tahun Baru 2016
            </h3>
            <div className="row align-items-center mb-5 mt-5">
              <img src={r1} alt="1" />
            </div>
            <p>
              Pada 1 Januari 2016, Presiden Joko Widodo mengunggah foto dirinya
              duduk di sebuah dermaga di Raja Ampat. Ya, itulah dermaga di
              Pantai Waiwo. Dalam foto tersebut, Presiden Jokowi mengenakan
              kemeja putih lengan panjang dan sarung. Dalam unggahannya,
              Presiden menuliskan “Fajar perdana 2016, di dermaga Waiwo, Raja
              Ampat, tempat terbaik di dunia untuk snorkeling. Ayo, ajak
              keluarga berwisata di dalam negeri!” Dermaga ini memang tak
              sekokoh tahun 2016. Maklum, Pandemi Covid-19 membuat tempat wisata
              sepi pengunjung sehingga dermaga tidak terawat. Namun jangan
              khawatir, ada dermaga apung yang membuat pengunjung bisa lebih
              dekat ke pantai. Di sini wisatawan bisa duduk santai menikmati
              pemandangan sembari mengabadikan momen. Saat berfoto ria, jangan
              lupa keluarkan gaya andalanmu!
            </p>
            <h3 className="text-center mt-4 mb-4">Menikmati Pesona Pantai</h3>
            Berjalan menuju arah dermaga, Sobat Pesona akan ditemani dengan
            hembusan angin yang sejuk, langit cerah, dan pemandangan laut yang
            memanjakan mata. Jauh ke arah laut, terlihat pulau-pulau kecil yang
            seolah memanggil Sobat Pesona untuk menyambanginya.
            <div className="row align-items-center mt-5 mt-5">
              <img src={r2} alt="2" />
            </div>
            <p>
              Turunkan pandangan ke arah bawah dermaga dan seketika Sobat Pesona
              akan melihat ikan-ikan kecil berwarna-warni yang berenang di bawah
              air laut. Jika Sobat Pesona meremas biskuit dan menaburkannya ke
              laut, ikan-ikan kecil akan semakin banyak bermunculan.
            </p>
            <h3 className="text-center mt-4 mb-4">
              Mencoba Diving dan Snorkeling
            </h3>
            <p>
              Jika Sobat Pesona tertarik untuk menyelam, Pantai Waiwo memiliki
              sekitar 30 spot diving di sepanjang pantai. Lokasi favorit para
              wisatawan adalah Blue Magic. Di lokasi ini, Sobat Pesona dapat
              menemui pari manta, jenis ikan pari yang langka.
            </p>
            <div className="row align-items-center mt-5 mt-5">
              <img src={r3} alt="3" />
            </div>
            <p>
              Pantai Waiwo memiliki Dive Centre yang bersertifikat khusus.
              Seluruh staf di Dive Centre ini dapat merekomendasikan spot diving
              terbaik yang ada di Pantai Waiwo. Bagi wisatawan yang ingin diving
              akan dikenakan tarif sebesar Rp500.000,- per orang. Sementara jika
              Sobat Pesona tak ingin menyelam, bisa mencoba aktivitas snorkeling
              dengan harga yang beragam, tergantung tujuannya. Misalnya, jika
              menuju Pulau Mioskun dikenakan tarif Rp1.000.000,- per orang.
            </p>
            <h3 className="text-center mt-4 mb-4">Menikmati Sunset</h3>
            <div className="row align-items-center mt-5 mt-5">
              <img src={r4} alt="4" />
            </div>
            <p className="mb-4 mt-4">
              Menghabiskan waktu di Pantai Waiwo tidak akan pernah terasa,
              tiba-tiba waktu sudah hampir sore dan matahari pun siap kembali ke
              peraduan. Menikmati sunset di pantai Waiwo akan menjadi pengalaman
              yang sulit dilupakan. Sobat Pesona dapat melihat warna langit yang
              biru perlahan berganti menjadi jingga menandakan sore menjelang.
              Namun, keindahan Pantai Waiwo tidak berubah, bahkan di saat hari
              beralih petang. Langit Raja Ampat yang bersih membuat bulan dan
              bintang pun berganti merajai langit selepas matahari terbenam.
            </p>
          </div>
        </div>
      </div>
      {/* Main Content */}
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

export default rajaAmpat;
