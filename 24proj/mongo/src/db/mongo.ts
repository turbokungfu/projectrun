import {MongoClient} from 'mongodb';
import { VITE_MONGO_URL } from '../db/'

const client = new MongoClient(VITE_MONGO_URL)

export function start_mongo() {
	console.log('Starting mongo...');
	return client.connect();
}

export default client.db()