import mongoose from 'mongoose';
const con=async(db_url:string)=>{
await mongoose.connect(db_url).then(()=>{
  console.log("connection done")
}).catch((e)=>{
    console.log("error")
})
}
export default con;