import {MongoClient} from 'mongodb';
import * as dotenv from 'dotenv';
import { MONGO_URL } from '$env/static/.env'

dotenv.config();

export const GET = async () => {
    console.log('=====================')
    console.log(private_env.SECRET_VARIABLE)
    console.log(public_env.PUBLIC_VARIABLE)
    console.log('=====================')
    return {}
  }

const client = new MongoClient(MONGO_URL)

export function start_mongo() {
	console.log('Starting mongo...');
	return client.connect();
}

export default client.db()