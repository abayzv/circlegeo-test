# Pertanyaan
### Sebagai frontend developer, Anda bertanggung jawab untuk memastikan bahwa aplikasi web yang Anda bangun dapat diakses oleh pengguna dengan berbagai kebutuhan aksesibilitas. Bagaimana Anda akan memastikan bahwa sebuah tombol pada halaman web Anda dapat diakses dengan mudah melalui keyboard dan dapat diakses dengan perangkat pembaca layar? Jelaskan teknik dan praktik terbaik yang akan Anda terapkan dalam situasi ini.

# Jawaban

Untuk memastikan bahwa sebuah tombol pada halaman web dapat diakses dengan mudah melalui keyboard dan dapat diakses dengan perangkat pembaca layar, saya biasa menerapkan beberapa teknik dan praktik seperti berikut:

1. **Menggunakan tag `<button>` untuk tombol**
   - Saat membuat tombol, sebaiknya menggunakan tag `<button>` daripada tag `<div>` atau tag lainnya. Hal ini karena tag `<button>` sudah memiliki aksesibilitas bawaan yang baik, seperti dapat diakses dengan keyboard dan perangkat pembaca layar.

2. **Menambahkan `role="button"` pada elemen non-button yang berfungsi sebagai tombol**

    Jika tombol yang dibuat bukan menggunakan tag `<button>`, maka sebaiknya menambahkan atribut `role="button"` pada elemennya. Contoh:
    
    ```html
    <div role="button" tabindex="0" aria-label="Klik untuk membuka menu" onclick="toggleMenu()">
      Menu
    </div>
    ```

3. **Menambahkan `tabindex="0"` pada elemen yang dapat di-fokuskan**

    Untuk memastikan elemen non-form seperti `<div>`, `<span>`, atau elemen lainnya dapat di-fokuskan dengan keyboard, tambahkan atribut `tabindex="0"` pada elemennya. Contoh:
    
    ```html
    <div tabindex="0" aria-label="Klik untuk membuka menu" onclick="toggleMenu()">
      Menu
    </div>
    ```

4. **Menambahkan aksesibilitas dengan atribut `aria-*`**
    
    - `aria-label`: Menambahkan label pada elemen yang tidak memiliki teks.
    - `aria-hidden`: Menyembunyikan elemen dari pembaca layar.
    - `aria-expanded`: Menandakan status elemen yang dapat di-expand/collapse.
    - `aria-pressed`: Menandakan status elemen yang dapat ditekan.
    - dan lain sebagainya.

5. **Menggunakan CSS untuk menunjukkan fokus keyboard**

    Saat tombol di-fokuskan dengan keyboard, sebaiknya menambahkan efek visual agar pengguna dapat melihatnya. Contoh:
    
    ```css
    :focus {
      outline: 2px solid blue;
    }
    ```