import redis, { RedisClient, Callback } from 'redis'

class Cache {
    private client: RedisClient = redis.createClient();
    public set = (name: string, data: string, expireTime?: number, cb?: Callback<string>) => {
        if(expireTime == undefined) {
            return this.client.set(name, data, cb);
        }else {
            return this.client.setex(name, expireTime, data, cb);
        }
    }

    public get = (name: string, cb: Callback<string>) => {
        return this.client.get(name, cb);
    }

    public destroy = (...args: string[]) => {
        return this.client.del(args);
    }
}

export default new Cache()