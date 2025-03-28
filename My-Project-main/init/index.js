const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

main().then(()=>{console.log("Connection successfull.")})
.catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
}

const initDB = async ()=>{
    await Listing.deleteMany({});
    initData.data=initData.data.map((obj)=>({...obj,owner : "66a22a0c416e9ad73a074223"}));
    await Listing.insertMany(initData.data);
    console.log("Data was initialized");
}

initDB();