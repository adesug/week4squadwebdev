require('dotenv').config({});

const express = require ('express');
const app = express()
// const port = process.env.PORT || 3001 


const mainRoutes = require ('./src/routes')

app.use(express.urlencoded ({extended :false}));
app.use('/', mainRoutes)

// app.listen( port, () => {
//     console.log("port jalan pada " + port);
// })
app.listen(process.env.PORT || 3001, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });