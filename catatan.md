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