const {Constacs} = require("../constance");
const errorHandeler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.status(statusCode);

   switch(statusCode){
    case Constacs.VALIDATION_ERROR :
    res.json({
      message: err.message,
      stack: process.env.NODE_ENV === 'production' ? undefined : err.stack,
    });
    break;
  
    case Constacs.UNAURIORIZED :
    res.json({
      title : "Not Found",
      message: err.message,
      stack: process.env.NODE_ENV === 'production' ? undefined : err.stack,
    });

    break;

    case Constacs.FORBIDDEN:
    res.json({
      title : "Not Validate",
      message: err.message,
      stack: process.env.NODE_ENV === 'production' ? undefined : err.stack,
    });
    break;


    case Constacs.FORBIDDEN:
      res.json({
        title : "Not Validate",
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? undefined : err.stack,
      });
      break;

      case Constacs.NOT_FOUND :res.json({
        title : "not fround",
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? undefined : err.stack,
      });
      break;


 default :
 console.log("No error, All good");
 break;
  }
  
};








                            
                           
                       
          module.exports = errorHandeler;

