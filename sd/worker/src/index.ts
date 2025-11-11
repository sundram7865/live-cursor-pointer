import {createClient} from 'redis'

const client = createClient();


async function main(){
    await client.connect();
    while(1){
     const response= await client.RPOP('submissions');
     // runs the code 
     console.log(response);
    }
}
 

main();
