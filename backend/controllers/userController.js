const User=require( "../models/userModel" );
const catchAsync=require( "../utils/catchAysnc" );
const AppError=require( "../utils/appError" );
const factory=require( './FactoryHandler' );


//Todo:  ************************** helper functuions ******************************

// FIX: get single users basaed on id
exports.getUser=factory.getOne( User);

// FIX: Create user basaed (By Admins)
exports.createUser=factory.createOne( User);
