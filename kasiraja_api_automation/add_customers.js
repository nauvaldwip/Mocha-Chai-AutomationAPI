const request = require("supertest")("https://kasir-api.belajarqa.com/");
const expect = require("chai").expect;
var token = {};

describe ("", function(){ //GET TOKEN

    it("Get Token", async function(){ //test case 1
        const response = await request
        .post("authentications") //method API & path
        .send({
            email : "sample@example.com",
            password: "123adsfadf@"});
    
        token = response.body.data.accessToken
        console.log(token)
        })
    })
    
describe ("[POST] ADD - Customers", function(){ //scenario testing

    
    it("[+] Success ADD Data", async function(){ 
        const response = await request
        .post("customers") //method API & path
        .set("Authorization", `Bearer ${token}`) // GET BEARER TOKEN
        .send({
            name: "NAUVAL M. DWIPUTRA",
            phone: "081234567890",
            address: "Bekasi",
            description: "NAUVAL GANTENG"});

            expect(response.status).to.eql(201)
            expect(response.body.status).to.eql("success")
            expect(response.body.message).to.eql("Customer berhasil ditambahkan")

        
            var status = response.body.status
            var message = response.body.message
            console.log(status)
            console.log(message)
        })

    it("[-] Empty field Name", async function(){ 
        const response = await request
        .post("customers") //method API & path
        .set("Authorization", `Bearer ${token}`) // GET BEARER TOKEN
        .send({
            name: "",
            phone: "081234567890",
            address: "Bekasi",
            description: "NAUVAL GANTENG"});
    
            expect(response.status).to.eql(400)
            expect(response.body.status).to.eql("fail")
            expect(response.body.message).to.eql("\"name\" is not allowed to be empty")    
            
            var status = response.body.status
            var message = response.body.message
            console.log(status)
            console.log(message)
    })
    
    it("[-] Empty field Phone", async function(){ 
        const response = await request
        .post("customers") //method API & path
        .set("Authorization", `Bearer ${token}`) // GET BEARER TOKEN
        .send({
            name: "NAUVAL M. DWIPUTRA",
            phone: "",
            address: "Bekasi",
            description: "NAUVAL GANTENG"});
    
            expect(response.status).to.eql(201)
            expect(response.body.status).to.eql("success")
            expect(response.body.message).to.eql("Customer berhasil ditambahkan")
            expect(response.body.data.name).to.eql("NAUVAL M. DWIPUTRA")    
    
            
            var status = response.body.status
            var message = response.body.message
            var name = response.body.data.name
            console.log(status)
            console.log(message)
            console.log(name)
    })

    it("[-] Empty field Address", async function(){ 
        const response = await request
        .post("customers") //method API & path
        .set("Authorization", `Bearer ${token}`) // GET BEARER TOKEN
        .send({
            name: "NAUVAL M. DWIPUTRA",
            phone: "081388473666",
            address: "",
            description: "NAUVAL GANTENG"});
    
            expect(response.status).to.eql(201)
            expect(response.body.status).to.eql("success")
            expect(response.body.message).to.eql("Customer berhasil ditambahkan")
            expect(response.body.data.name).to.eql("NAUVAL M. DWIPUTRA")    
    
            
            var status = response.body.status
            var message = response.body.message
            var name = response.body.data.name
            console.log(status)
            console.log(message)
            console.log(name)
    })

    it("[-] Empty field Description", async function(){ 
        const response = await request
        .post("customers") //method API & path
        .set("Authorization", `Bearer ${token}`) // GET BEARER TOKEN
        .send({
            name: "NAUVAL M. DWIPUTRA",
            phone: "081388473666",
            address: "Bekasi",
            description: ""});
    
            expect(response.status).to.eql(201)
            expect(response.body.status).to.eql("success")
            expect(response.body.message).to.eql("Customer berhasil ditambahkan")
            expect(response.body.data.name).to.eql("NAUVAL M. DWIPUTRA")    
    
            
            var status = response.body.status
            var message = response.body.message
            var name = response.body.data.name
            console.log(status)
            console.log(message)
            console.log(name)
    })

    it("[-] Input Phone > 17 Number", async function(){
        const response = await request
        .post("customers") //method API & path
        .set("Authorization", `Bearer ${token}`) // GET BEARER TOKEN
        .send({
            name: "NAUVAL M. DWIPUTRA",
            phone: "081234567892342437",
            address: "Bekasi",
            description: "NAUVAL GANTENG"});
    
            expect(response.status).to.eql(400)
            expect(response.body.status).to.eql("fail")
            expect(response.body.message).to.eql("\"phone\" must be a safe number")    
            
            var status = response.body.status
            var message = response.body.message
            console.log(status)
            console.log(message)
    })

    it("[-] Input Phone using Char", async function(){
        const response = await request
        .post("customers")
        .set("Authorization", `Bearer ${token}`)  // GET BEARER TOKEN
        .send({
            name: "NAUVAL M. DWIPUTRA",
            phone: "asdfsdlkf",
            address: "Bekasi",
            description: "NAUVAL GANTENG"});
    
            expect(response.status).to.eql(400)
            expect(response.body.status).to.eql("fail")
            expect(response.body.message).to.eql("\"phone\" must be a number")    
            
            var status = response.body.status
            var message = response.body.message
            console.log(status)
            console.log(message)
    })

    it("[-] Input Phone using Special Char", async function(){
        const response = await request
        .post("customers") //method API & path
        .set("Authorization", `Bearer ${token}`)
        .send({
            name: "NAUVAL M. DWIPUTRA",
            phone: "~!@#$@#",
            address: "Bekasi",
            description: "NAUVAL GANTENG"});
    
            expect(response.status).to.eql(400)
            expect(response.body.status).to.eql("fail")
            expect(response.body.message).to.eql("\"phone\" must be a number")    
            
            var status = response.body.status
            var message = response.body.message
            console.log(status)
            console.log(message)
    })

    it("[-] Input Phone using Space on Front", async function(){
        const response = await request
        .post("customers") //method API & path
        .set("Authorization", `Bearer ${token}`) // GET BEARER TOKEN
        .send({
            name: "NAUVAL M. DWIPUTRA",
            phone: " 81366345934",
            address: "Bekasi",
            description: "NAUVAL GANTENG"});
    
            expect(response.status).to.eql(201)
            expect(response.body.status).to.eql("success")
            expect(response.body.message).to.eql("Customer berhasil ditambahkan")
            expect(response.body.data.name).to.eql("NAUVAL M. DWIPUTRA")    
    
            
            var status = response.body.status
            var message = response.body.message
            var name = response.body.data.name
            console.log(status)
            console.log(message)
            console.log(name)
    })
            

    
    })
