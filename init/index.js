const monoogse=require("mongoose");
const initData=require("./data");
const Listing=require("../models/listing");

const MONGO_URL="mongodb://127.0.0.1:27017/wonderlust";

main()
.then(()=>{
    console.log("connected to DB")
})
.catch((err)=>{
    console.log(err);
});

async function main(){
    await monoogse.connect(MONGO_URL);
} 

const initDb=async()=>{
    await Listing.deleteMany({});
    initData.data=initData.data.map((obj)=> 
    ({...obj, 
    owner:"6553b5740805e91d594b757d",
}));
    await Listing.insertMany(initData.data);
    console.log("successfully update")
};

initDb();