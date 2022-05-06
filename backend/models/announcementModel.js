const mongoose=require( 'mongoose' );
const validator=require( "validator" );  // 3rd part validation package



//TODO:  *********  Modal Schema ***********
const announcementSchema=new mongoose.Schema( {
  
  winners: [{
    num1:{
      required: [ true, "Please provide winner number" ],
      type:Number,
    },
    num2:{
      required: [ true, "Please provide winner number" ],
      type:Number,
    },
    num3:{
      required: [ true, "Please provide winner number" ],
      type:Number,
    },
    num4:{
      required: [ true, "Please provide winner number" ],
      type:Number,
    },
  }],

  date:{
      type: Date,
      required: [ true, "Please provide date and time" ],
  }




}, {
  // TO SEE VIRTUAL FIELDS 
  toJSON: {
    virtuals: true
  },
  toObject: {
    virtuals: true
  },

} );




//Todo: ********* Adding virtual properties ***********
// *** Whatever return will be set to virtual property value
announcementSchema.virtual( 'endTime' ).get( function () {
  const min=20;
  let end=new Date( this.date.getTime()+( min*60*1000 ) );
  return end;
} )





//Todo: ********* Document/query/aggregation middlewares ***********

// **** DOCUMENT MIDDLEWARE: runs before .save() and .create()
announcementSchema.pre( 'save', async function ( next ) {
  // HERE 'this' keyword === current document 
  next();

} )


// **** QUERRY MIDDLEWARE: runs before executing any find query
announcementSchema.pre( /^find/, async function ( next ) {
  // HERE 'this' keyword === querry Obj



  next();
} )


// **** AGGREGATION MIDDLEWARE: runs before executing Agrregation pipeline
announcementSchema.pre( 'aggregate', async function ( next ) {
    // HERE 'this' keyword === aggregation obj
// console.log("headline of the month")


  next();
} )




//TODO:  ********* instance methods of documents ***********


announcementSchema.methods.checkName=async function () {
  return ""; // return anything based on logic
}


const Announcement=mongoose.model( 'Announcement', announcementSchema );


module.exports=Announcement;