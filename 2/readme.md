# Pertanyaan
### Saat mengembangkan aplikasi web, Anda perlu mengoptimalkan performa dengan meminimalkan jumlah permintaan HTTP. Bagaimana Anda akan menggabungkan beberapa file CSS dan JavaScript menjadi satu file untuk mempercepat waktu muat halaman? Jelaskan langkah-langkahnya dan berikan contoh implementasinya.

# Jawaban

Untuk menggabungkan beberapa file CSS dan JavaScript menjadi satu file, kita bisa menggunakan Webpack, atau Concat. Namun, pada contoh kali ini saya akan menggunakan Concat.

Berikut langkah-langkahnya:
Pertama tama, saya mengnstall package concat dengan perintah :
```bash
npm install concat
```

kemudian, saya membuat file style1.css dan style2.css di dalam folder assets,

isi masing-masing file adalah sebagai berikut:
style1.css
```css
.card {
    background-color: #f4f4f4;
    padding: 20px;
    margin: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
```

style2.css
```css
.title {
    color: red;
    font-size: 24px;
    font-weight: bold;
}
```

Kemudian, saya membuat file `index.js`, setelah itu saya menggabungkan kedua file css tersebut dengan menggunakan concat, berikut contoh implementasinya:

```javascript
const concat = require('concat');

concat([
    './assets/style1.css',
    './assets/style2.css',
], './assets/main.css').then(() => {
    console.log('done');
}).catch((err) => {
    console.error(err);
});
```

Setelah itu, saya menjalankan file `index.js` dengan perintah:
```bash
node index.js
```

Maka, file `main.css` akan terbuat di dalam folder assets, dan berisi gabungan dari file `style1.css` dan `style2.css`.

Saya juga membuat file `index.html` untuk menampilkan hasilnya.