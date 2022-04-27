const User=require( "../models/userModel" );
const factory=require( './FactoryHandler' );


//Todo:  ************************** helper functuions ******************************

// FIX: get single users basaed on id
exports.getUser=factory.getOne( User);

// FIX: Create user basaed (By Admins)
exports.createUser=factory.createOne( User);

// exports.getAllUser=factory.getAll( User);