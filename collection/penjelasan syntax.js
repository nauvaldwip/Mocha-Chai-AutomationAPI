//NAMA SCENARIO TESTING
describe ("[POST] Create User Reqres.in", function(){ 

    /* NAMA TEST CASE (n)
    it       = untuk run normal
    it.only  = untuk run pada bagian test case ini saja
    it.skip  = untuk men-skip bagian test case ini. 
    */
    it("[+] Success Register", async function(){ 

        const response = await request

        /* 
        Method API & Path URL
        .post    = untuk METHOD POST,
        .get     = untuk METHOD GET, 
        dll. 
        */
        .post("api/users")
        
        // Send Body (kalo di Postman, di bagian Body)
        .send({                                 
            name: "Nauval M. Dwiputra",
            job: "QA Engineer"});

    /*
    response.status -> membaca Status
    response.body.name -> membaca body, pada bagian Name (inputan harus sesuai dgn hasil HIT API di Postman)
    response.body.job -> membaca body, pada bagian Job (inputan harus sesuai dgn hasil HIT API di Postman)
    */
    expect(response.status).to.eql(201)         
    expect(response.body.name).to.eql("Nauval M. Dwiputra")
    expect(response.body.job).to.eql("QA Engineer")

    //memberikan variable berdasarkan body & respon field table nya.
    var name = response.body.name
    var job = response.body.job

    //memanggil variable untuk menampilkan output
    console.log(name)
    console.log(job)
    })

})
