const mongoose=require( 'mongoose' );
const validator=require( "validator" );
const bcrypt=require( 'bcryptjs' );
const crypto=require( 'crypto' );

//Optimize:  ************************** User Modal Schema ******************************
const userSchema=new mongoose.Schema( {
    name: {
        type: String,
        required: [ true, "Enter name!" ],
        trim: true
    },

    email: { // Identifying users by email
        type: String,
        unique: [ true, "User with this email already exist" ],
        required: [ true, "Please provide your email" ],
        trim: true,
        lowercase: true,
        validate: [ validator.isEmail, "Please provide valid email" ]

    },

    role: {
        type: String,
        enum: [ "user", "admin", "employee" ],
        default: "user"
    },
    active: {
        type: Boolean,
        default: true
    },
    password: {
        type: String,
        required: [ true, 'Please provide your password' ],
        minLength: [ 8, "Password must be of atleast 8 characters long" ],
        select: false
    },

    passwordConfirm: {
        type: String,
        required: [ true, 'Please confirm your password' ],
        validate: {
            validator: function ( val ) {
                return val===this.password
            },
            message: "Password and Confirm-password are not same!"
        }
    },


} ,
{
    // TO SEE VIRTUAL FIELDS 
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    },

});


// userSchema.virtual( 'requestApprovalInformation', {
//     ref: "RequestApproval",
//     localField: "_id",
//     foreignField: "user"
// } )


//Todo: ************************** Document/query/aggregation middlewares ******************************
userSchema.pre( 'save', async function ( next ) {
    // Function runs only when we are modifying password field or on creating new user
    if ( !this.isModified( 'password' ) ) return next();
    // Encrypting the password before saving it to database 
    this.password=await bcrypt.hash( this.password, 12 );
    this.passwordConfirm=undefined;
    next();
} )

userSchema.pre( 'save', function ( next ) {
    if ( !this.isModified( 'password' )||this.isNew ) return next();

    this.changePasswordAt=Date.now()-1000;
    next()
} )

userSchema.pre( /^find/, function ( next ) {
    // this.find( {
    //     active: true
    // } );
    next()
} )



//Fix:  ************************** instance methods of documents ******************************

//Fix:Function to check password entered by user and encrypted password in db are same
userSchema.methods.correctPassword=async function ( userPassword, encryptedPassword ) {
    return await bcrypt.compare( userPassword, encryptedPassword );
}

//Fix:Function to check if user has changed the password after sign in is generated
userSchema.methods.changePasswordAfter=function ( jwtTimestamp ) {
    if ( this.changePasswordAt ) {
        const changePasswordTimestamp=parseInt( this.changePasswordAt/1000, 10 );
        return jwtTimestamp<changePasswordTimestamp //200<300
    }
    return false;

}

//Fix:Funtion to create reset-token and put that in databse of particular user
userSchema.methods.createResetToken=function () {

    const resetToken=crypto.randomBytes( 32 ).toString( 'hex' );

    this.passwordResetToken=crypto.createHash( 'sha256' ).update( resetToken ).digest( 'hex' );
    this.passwordResetTokenExpires=Date.now()+( 10*60*1000 );
    // console.log( "the encrypted resetToken in db 😎😎: ", this.passwordResetToken )

    return resetToken;
}

const User=mongoose.model( 'User', userSchema );


module.exports=User;