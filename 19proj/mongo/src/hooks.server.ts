import { start_mongo } from "$db/mongo";

start_mongo().then(():void => {
    console.log('mongo reall started')
}).catch(err=> {console.log(err)})