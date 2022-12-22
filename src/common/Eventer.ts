export class Eventer {

    private eventListenerMap = new Map<string, Array<Function>>();

    public on( eventName: string, eventListener: Function ): this {

        let eventListeners = this.eventListenerMap.get( eventName );

        if( eventListeners === undefined ){

            eventListeners = new Array<Function>();
            this.eventListenerMap.set( eventName, eventListeners );

        }

        eventListeners.push( eventListener );
        return this;

    }

    public off( eventName?: string, eventListener?: Function ): this {

        if( eventName === undefined ){

            this.eventListenerMap.clear();
            return this;

        }


        const eventListeners = this.eventListenerMap.get( eventName );
        if( eventListeners === undefined ){
            return this;
        }

        if( eventListener === undefined ){

            eventListeners.length = 0;
            return this;

        }


        const index = eventListeners.indexOf( eventListener );
        if( index < 0 ){
            return this;
        }


        eventListeners.splice( index, 1 );
        return this;

    }

    public trigger( eventName: string, ...args: Array<any> ): this {

        const eventListeners = this.eventListenerMap.get( eventName );
        if( eventListeners === undefined ){
            return this;
        }

        return this;

    }

};