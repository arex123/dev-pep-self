

5: started mongodb(nosql database)

    how to use mongoose:
        -> npm install mongoose

        -> import mongoose, 
                const mongoose = require('mongoose')

        -> connect with mongoose:

                const db_link=url;
                mongoose.connect(db_link)
                .then(function(db){
                    
                    console.log('db connected');
                })
                .catch(function(err){
                    console.log(err);
                })

        -> create schema

            const userSchema=mongoose.Schema({
                            name:{
                                type:String,
                                required:true
                            },
                            email:{
                                type:String,
                                required:true,
                                unique:true
                            }
                        })


        -> create model

                const userModel = mongoose.model('userModel',userSchema)

        -> now add user , delete user or update user in db, do anything with the database


6: how to do CRUD operation on mongodb, 
    go to https://mongoosejs.com/docs/queries.html



7: mongoose hook: theese are basically some middleware to do some operations on data
    read about it here: https://easyontheweb.com/pre-and-post-hooks-in-mongoose/


    these are of two types: pre and post
        pre() : it gets called when we got some data  , we can check this data by 'this' obj
        post() : it gets called when we uploaded that data in database , we can find that new data/obj by 'doc' obj


8: for adding the validation of email or other things realated to schema 

        check: 
        https://www.npmjs.com/package/email-validator
        https://www.npmjs.com/package/validator


        * to check if email is valid or nor
            email:{
            type:String,
            required:true,
            unique:true,
            validate:function(){
                return emailvalidate.validate(this.email)
                    }
                }

        * for checking psd and confim psd are same or not

        confirmPassword:{
            type:String,
            required:true,
            minLength:8,
            validate:function(){
                return this.confirmPassword==this.password
                    }
                }


