export class Emmiter {
    constructor() {
        this.listeners = {};
    }

    // Уведомляем слушателей, если они есть
    // table.emit('table:select', { a: 1 })
    emit(event, ...args) {
        if (!Array.isArray(this.listeners[event])) {
            return false;
        }
        this.listeners[event].forEach(listener => {
            listener(...args);
        });
        return true;
    }

    // Подписываемся на уведомления
    // Добавляем нового слушателя
    // formula.subscribe('table:select', () => {})
    subscribe(event, fn) {
        this.listeners[event] = this.listeners[event] || [];
        this.listeners[event].push(fn);
        return () => {
            this.listeners[event] =
                this.listeners[event].filter(listener => listener !== fn);
        };
    }
}


// Example code
/*
const emmiter = new Emmiter();
emmiter.subscribe('test:event', data => console.log('sub', data));
emmiter.emit('test:event', 42);
*/