export const Util = {

    createRandomId() {

        return `${ Date.now() }:${ Math.random() * 1000000000000000000 }`;

    }

};