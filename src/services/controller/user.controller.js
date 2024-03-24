
const get_user_details=async(req,res)=>{
try {
    
} catch (error) {
    return res.status(400).json({
        status:400,
        message:"Error in get_user_details  Error:" +error.message
    })
}
}



export {get_user_details}