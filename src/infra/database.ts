import mongoose from "mongoose"

export function connect() {
  try {
    mongoose.connect(
      'mongodb+srv://herocode:PtpCTDTmfFxsPMrx@cluster0.s3zqfm4.mongodb.net/hero-tickets'
    )
    console.log('Connect database success')
  } catch (error) {
    console.log("~ file: database.ts:5 ~ connect ~ error:", error)
  }
}