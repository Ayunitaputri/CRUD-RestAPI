import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    //judul dari postingan
    title: {
        type: String,
        required: true //harus diisi
    },
    //isi dari postingan
    body: {
        type: String,
        required: true
    }
}, {
    //menyimpan kejadian kapan pembuatan data dibuat dan diupdate 
    timestamps: true
})

const post = mongoose.model('post', postSchema);

export default post;