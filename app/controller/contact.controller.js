exports.create = (req,res)=>{
    res.send({Message: "create handler"});
};
exports.findAll = (req,res)=>{
     res.send({Message: "FindAll handler"});
};
exports.findOne = (req,res)=>{
 res.send({Message: "findOne handler"});
};
exports.update = (req,res)=>{
 res.send({Message: "update handler"});
};
exports.delete = (req,res)=>{
  res.send({Message: "delete handler"});
};
exports.deleteAll = (req,res)=>{
 res.send({Message: "deleteAll handler"});
};
exports.FindAllFavorite = (req,res)=>{
 res.send({Message: "FindAllFavorite handler"});
};
