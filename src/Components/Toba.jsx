import React from "react";
import { Link } from "react-router-dom";
import "../Style/content.css";
import Samosir1 from "../Assets/samosir1.jpg";
import Samosir2 from "../Assets/samosir2.webp";

const Toba = () => {
  return (
    <div>
      {/* Content Start */}
      <div>
        <div className="section intro_2 text-light"></div>
      </div>
      {/* Main Content Start */}
      <div className="container text-md-start mt-5 mb-5">
        <div className="row align-items-center">
          <div className="col-md-8 offset-md-2">
            <nav className="bs" aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Danau Toba
                </li>
              </ol>
            </nav>
            <h1 className="mb-4 mt-4 text-center">Danau Toba</h1>
            <hr className="border border-dark border-3 opacity-75" />
            <p>
              Danau Toba adalah sebuah keajaiban alam yang sangat menakjubkan.
              Danau ini diperkirakan terbentuk dari letusan dahsyat sebuah
              gunung api, Gunung Toba, yang terjadi sekitar 74.000 tahun yang
              lalu. Dengan luas lebih dari 1.145 kilometer persegi dan kedalaman
              450 meter, Danau Toba sebenarnya lebih mirip lautan daripada
              danau. Di tengah danau vulkanik terbesar di dunia ini juga
              terdapat sebuah pulau yang berukuran cukup besar, yaitu Pulau
              Samosir.
            </p>
            <div className="row align-items-center mt-5 mt-5">
              <img src={Samosir1} alt="samosir" />
            </div>
            <h3 className="text-center mt-4 mb-4">Tempat yang menenangkan</h3>
            <p>
              Danau Toba menjadi tempat yang sempurna untuk bersantai, karena
              udaranya sangat sejuk dan suasananya pun amat tenang. Tentu saja,
              sebab letak Danau Toba berada di 900 meter di atas permukaan laut.
              Selain panorama danau yang memukau, Sobat Pesona juga akan
              disuguhkan keindahan pemandangan deretan pegunungan dan pepohonan
              hijau yang menyegarkan mata. Pokoknya, cocok jadi tempat untuk
              melepas penat, deh!
            </p>
            <h3 className="text-center mt-4 mb-4">Cara Kedanau Toba</h3>
            <h4 className="mt-4 mb-4">Jalur Darat</h4>
            Nah, jika Sobat Pesona menggunakan jalur darat dari Medan, Sobat
            Pesona bisa menggunakan bus jurusan Medan-Parapat yang bisa ditempuh
            dalam waktu kurang lebih 4 jam. Namun, bila ingin melakukan
            perjalanan yang lebih pribadi dan santai, tersedia pula agen-agen
            perjalanan di kota Medan yang bisa membantu Sobat Pesona untuk
            mengatur penyewaan mobil dan supir ke Danau Toba. Sobat Pesona juga
            bisa melanjutkan perjalanan dari Danau Toba ke Pulau Samosir.
            Pilihannya adalah naik kapal feri yang dijadwalkan berangkat setiap
            satu jam sekali di Pelabuhan Ajibata menuju Pelabuhan Tomok. Atau,
            Sobat Pesona juga bisa berangkat dari Pelabuhan Muara ke Pelabuhan
            Sipinggan yang jadwal keberangkatan kapalnya hanya dua kali sehari,
            yaitu jam 06.30 WIB dan 15.00 WIB. Jadwal ini dapat berubah
            sewaktu-waktu, pastikan Sobat Pesona selalu mencari info terbaru,
            ya!
            <h4 className="mt-4 mb-4">Jalur Udara</h4>
            Jika Sobat Pesona berencana untuk ke Danau Toba menggunakan
            transportasi udara, terdapat dua jalur yang bisa dipilih. Pilihan
            pertama, dari Bandara Internasional Kualanamu, Medan, Sobat Pesona
            bisa naik pesawat menuju Bandara Internasional Sisingamangaraja XII
            yang terletak di Siborongborong, Tapanuli Utara. Kemudian, dari
            bandara ini, Sobat Pesona bisa meneruskan perjalanan ke Danau Toba
            menggunakan jalur darat. Pilihan kedua, Sobat Pesona bisa langsung
            memilih penerbangan ke Bandara Internasional Sisingamangaraja XII
            dari Jakarta atau dari beberapa kota besar lainnya. Cek dulu
            ketersediaan maskapai penerbangan dari daerahmu ya, Sobat Pesona!
            <div className="row align-items-center mt-5 mt-5">
              <img src={Samosir2} alt="samosir" />
            </div>
            <h3 className="text-center mt-4 mb-4">
              Apa yang bisa dilakukan selama di Danau Toba?
            </h3>
            <p>
              Ada banyak sekali aktivitas yang bisa kamu lakukan selama berada
              di Danau Toba. Sobat Pesona bisa menyewa sepeda motor untuk
              mengitari kawasan Pulau Samosir. Jangan lupa untuk mampir ke
              puncaknya ya, sebab pemandangan yang disuguhkan kian indah saat
              dilihat dari ketinggian. Sedangkan, jika Sobat Pesona mampir ke
              Desa Tuktuk, cara terbaik untuk menikmati pulau ini adalah dengan
              berjalan kaki dan menyusuri jalan-jalan utama desa yang sejuk dan
              asri.
            </p>
            <h3 className="text-center mt-4 mb-4">Daya tarik danau Toba</h3>
            <p className="mt-4 mb-4">
              Ada banyak sekali cara bagi Sobat Pesona untuk menikmati
              pemandangan alam Danau Toba dan sekitarnya. Untuk SObat Pesona
              penyuka wisata olahraga air, mengitari Danau Toba dengan
              menggunakan kayak menjadi hal yang bisa dicoba saat ke sini.
              Terdapat tiga rute yang bisa Sobat Pesona ambil saat menjelajah
              Danau Toba dengan kayak. Rute yang mudah Tongging – Silalahi
              sepanjang 12 km, rute yang cukup menantang Tongging - Samosir
              sekitar 50 km, terakhir adalah rute yang sangat sulit yaitu
              Lingkaran Utara sejauh 175 km. Di dekat Danau Toba juga terdapat
              dua museum yang kaya akan sejarah dan budaya Suku Batak, yaitu
              Museum Tomok dan Museum Huta Bolon. Di Museum Tomok, Sobat Pesona
              bisa melihat museum yang berupa rumah adat Batak Toba yang usianya
              sudah ratusan tahun tapi masih rapi, kokoh, dan terjaga.
              Sedangkan, di Museum Huta Bolon Sobat Pesona akan terkesima akan
              ukiran-ukiran dan ornamen khas Batak bernama gorga yang menjadi
              bagian dari bangunan museum. Hal unik lainnya yang bisa kamu temui
              di kawasan Danau Toba, yaitu boneka kayu seukuran manusia yang
              diberi nama Sigale-gale. Sigale-gale dikenal karena kemistisan dan
              mitos yang melekat di dalamnya, lho! Masyarakat lokal percaya
              bahwa boneka Sigale-gale bisa menari dan meratap sendiri tanpa
              diiringi musik. Beberapa dari mereka juga berkata bahwa boneka
              Sigale-gale hanya bisa diletakkan di dalam peti. Boneka ini juga
              biasanya digunakan dalam upacara kematian keluarga di daerah
              Samosir, karena masyarakat lokal percaya bahwa tarian Sigale-gale
              akan mengantarkan roh mereka yang telah mati ke alam baka.
            </p>
          </div>
        </div>
      </div>
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

export default Toba;
