import { Client } from 'pg';

export async function getClient() {
    const client = new Client("postgres://gyxxakvm:WP2mMia8dBWxqKVrK5SoW1Rt9krsjspz@rain.db.elephantsql.com/gyxxakvm");
    await client.connect();
    return client;
}