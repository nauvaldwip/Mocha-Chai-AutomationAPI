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
    
describe ("[POST] ADD - Sales", function(){ //scenario testing

    it("[+] Success ADD Data", async function(){ 
        const response = await request
        .post("sales") //method API & path
        .set("Authorization", `Bearer ${token}`) // GET BEARER TOKEN
        .send({
            officeId: "2f458834-0b21-466f-9f56-d35a8ed6f6ba",
            customerId: "811f547e-a24e-4f94-bfe1-b7ed7d11c03f",
            date: "2023-02-01",
            invoice: "INV001",
            amount: 2000,
            discount: 0,
            description: "Pembelian pertama",
            items : [
                {
                    productId: "681fa14f-8bed-4bee-a4a3-5c15a9e3fc5d",
                    quantity: 1,
                    price: 2000
                }
                    ]
                });

            expect(response.status).to.eql(201)
            expect(response.body.status).to.eql("success")
            expect(response.body.message).to.eql("transaksi ditambahkan")
        
            var status = response.body.status
            var message = response.body.message
            var saleId = response.body.data.saleId
            console.log(status)
            console.log(message)
            console.log(saleId)
    })

    it("[-] Empty field officeId", async function(){ 
        const response = await request
        .post("sales") //method API & path
        .set("Authorization", `Bearer ${token}`) // GET BEARER TOKEN
        .send({
            officeId: "",
            customerId: "811f547e-a24e-4f94-bfe1-b7ed7d11c03f",
            date: "2023-02-01",
            invoice: "INV001",
            amount: 2000,
            discount: 0,
            description: "Pembelian pertama",
            items : [
                {
                    productId: "681fa14f-8bed-4bee-a4a3-5c15a9e3fc5d",
                    quantity: 1,
                    price: 2000
                }
                    ]
                });

            expect(response.status).to.eql(400)
            expect(response.body.status).to.eql("fail")
            expect(response.body.message).to.eql("\"officeId\" is not allowed to be empty")
        
            var status = response.body.status
            var message = response.body.message
            console.log(status)
            console.log(message)
    })

    it("[-] Empty field customerId", async function(){ 
        const response = await request
        .post("sales") //method API & path
        .set("Authorization", `Bearer ${token}`) // GET BEARER TOKEN
        .send({
            officeId: "2f458834-0b21-466f-9f56-d35a8ed6f6ba",
            customerId: "",
            date: "2023-02-01",
            invoice: "INV001",
            amount: 2000,
            discount: 0,
            description: "Pembelian pertama",
            items : [
                {
                    productId: "681fa14f-8bed-4bee-a4a3-5c15a9e3fc5d",
                    quantity: 1,
                    price: 2000
                }
                    ]
                });

            expect(response.status).to.eql(400)
            expect(response.body.status).to.eql("fail")
            expect(response.body.message).to.eql("\"customerId\" is not allowed to be empty")
            
            var status = response.body.status
            var message = response.body.message
            console.log(status)
            console.log(message)
    })

    it("[-] Empty field productId", async function(){ 
        const response = await request
        .post("sales") //method API & path
        .set("Authorization", `Bearer ${token}`) // GET BEARER TOKEN
        .send({
            officeId: "2f458834-0b21-466f-9f56-d35a8ed6f6ba",
            customerId: "811f547e-a24e-4f94-bfe1-b7ed7d11c03f",
            date: "2023-02-01",
            invoice: "INV001",
            amount: 2000,
            discount: 0,
            description: "Pembelian pertama",
            items : [
                {
                    productId: "",
                    quantity: 1,
                    price: 2000
                }
                    ]
                });

                expect(response.status).to.eql(400)
                expect(response.body.status).to.eql("fail")
                expect(response.body.message).to.eql("\"items[0].productId\" is not allowed to be empty")
                
                var status = response.body.status
                var message = response.body.message
                console.log(status)
                console.log(message)
    })

    it("[-] Input Quantity without Number", async function(){ 
        const response = await request
        .post("sales") //method API & path
        .set("Authorization", `Bearer ${token}`) // GET BEARER TOKEN
        .send({
            officeId: "2f458834-0b21-466f-9f56-d35a8ed6f6ba",
            customerId: "811f547e-a24e-4f94-bfe1-b7ed7d11c03f",
            date: "2023-02-01",
            invoice: "INV001",
            amount: 2000,
            discount: 0,
            description: "Pembelian pertama",
            items : [
                {
                    productId: "681fa14f-8bed-4bee-a4a3-5c15a9e3fc5d",
                    quantity: "abc",
                    price: 2000
                }
                    ]
                });

                expect(response.status).to.eql(400)
                expect(response.body.status).to.eql("fail")
                expect(response.body.message).to.eql("\"items[0].quantity\" must be a number")
                
                var status = response.body.status
                var message = response.body.message
                console.log(status)
                console.log(message)
    })

    it("[-] Input Price without Number", async function(){ 
        const response = await request
        .post("sales") //method API & path
        .set("Authorization", `Bearer ${token}`) // GET BEARER TOKEN
        .send({
            officeId: "2f458834-0b21-466f-9f56-d35a8ed6f6ba",
            customerId: "811f547e-a24e-4f94-bfe1-b7ed7d11c03f",
            date: "2023-02-01",
            invoice: "INV001",
            amount: 2000,
            discount: 0,
            description: "Pembelian pertama",
            items : [
                {
                    productId: "681fa14f-8bed-4bee-a4a3-5c15a9e3fc5d",
                    quantity: 1,
                    price: "abz"
                }
                    ]
                });

                expect(response.status).to.eql(400)
                expect(response.body.status).to.eql("fail")
                expect(response.body.message).to.eql("\"items[0].price\" must be a number")
                
                var status = response.body.status
                var message = response.body.message
                console.log(status)
                console.log(message)
    })

})