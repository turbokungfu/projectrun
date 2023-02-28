import {MongoClient} from 'mongodb';
import { env } from '../db/.env'

const client = new MongoClient(VITE_MONGO_URL)

export function start_mongo() {
	console.log('Starting mongo...');
	return client.connect();
}

export default client.db()