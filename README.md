# Automation API using Mocha Js &amp; Chai Js

* URL : https://kasir-api.belajarqa.com

* Document API Kasir Aja
https://docs.google.com/document/d/1W0XI71VrHLgnhRyziVUQqy62Acnh0FSxGHs9n4GIV_U/edit?usp=sharing

# Langkah awal :
* Install Node.Js & Npm. 
* Install Text Editor, misal Visual Studio Code
* Check Version Node.Js & Npm di Command Prompt / Terminal anda.
    * node -v
    * npm -v
* ketik perintah **npm init**. Perintah npm init akan membuat file **package.json**
    * isi yang menurut anda penting saja, sisanya lakukan Enter hingga selesai.
* Install Package Library Mocha, Chai, Supertest
    * npm install mocha -g
    * npm install chai
    * npm install mocha chai supertest --save-dev

# Cara running :
* Buka terminal (CTRL + ` ) pada Code Editor anda. Atau melalui Command prompt anda
* ketik npx mocha namafile.js
    * Contoh :
    * npx mocha kasiraja_api_automation\add_sales.js