import mongoose from "mongoose"

export function connect() {
  try {
    mongoose.connect(
      'mongodb+srv://teste01:TNoN9stgnWXbYDtB@cluster0.yip8n7z.mongodb.net/hero-tickets'
    )
  } catch (error) {
    console.log("🚀 ~ file: database.ts:5 ~ connect ~ error:", error)
  }
}