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
        .post("products") //method API & path
        .set("Authorization", `Bearer ${token}`) // GET BEARER TOKEN
        .send({
            category_id : "811f547e-a24e-4f94-bfe1-b7ed7d11c03f",
            code        : "A314ASDDFIER3432",
            name        : "Malkis Roma",
            price       : "3500",
            cost        : "3000",
            stock       : "5"});

            expect(response.status).to.eql(201)
            expect(response.body.status).to.eql("success")
            expect(response.body.message).to.eql("Product berhasil ditambahkan")
            expect(response.body.data.name).to.eql("Malkis Roma")

            var status = response.body.status
            var message = response.body.message
            var name = response.body.data.name
            
            console.log(status)
            console.log(message)
            console.log(name)
    })

    it("[-] Empty field Category_id", async function(){ 
        const response = await request
        .post("products") //method API & path
        .set("Authorization", `Bearer ${token}`) // GET BEARER TOKEN
        .send({
            category_id : "",
            code        : "A314ASDDFIER3432",
            name        : "Malkis Roma",
            price       : "3500",
            cost        : "3000",
            stock       : "5"});

            expect(response.status).to.eql(400)
            expect(response.body.status).to.eql("fail")
            expect(response.body.message).to.eql("\"category_id\" is not allowed to be empty")

            var status = response.body.status
            var message = response.body.message
            console.log(status)
            console.log(message)
    })

    it("[-] Empty field Code", async function(){ 
        const response = await request
        .post("products") //method API & path
        .set("Authorization", `Bearer ${token}`) // GET BEARER TOKEN
        .send({
            category_id : "811f547e-a24e-4f94-bfe1-b7ed7d11c03f",
            code        : "",
            name        : "Malkis Roma",
            price       : "3500",
            cost        : "3000",
            stock       : "5"});

            expect(response.status).to.eql(400)
            expect(response.body.status).to.eql("fail")
            expect(response.body.message).to.eql("\"code\" is not allowed to be empty")

            var status = response.body.status
            var message = response.body.message
            console.log(status)
            console.log(message)
    })

    it("[-] Empty field Name", async function(){ 
        const response = await request
        .post("products") //method API & path
        .set("Authorization", `Bearer ${token}`) // GET BEARER TOKEN
        .send({
            category_id : "811f547e-a24e-4f94-bfe1-b7ed7d11c03f",
            code        : "A314ASDDFIER3432",
            name        : "",
            price       : "3500",
            cost        : "3000",
            stock       : "5"});

            expect(response.status).to.eql(400)
            expect(response.body.status).to.eql("fail")
            expect(response.body.message).to.eql("\"name\" is not allowed to be empty")

            var status = response.body.status
            var message = response.body.message
            
            console.log(status)
            console.log(message)
    })

    it("[-] Empty field Price", async function(){ 
        const response = await request
        .post("products") //method API & path
        .set("Authorization", `Bearer ${token}`) // GET BEARER TOKEN
        .send({
            category_id : "811f547e-a24e-4f94-bfe1-b7ed7d11c03f",
            code        : "A314ASDDFIER3432",
            name        : "Malkis Roma",
            price       : "",
            cost        : "3000",
            stock       : "5"});

            expect(response.status).to.eql(400)
            expect(response.body.status).to.eql("fail")
            expect(response.body.message).to.eql("\"price\" must be a number")

            var status = response.body.status
            var message = response.body.message
            console.log(status)
            console.log(message)
    })

    it("[-] Empty field Cost", async function(){ 
        const response = await request
        .post("products") //method API & path
        .set("Authorization", `Bearer ${token}`) // GET BEARER TOKEN
        .send({
            category_id : "811f547e-a24e-4f94-bfe1-b7ed7d11c03f",
            code        : "A314ASDDFIER3432",
            name        : "Malkis Roma",
            price       : "3500",
            cost        : "",
            stock       : "5"});

            expect(response.status).to.eql(400)
            expect(response.body.status).to.eql("fail")
            expect(response.body.message).to.eql("\"cost\" must be a number")

            var status = response.body.status
            var message = response.body.message
            console.log(status)
            console.log(message)
    })

    it("[-] Empty field Stock", async function(){ 
        const response = await request
        .post("products") //method API & path
        .set("Authorization", `Bearer ${token}`) // GET BEARER TOKEN
        .send({
            category_id : "811f547e-a24e-4f94-bfe1-b7ed7d11c03f",
            code        : "A314ASDDFIER3432",
            name        : "Malkis Roma",
            price       : "3500",
            cost        : "3000",
            stock       : ""});

            expect(response.status).to.eql(400)
            expect(response.body.status).to.eql("fail")
            expect(response.body.message).to.eql("\"stock\" must be a number")

            var status = response.body.status
            var message = response.body.message
            console.log(status)
            console.log(message)
    })

    it("[-] Input Cost more than Price", async function(){ 
        const response = await request
        .post("products") //method API & path
        .set("Authorization", `Bearer ${token}`) // GET BEARER TOKEN
        .send({
            category_id : "811f547e-a24e-4f94-bfe1-b7ed7d11c03f",
            code        : "A314ASDDFIER3432",
            name        : "Malkis Roma",
            price       : "3500",
            cost        : "6000",
            stock       : "5"});

            expect(response.status).to.eql(400)
            expect(response.body.status).to.eql("fail")
            expect(response.body.message).to.eql("\"price\" must be greater than ref:cost")

            var status = response.body.status
            var message = response.body.message
            console.log(status)
            console.log(message)
    })

    it("[-] Input Price > 16 digit", async function(){ 
        const response = await request
        .post("products") //method API & path
        .set("Authorization", `Bearer ${token}`) // GET BEARER TOKEN
        .send({
            category_id : "811f547e-a24e-4f94-bfe1-b7ed7d11c03f",
            code        : "A314ASDDFIER3432",
            name        : "Malkis Roma",
            price       : "35008239024803133",
            cost        : "3000",
            stock       : "5"});

            expect(response.status).to.eql(400)
            expect(response.body.status).to.eql("fail")
            expect(response.body.message).to.eql("\"price\" must be a safe number")

            var status = response.body.status
            var message = response.body.message
            console.log(status)
            console.log(message)
    })

    it("[-] Input Cost > 16 digit", async function(){ 
        const response = await request
        .post("products") //method API & path
        .set("Authorization", `Bearer ${token}`) // GET BEARER TOKEN
        .send({
            category_id : "811f547e-a24e-4f94-bfe1-b7ed7d11c03f",
            code        : "A314ASDDFIER3432",
            name        : "Malkis Roma",
            price       : "3500",
            cost        : "35008239024803133",
            stock       : "5"});

            expect(response.status).to.eql(400)
            expect(response.body.status).to.eql("fail")
            expect(response.body.message).to.eql("\"cost\" must be a safe number")

            var status = response.body.status
            var message = response.body.message
            console.log(status)
            console.log(message)
    })

    it("[-] Input Price using Char", async function(){ 
        const response = await request
        .post("products") //method API & path
        .set("Authorization", `Bearer ${token}`) // GET BEARER TOKEN
        .send({
            category_id : "811f547e-a24e-4f94-bfe1-b7ed7d11c03f",
            code        : "A314ASDDFIER3432",
            name        : "Malkis Roma",
            price       : "abcsdjsak",
            cost        : "2000",
            stock       : "5"});

            expect(response.status).to.eql(400)
            expect(response.body.status).to.eql("fail")
            expect(response.body.message).to.eql("\"price\" must be a number")

            var status = response.body.status
            var message = response.body.message
            console.log(status)
            console.log(message)
    })

    it("[-] Input Price using Special Char", async function(){ 
        const response = await request
        .post("products") //method API & path
        .set("Authorization", `Bearer ${token}`) // GET BEARER TOKEN
        .send({
            category_id : "811f547e-a24e-4f94-bfe1-b7ed7d11c03f",
            code        : "A314ASDDFIER3432",
            name        : "Malkis Roma",
            price       : "!#@~#$",
            cost        : "2000",
            stock       : "5"});

            expect(response.status).to.eql(400)
            expect(response.body.status).to.eql("fail")
            expect(response.body.message).to.eql("\"price\" must be a number")

            var status = response.body.status
            var message = response.body.message
            console.log(status)
            console.log(message)
    })

    it("[-] Input Cost using Char", async function(){ 
        const response = await request
        .post("products") //method API & path
        .set("Authorization", `Bearer ${token}`) // GET BEARER TOKEN
        .send({
            category_id : "811f547e-a24e-4f94-bfe1-b7ed7d11c03f",
            code        : "A314ASDDFIER3432",
            name        : "Malkis Roma",
            price       : "3500",
            cost        : "abcsdjsak",
            stock       : "5"});

            expect(response.status).to.eql(400)
            expect(response.body.status).to.eql("fail")
            expect(response.body.message).to.eql("\"cost\" must be a number")

            var status = response.body.status
            var message = response.body.message
            console.log(status)
            console.log(message)
    })

    it("[-] Input Cost using Special Char", async function(){ 
        const response = await request
        .post("products") //method API & path
        .set("Authorization", `Bearer ${token}`) // GET BEARER TOKEN
        .send({
            category_id : "811f547e-a24e-4f94-bfe1-b7ed7d11c03f",
            code        : "A314ASDDFIER3432",
            name        : "Malkis Roma",
            price       : "3500",
            cost        : "!#@~#$",
            stock       : "5"});

            expect(response.status).to.eql(400)
            expect(response.body.status).to.eql("fail")
            expect(response.body.message).to.eql("\"cost\" must be a number")

            var status = response.body.status
            var message = response.body.message
            console.log(status)
            console.log(message)
    })

    it("[-] Input Stock using Char", async function(){ 
        const response = await request
        .post("products") //method API & path
        .set("Authorization", `Bearer ${token}`) // GET BEARER TOKEN
        .send({
            category_id : "811f547e-a24e-4f94-bfe1-b7ed7d11c03f",
            code        : "A314ASDDFIER3432",
            name        : "Malkis Roma",
            price       : "3500",
            cost        : "3000",
            stock       : "abcsdjsak"});

            expect(response.status).to.eql(400)
            expect(response.body.status).to.eql("fail")
            expect(response.body.message).to.eql("\"stock\" must be a number")

            var status = response.body.status
            var message = response.body.message
            console.log(status)
            console.log(message)
    })

    it("[-] Input Stock using Special Char", async function(){ 
        const response = await request
        .post("products") //method API & path
        .set("Authorization", `Bearer ${token}`) // GET BEARER TOKEN
        .send({
            category_id : "811f547e-a24e-4f94-bfe1-b7ed7d11c03f",
            code        : "A314ASDDFIER3432",
            name        : "Malkis Roma",
            price       : "3500",
            cost        : "2000",
            stock       : "!#@~#$"});

            expect(response.status).to.eql(400)
            expect(response.body.status).to.eql("fail")
            expect(response.body.message).to.eql("\"stock\" must be a number")

            var status = response.body.status
            var message = response.body.message
            console.log(status)
            console.log(message)
    })

})