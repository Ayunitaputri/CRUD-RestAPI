import post from '../models/postModels.js';

const tambahData = async(req, res) => {
    try {
        const newPost = await post.create(req.body);
        //jika berhasil
        return res.status(201).json({
            status: 'success',
            data: newPost
        })
    } catch(error){
        res.status(400).json({
            status: 'fail',
            message: error.errors
        })
    }
}

//mengambil semua data menggunakan (.find)
const tampilData = async(req, res) => {
    try {
        const posts = await post.find();

        return res.status(200).json({
            status: "Success",
            data: posts
        })
    } catch(error){
        res.status(400).json({
            status: 'fail',
            message: error.message
        })
    }
}

const detailPost = async(req, res) => {
    try{
        const postDetail = await post.findById(req.params.id)

        return res.status(200).json({
            status: "Success",
            data: postDetail
        })
    } catch(error){
        res.status(400).json({
            status: 'faild',
            message: error.message
        })
    }
}

//update data
const updateData = async(req, res) => {
    try {
        //update data berdasarkan request body
        //cari dulu idnya baru lalu update data yang ada di body
        const editData = await post.findByIdAndUpdate(req.params.id, req.body, {
            //menampilkan data baru didalam responnya
            new: true,
            runValidators: true
        })
        
        return res.status(201).json({
            status: 'Success',
            data: editData
        })

    } catch(error){
        res.status(400).json({
            status: 'fail',
            message: error.message
        })
    }
}

const deleteData = async (req, res) => {
    try {
        //hapus berdasarkan idnya
        await post.findByIdAndDelete(req.params.id)

        return res.status(201).json({
            status: 'Success',
            message: "Data berhasil dihapus"
        })
    } catch(error){
        res.status(400).json({
            status: 'fail',
            message: error.message
        })
    }
}




export {
    tambahData,
    tampilData,
    detailPost,
    updateData,
    deleteData
}