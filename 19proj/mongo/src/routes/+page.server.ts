import { tutorials } from "$db/tutorials";
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async function (){
    const data = await tutorials.find({}).toArray();
    console.log('data', data.length)
    return{
            tutorials:data
    }
}