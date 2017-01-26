
/*
 * GET home page.
 */

exports.view = function(req, res){


    var name1 = req.params.userName

    if(name1 === undefined) {
        name1 = 'World';
    }

    console.log("name is " + name1)
    res.render('index', {
  	 'name': name1,
    });
};
