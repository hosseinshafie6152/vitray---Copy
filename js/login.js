const express = require('express');
const app = express();

app.get('/login' , (req , res)=>{
    res.send("<form> <input type='text' placeholder='name'> <input type='submit'> </form>")
});

app.listen(3000 , console.log('form sended.'));