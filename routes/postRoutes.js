import express from "express";
import {tambahData, tampilData, detailPost, updateData, deleteData} from './../controllers/postControllers.js'

const router = express.Router();
//membuat endpoint

//create data
router.post('/post', tambahData )

//read data
router.get('/post',tampilData ) ; //menampilkan semua data
router.get('/post/:id', detailPost) //menampilkan data berdasarkan id

//update data
router.put('/post/:id', updateData);

//delete data
router.delete('/post/:id', deleteData);






export default router;
