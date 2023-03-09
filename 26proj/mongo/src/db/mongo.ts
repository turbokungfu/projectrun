import { MongoClient } from "mongodb";
import { MONGO_URL }    from '../../home/michael/git-review/projectrun/26proj/mongo/.env'
import { API_KEY } from ''

const client = new MongoClient(MONGO_URL, API_KEY)