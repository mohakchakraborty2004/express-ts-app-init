// entry point file 
import  express  from "express";
import cors from "cors";
import Auth from "./middleware/AuthMiddleware";


const app = express();
const PORT = 3000;

app.use(cors())

app.use(express.json());

//enable the line below to apply authentication to all routes otherwise add explicity as shown in example.
//app.use(Auth)

//CRUD routes
app.get("/", (req : any, res: any) => {
    res.json({
        msg : "express is working fine."
    })
})

// with auth
app.get("/protected", Auth,  (req : any, res: any) => {
    res.json({
        msg : "express protected route is working fine."
    })
})

app.post("/post",  (req: any, res: any) =>{
    // code here
})

app.put("/put",  (req: any, res: any) =>{
    // code here
})

app.delete("/put",  (req: any, res: any) =>{
    // code here
})


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
