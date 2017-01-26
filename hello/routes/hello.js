
/*
 * GET home page.
 */

exports.view = function(req, res){


    var name1 = req.params.date;
    var date = req.params.date;
    //console.log("THIS IS MY DATE:\n")
    //console.log(date);

    if(name1 === undefined) {
        name1 = 'World';
    }

  //  console.log("name is " + name1)
  
    res.render('index', {
  	 'name': name1, date,
    });
    


    //var mydate = req.param.date;
/*
    res.render('index', {
        'date': mydate,
            });
    */
};
