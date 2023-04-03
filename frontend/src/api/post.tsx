import instance from "api";
const Post=async(url:string,content:any)=>{
    return await instance.post(url,
    content, {
        headers: {
          'Content-Type': 'application/json'
        }
    }
).then((data)=>{
  console.log(data)
})
}
export default Post