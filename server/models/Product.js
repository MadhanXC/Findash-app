import mongoose from "mongoose"
// import {loadType} from "mongoose-currency"

const Schema = mongoose.Schema;
// loadType(mongoose)


// test

const ProductSchema = new Schema(
{
    price:{
        type: Number,
        curency: "USD",
        get: (v)=> v/100
    },
    expense:{
        type: Number,
        curency: "USD",
        get: (v)=> v/100
    },
    transactions: [{
        type: Number,
       ref: "Transaction",
        
    }],
   
   
},
{ timestamps: true, toJSON:{getters: true}}
)

const Product= mongoose.model("Product", ProductSchema)

export default Product;