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
    
describe ("[POST] ADD - Categories", function(){ //scenario testing

    it("[+] Success ADD Data", async function(){ 
        const response = await request
        .post("categories") //method API & path
        .set("Authorization", `Bearer ${token}`) // GET BEARER TOKEN
        .send({
            name : "Minuman Dingin",
            description: "Minuman dingin yang menyejukan"});

            expect(response.status).to.eql(201)
            expect(response.body.status).to.eql("success")
            expect(response.body.message).to.eql("Category berhasil ditambahkan")
        
            var status = response.body.status
            var message = response.body.message
            console.log(status)
            console.log(message)
        })

        it("[-] Empty Field Name", async function(){ 
            const response = await request
            .post("categories") //method API & path
            .set("Authorization", `Bearer ${token}`) // GET BEARER TOKEN
            .send({
                name : "",
                description: "Minuman dingin yang menyejukan"});
    
                expect(response.status).to.eql(400)
                expect(response.body.status).to.eql("fail")
                expect(response.body.message).to.eql("\"name\" is not allowed to be empty")
            
                var status = response.body.status
                var message = response.body.message
                console.log(status)
                console.log(message)
        })

        it("[-] Empty Field Description", async function(){ 
            const response = await request
            .post("categories") //method API & path
            .set("Authorization", `Bearer ${token}`) // GET BEARER TOKEN
            .send({
                name : "Minuman Hangat",
                description: ""});
    
                expect(response.status).to.eql(201)
                expect(response.body.status).to.eql("success")
                expect(response.body.message).to.eql("Category berhasil ditambahkan")
                expect(response.body.data.name).to.eql("Minuman Hangat")
            
                var status = response.body.status
                var message = response.body.message
                console.log(status)
                console.log(message)
                console.log(response.body.data.name)
        })
            

    
    })
