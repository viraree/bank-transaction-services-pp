let express = require("express"),
    router = express.Router();
const axios = require('axios');

// https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_0uhtqbA3qOVKLRlSFXU7p9gJJfqLIBVf45bKK3pA&currencies=USD%2CCHF%2CCAD&base_currency=EUR

// GET 
router.get("/", async (req, res_rest, next) => {
   //base_currency=EUR

    var response;
   await axios.get('https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_0uhtqbA3qOVKLRlSFXU7p9gJJfqLIBVf45bKK3pA&currencies=USD%2CCAD%2CCHF&base_currency=EUR')
  .then(res => {
    const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
    console.log('Status Code:', res.status);
    console.log('Date in Response header:', headerDate);

    const curr_vals = res.data;
    console.log(JSON.stringify(curr_vals.data)); 
    console.log(JSON.stringify(curr_vals.data["USD"])); 
    
    response=curr_vals;
    res_rest.send(response);

  })
  .catch(err => {
    console.log('Error: ', err.message);
  });

    
});

function renameKey(obj, oldKey, newKey) {
    obj[newKey] = obj[oldKey];
    delete obj[oldKey];
}

// POST
router.post("/", async (req,res_rest, next) => {
   
    //https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_0uhtqbA3qOVKLRlSFXU7p9gJJfqLIBVf45bKK3pA&currencies=USD&base_currency=EUR
    let query=req.body;
    console.log(JSON.stringify(query));
    var base=query.base;
    var target=query.target;
    console.log(target);

   // res_rest.send("post");
 
    await axios.get('https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_0uhtqbA3qOVKLRlSFXU7p9gJJfqLIBVf45bKK3pA&currencies=USD&base_currency=EUR')
  .then(res => {
  
    const curr_vals = res.data;
    console.log(JSON.stringify(curr_vals.data)); 
    console.log(JSON.stringify(curr_vals.data[target])); 
    
    result=curr_vals.data[target]; 
    resultObj={"rate":result};
    res_rest.send(resultObj);

  })
  .catch(
  
   err => {
    console.log('Error: ', err.message);
  }

  );

  
    

   // res.send("post");
});

// PUT 
router.put("/", async (req, res, next) => {
   /* let task = req.body;
    const database = await db('todo');
    const result = await database.collection('tasks').updateOne(
        { "_id": ObjectId(task.id) },
        { $set: task }
    );
    res.send(result);*/
    res.send("put");
});

// DELETE
router.delete("/", async (req, res, next) => {
   /* const id = req.query.id;
    const database = await db('todo');
    const result = await database.collection('tasks').deleteOne(
        { "_id": ObjectId(id) }
    );
    res.send(result);*/
    res.send("delete");
});

module.exports = router;