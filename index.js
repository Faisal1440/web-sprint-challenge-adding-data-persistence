const server = require("./server");
 const port = process.env.PORT || 8000;
 server.listen(port, () => {console.log(`SERVER LIVE ON ${port}`)
 });