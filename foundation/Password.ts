import Bcrypt from 'bcrypt';
import Sha1 from 'sha1';
import Md5 from 'md5';

type passwordType      = 'bcrypt' | 'sha1'   | 'md5'
type passwordCanDecode = 'base64'
type endecver          = 'encode' | 'decode' | 'verify' // encode, decode, verify
type bcryptCan         = 'verify' | 'encode'
class Password {
    public encode = (type: passwordType, plainText: any) => {
        return this[type]("encode", plainText);
    }

    public decode = (type: passwordCanDecode, plainText: any, hash: any) => {
        return this[type]("decode", plainText, hash)
    }

    public verify = (type: passwordType, plainText: any, hash: any) => {
        return this[type]('verify', plainText, hash);
    }

    private bcrypt = (type: bcryptCan, plainText: any, hash?: any) => {
        if(type == 'encode') {
            const salt = Bcrypt.genSaltSync(10);
            return Bcrypt.hashSync(plainText, salt)
        }else if(type == 'verify') {
            return Bcrypt.compareSync(plainText, hash)
        }else{
            throw new Error('Bcrypt just can verify and encode!')
            process.exit();
        }
    }

    private sha1 = (type: endecver, plainText: any, hash?: any) => {
        if(type == 'encode') {
            return Sha1(plainText)
        }else if(type == 'verify') {
            return Sha1(plainText) == hash;
        }else{
            throw new Error('Sha1 just can verify and encode!')
            process.exit();
        }
    }

    private md5 = (type: endecver, plainText: any, hash?: any) => {

    }

    private base64 = (type: endecver, plainText: any, hash?: any) => {

    }
}

export default new Password();