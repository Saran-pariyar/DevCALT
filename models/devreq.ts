import mongoose, {Schema} from "mongoose";

const devReqSchema = new Schema(
    {
        id: Number,
        title: String,
        description: String,
        date_posted: String,

    },
    {
        timestamps: true,
      }
)

const DevReqCollection = mongoose.models.DevReqCollection || mongoose.model("DevReqCollection", devReqSchema);

export default DevReqCollection