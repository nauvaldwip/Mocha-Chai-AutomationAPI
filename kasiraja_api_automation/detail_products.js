const request = require("supertest")("https://kasir-api.belajarqa.com/");
const expect = require("chai").expect;
var token = {};
var productID = {};

describe ("", function(){ //GET TOKEN

    it("Get Token", async function(){
        const response = await request
        .post("authentications") //method API & path
        .send({
            email : "sample@example.com",
            password: "123adsfadf@"});
    
        token = response.body.data.accessToken
        console.log(token)
        })
    })

describe ("", function(){ //GET PRODUCT ID

    it("Get Product ID", async function(){
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

            var productID = response.body.data.productId
            console.log(productID)
        })
    })

    
describe ("[GET] DETAIL PRODUCTS", function(){ //scenario testing

    
    it("[+] Success GET Data", async function(){ 
        const response = await request
        .get("products", `${productID}`) //method API, PATH, & GET PRODUCT ID
        .set("Authorization", `Bearer ${token}`) // GET BEARER TOKEN
        .send({
            category_id : "811f547e-a24e-4f94-bfe1-b7ed7d11c03f",
            code        : "A314ASDDFIER3432",
            name        : "Malkis Roma",
            price       : "3500",
            cost        : "3000",
            stock       : "5"});

            expect(response.status).to.eql(200)
            expect(response.body.status).to.eql("success")

            var status = response.body.status
            /*var code = response.body.data.product.code
            var name = response.body.data.product.name
            var price = response.body.data.product.price
            var cost = response.body.data.product.cost
            var stock = response.body.data.product.stock*/

            console.log(status)
            /*console.log(code)
            console.log(name)
            console.log(price)
            console.log(cost)
            console.log(stock)*/

    })

})