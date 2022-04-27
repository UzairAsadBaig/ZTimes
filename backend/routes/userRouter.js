const express=require( "express" );
const {createUser,getUser, getAllUser}=require( `./../controllers/userController` );
const {logIn,protect,restrictTo}=require( "../controllers/authController" );
const userRouter=express.Router();


//TODO:                     ************** Routes ***************
userRouter.post( '/login', logIn );
userRouter.post( '/createuser', createUser );
userRouter.route( "/:id" )
    .get( getUser )


module.exports=userRouter;