
const Announcement = require("../models/announcementModel");
const catchAysnc = require("../utils/catchAysnc");
const factory=require( './FactoryHandler' );


//Todo:  ********* helper functuions ***********

// Optimize: get all 
exports.getAnnouncement=factory.getAll( Announcement );

// Optimize: get single data basaed on id
exports.getSingleAnnouncement=factory.getOne( Announcement );

// Optimize: Create  
exports.createAnnouncement=factory.createOne( Announcement );

// Optimize: update based on id 
exports.updateAnnouncement=factory.updateOne( Announcement )

// Optimize: delete  based on id 
exports.deleteAnnouncement=factory.deleteOne( Announcement );

exports.getWinnerHistoryByRange=catchAysnc(async (req,res,next)=>{
 let {start,end}=req.body;
 start=new Date(start);
 end=new Date(end);
 start=new Date(start.toUTCString());
 end=new Date(end.toUTCString());
 
 let result = await Announcement.find({
  $and:[{date:{$gt:start}},{date:{$lt:end}}]
 })
 if ( !result ) {
  return next( new AppError( `Could not find any winner within this range`, 404 ) );
}
res.status( 200 ).json( {
  status: 'success',
  data:result
} )
});



exports.getTodaysWinners=catchAysnc(async (req,res,next)=>{
  let cd=new Date();
  start=new Date( cd.getFullYear(), cd.getMonth(), cd.getDate() );
  start=new Date( start.toUTCString() );
  // new Date( year, monthIndex, day )
  // start= new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate()));
  let end=new Date( start.getTime()+( 24*60*60*1000 ) );
 let result = await Announcement.find({
   $and:[{date:{$gt:start}},{date:{$lt:end}}]
  })

 console.log(start,end);
  if ( !result ) {
   return next( new AppError( `Could not find any winner within this range`, 404 ) );
 }
 res.status( 200 ).json( {
   status: 'success',
   data:result
 } )
} );


function convertTZ( date, tzString ) {
  return new Date( ( typeof date==="string"? new Date( date ):date ).toLocaleString( "en-US", { timeZone: tzString } ) );
}


exports.sendWinner=catchAysnc( async ( req, res, next ) => {


  let cd=convertTZ(new Date(),'Asia/Kolkata');
  cd = new Date(cd.setHours(0,0,0,0));
  // start=new Date( cd.getFullYear(), cd.getMonth(), cd.getDate() );
  start=new Date( cd.toUTCString() );
  
  let end=new Date( start.getTime()+( 24*60*60*1000 ) );
  let TodayWinners=await Announcement.find( {
    $and: [ { date: { $gt: start } }, { date: { $lt: end } } ]
  } )


  let currTime=new Date( new Date().toUTCString() );
  console.log( "=>>>", currTime );

  const result=TodayWinners.filter( el => el.date<=currTime&&el.endTime>currTime );




  // console.log( start, end );
  if ( !result ) {
    return next( new AppError( `Could not find any winner within this range`, 404 ) );
  }




  res.status( 200 ).json( {
    status: 'success',
    data: result,
    counterFlag: result.length>0? false:true
  } )
} );

