1: methods for basic routing using get/post/delete/patch 

2: methodsRouting , to minimize the structure 

        What does it mean to mount a file system?
        Before you can access the files on a file system, you need to mount the file system. Mounting a file system attaches that file system to a directory (mount point) and makes it available to the system. The root (/) file system is always mounted. 


3: how to send data from frontend form to backend using axios
        ->check out food app



4: middleware: these are the functions which takes place when reqest is made to server ans before sending response, and they have access to request and also response object

        benefits:  error handling

        how to use middleware:

            function(req,res,next){
                //process

                next(); //to call next middle ware function
            }

in beetween (req -- middleware -- res)

so like app.use(express.json) is a global middleware and is called every time when request is made

, so next() is a part of middleware which tells to go to next function after executing the current middleware , with the help of next() that object (req/res parameter) is also passed to other middleware which is given at the time of request fron client side

->  If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.


Middleware functions can perform the following tasks:
        -->> Execute any code.

        -->> Make changes to the request and the response objects.

        -->> End the request-response cycle.

        -->> Call the next middleware in the stack.


<img src="https://miro.medium.com/max/1400/1*ptNjzuT0m2BQ9YpQTVwVLg.png">

    Types of express middleware:

    ->>  Application level middleware app.use
    ->>  Router level middleware router.use
    ->>  Built-in middleware express.static,express.json,
    ->>  express.urlencoded
    ->>  Error handling middleware app.use(err,req,res,next)
    ->>  Thirdparty middleware bodyparser,cookieparser