import { capitalize } from '@core/utils';

export class DomListener {
    constructor($root, listeners = []) {
        if (!$root) {
            throw Error('No $root provider for DomListener');
        }

        this.$root = $root;
        this.listeners = listeners;
    }

    initDOMListeners() {
        this.listeners.forEach(listener => {
            const method = getMethodName(listener);
            if (!this[method]) {
                throw new Error(`Method ${method} is not implemented in ${this.name || ''} Component`);
            }
            // Обёртка над addEventListener
            this[method] = this[method].bind(this);
            this.$root.on(listener, this[method]);
        });
    }

    removeDOMListeners() {
        this.listeners.forEach(listener => {
            const method = getMethodName(listener);
            // Обёртка над removeEventListener
            this.$root.off(listener, this[method]);
        });
    }
}

function getMethodName(eventName) {
    return 'on' + capitalize(eventName);
}