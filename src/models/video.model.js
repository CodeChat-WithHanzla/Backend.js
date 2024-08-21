import { Schema, model } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const videoSchema = Schema(
  {
    videoFile: {
      type: String, // Cloudinary url
      required: true,
    },
    thumbnail: {
      type: String, // Cloudinary url
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    views: {
      type: String,
      default: 0,
    },
    isPublic: {
      type: Boolean,
      default: true,
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
  },
  { timestamps: true },
);
videoSchema.plugin(mongooseAggregatePaginate)
const Video = model("Video", videoSchema);
