import { MongoClient } from "mongodb";
import { MONGO_URL }    from '$env/static/private'
import { API_KEY } from '$env/static/private'

const client = new MongoClient(MONGO_URL)