module.exports = {
  bind : function (app, assetPath) {
    app.get('/', function (req, res) {
      res.render('index',
                {'assetPath' : assetPath});
    });

    /* Example pages */

    app.get('/examples/hello-world', function (req, res) {
      res.render('examples/hello-world', {'message' : 'Hello world'});
    });
    app.get('/examples/inheritance', function (req, res) {
      res.render('examples/inheritance/page-level', {'message' : 'Hello world'});
    });

    app.get('/examples/alpha', function (req, res) {
      res.render('examples/alpha/alpha', {'assetPath' : assetPath });
    });

    app.get('/start', function(req, res){
    res.render('start', {});
    });

    app.get('/question01', function(req, res){
    res.render('question01', {});
    });

    app.post('/question01', function(req, res){
    var initial_choice = req.body["radio-certificate-select"]
    req.session.initial_choice = initial_choice
    if (req.session.initial_choice === "compliment"){
    res.render('question04b', {});
    } else if (req.session.initial_choice === "service-complaint"){
    res.render('question04c', {});
    } else if (req.session.initial_choice === "other"){
    res.render('question04e', {});
    } else {
    res.render('question02', {});
    }    
    });

    app.post('/question02', function(req, res){
    console.log(req.body)
    var cert_type = req.body["certificate-type"];
    if (cert_type === "Birth" || cert_type === "Death"|| cert_type === "Adoption") {
    res.render('question03b', {});
    } else {
    res.render('question03a', {});
    }
    });

    app.post('/question03a', function(req, res){
    console.log(req.session)
    if (req.session.initial_choice === "wrong-certificate-received") {
    res.render('question04a', {});
    } else if (req.session.initial_choice === "compliment"){
    res.render('question05', {});
    } else if (req.session.initial_choice === "service-complaint"){
    res.render('question05', {});
    } else if (req.session.initial_choice === "refund-query"){
    res.render('question04d', {});
    } else if (req.session.initial_choice === "other"){
    res.render('question05', {});
    } else {
    res.render('question04', {});
    }
    });

    app.post('/question03b', function(req, res){
    console.log(req.session)
    if (req.session.initial_choice === "wrong-certificate-received") {
    res.render('question04a', {});
    } else if (req.session.initial_choice === "compliment"){
    res.render('question05', {});
    } else if (req.session.initial_choice === "service-complaint"){
    res.render('question05', {});
    } else if (req.session.initial_choice === "refund-query"){
    res.render('question04d', {});
    } else if (req.session.initial_choice === "other"){
    res.render('question05', {});
    } else {
    res.render('question04', {});
    }
    });


    app.post('/question04e', function(req, res){
    console.log(req.body)
    var other_order = req.body["other-order"];
    if (other_order === "Yes" ) {
    res.render('question02', {});
    } else {
    res.render('question08', {});
    }
    });


    app.post('/question04b', function(req, res){
    console.log(req.body)
    var compliment_order = req.body["compliment-order"];
    if (compliment_order === "Yes" ) {
    res.render('question02', {});
    } else {
    res.render('question08', {});
    }
    });


    app.post('/question04c', function(req, res){
    console.log(req.body)
    var complaint_order = req.body["complaint-order"];
    if (complaint_order === "Yes" ) {
    res.render('question02', {});
    } else {
    res.render('question08', {});
    }
    });

  }
};
