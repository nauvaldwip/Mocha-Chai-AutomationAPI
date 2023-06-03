const request = require("supertest")("https://reqres.in/");
const expect = require("chai").expect;


describe ("[POST] Create User Reqres.in", function(){ //scenario testing
    it("[+] Success Register", async function(){ //test case 1
        const response = await request
        .post("api/users") //method API & path
        .send({
            name: "Nauval M. Dwiputra",
            job: "QA Engineer"});

    expect(response.status).to.eql(201)
    expect(response.body.name).to.eql("Nauval M. Dwiputra")
    expect(response.body.job).to.eql("QA Engineer")

    var name = response.body.name
    var job = response.body.job
    console.log(name)
    console.log(job)
    })

})

describe ("[POST] Register User Reqres.in", function(){ //scenario testing
    it("[+] Success Register", async function(){ //test case 1
        const response = await request
        .post("api/register") //method API & path
        .send({
            email: "eve.holt@reqres.in",
            password: "sanbercode"});

    expect(response.status).to.eql(200)
    expect(response.body.id).to.eql(4)

    var token = response.body.token
    console.log(token)
    })

    it("[-] Other than the specified user", async function(){ //test case 2
        const response = await request
        .post("api/register") //method API & path
        .send({
            email: "nauvalmd@gmail.com",
            password: "sanbercode"});

    expect(response.status).to.eql(400)
    expect(response.body.error).to.eql("Note: Only defined users succeed registration")

    var other_than_user = response.body.error
    console.log(other_than_user)
    })

    it("[-] Missing Password", async function(){ // test case 3
        const response = await request
        .post("api/register") //method API & path
        .send({
            email: "nauvalmd@gmail.com"});

    expect(response.status).to.eql(400)
    expect(response.body.error).to.eql("Missing password")

    var missing_password = response.body.error
    console.log(missing_password)
    })
})

describe ("[GET] List User Reqres.in", function(){ //scenario testing
    it("[+] View Page 1", async function(){ //test case 1
        const response = await request
        .get("api/users?=page=1") //method API & path

    expect(response.status).to.eql(200)

    var data = response.body.data
    console.log(data)
    })
})