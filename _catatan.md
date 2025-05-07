# DOM

## Document object models

Cara javascript memperlakukan dan membaca dokumen HTML

Memperlakukannya sebagai sebuah objek

Dengan bentuk menyerupai struktur pohon

DOM Tree Strcuture 

## DOM Manipulation

Manipulasi tidak terlepas dari objek javascript

Dua object utama yang digunakan:
- Document
- Window

Pengaksesan elemen mirip dengan css, dapat digunakan dengan method yang ada di dalaman object document

- document.getElementById
- document.getElementbyTagName
- document.querySelector 
- document.querySelectorAll

## Node

Sebuah element HTML pada javascript DOM adalah turunan dari node object. 

Node memiliki method yang dapat membantu manipulasi element, yang sudah dibuat secara dinamis. ataupun yang sudah ada di dalam struktur html.

Node menurunkan sifat untuk melakukan manipulasi pada element.

node bisa didapatkan dengan 


Method yang dapat digunakan pada node:
-node.cloneNode
-node.appendChild

Beberapa properti yang sering digunakan:
-node.textContent
-node.innerText

## Element

Setiap entitas pada dokumen html

Element fokus pada tag, node fokus pada objek satuan dalam element

method elemet:
- element.setAttribute / element.hasAttribute / element.getAttribute
- element.append / element.prepend
- element.remove
properti element:
- element.innerHTML
- element.classList

## Dynamic element creation

- Element dapat dibuat secara dinamis dengan menggunakan Javascript
- Memerlukan target element untuk menampilkan dynamic element

Method:
document.createElemet
method.append
method.prepend
method.replaceChildren

## Window Object

Berinteraksi secara langsung dengan browser.

- Melakukan penavigasian halaman
- Mendapatkan posisi scroll dari halaman
- Menyimpan data secara permanen
- Menggunakan method bawaan window selama berada dalam ruang-linkup browser

## Base64

-Mekanisme encoding yang merepresentasikan binary data dalam bentuk teks yang bisa dilihat oleh mata
-Atau melakukan obfuscating pada teks agar tidak bisa dibaca oleh mata
-Mekanismenya disebut Encode-decode
-buat gambar jadi data url
-buat authentication, file json

const encoded = window.btoa(text) > ganti data url (teks) jadi gambar


setTimeOut (()=>{
    window.location.href = "location.html"
}, 2000)

const url = new URL(window.location.href)
const content = document.getElementbyId('content')
content.textContent = url.searchParams.get('search')
