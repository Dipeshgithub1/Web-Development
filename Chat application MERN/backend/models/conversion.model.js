import mongoose, { Types } from "mongoose";

const conversionSchema = new mongoose.Schema({
participants:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"='User"
    }
],
message:[
{
  type:mongoose.Schema.Types.ObjectId,
  ref:"='Message",
  default:[],
},
],

},
{timestamps:true}
);

const conversion = mongoose.model("Conversion",conversionSchema);

export default conversion;


