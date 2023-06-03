const request = require("supertest")("https://kasir-api.belajarqa.com/");
const expect = require("chai").expect;


describe ("[POST] Auth - Login Kasiraja", function(){ //scenario testing
    it("[+] Success Login", async function(){ //test case 1
        const response = await request
        .post("authentications") //method API & path
        .send({
            email : "sample@example.com",
            password: "123adsfadf@"});

    expect(response.status).to.eql(201)
    expect(response.body.message).to.eql("Authentication berhasil ditambahkan")

    var token = response.body.data.accessToken
    var message = response.body.message
    console.log(token)
    console.log(message)
    })

    it("[-] Invalid Login", async function(){ //test case 1
        const response = await request
        .post("authentications") //method API & path
        .send({
            email : "sample@example.com",
            password: "WRONG_PASSWORD"});

    expect(response.status).to.eql(401)
    expect(response.body.status).to.eql("fail")
    expect(response.body.message).to.eql("Kredensial yang Anda berikan salah")

    var status = response.body.status
    var message = response.body.message
    console.log(status)
    console.log(message)

    })

    it("[-] Input Email without Email Format", async function(){ //test case 1
        const response = await request
        .post("authentications") //method API & path
        .send({
            email : "nauvalmdsaja",
            password: "123adsfadf@"});

    expect(response.status).to.eql(400)
    expect(response.body.status).to.eql("fail")
    expect(response.body.message).to.eql("\"email\" must be a valid email")

    var status = response.body.status
    var message = response.body.message
    console.log(status)
    console.log(message)

    })

    it("[-] Empty field Email", async function(){ //test case 1
        const response = await request
        .post("authentications") //method API & path
        .send({
            email : "",
            password: "123adsfadf@"});

    expect(response.status).to.eql(400)
    expect(response.body.status).to.eql("fail")
    expect(response.body.message).to.eql("\"email\" is not allowed to be empty")

    var status = response.body.status
    var message = response.body.message
    console.log(status)
    console.log(message)

    })

    it("[-] Empty field Password", async function(){ //test case 1
        const response = await request
        .post("authentications") //method API & path
        .send({
            email : "sample@example.com",
            password: ""});

    expect(response.status).to.eql(400)
    expect(response.body.status).to.eql("fail")
    expect(response.body.message).to.eql("\"password\" is not allowed to be empty")

    var status = response.body.status
    var message = response.body.message
    console.log(status)
    console.log(message)

    })
})