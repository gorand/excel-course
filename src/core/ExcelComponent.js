import { DomListener } from '@core/DomListener';

export class ExcelComponent extends DomListener {
    constructor($root, options = {}) {
        super($root, options.listeners);
        this.name = options.name || '';
        this.emmiter = options.emmiter;
        this.unsubscribers = [];

        this.prepare();
    }

    // Настраиваем наш компонент до init
    prepare() {}

    // Возвращает шаблон компонента
    toHTML() {
        return '';
    }

    // Уведомляем слушателей про событие event
    $emit(event, ...args) {
        this.emmiter.emit(event, ...args);
    }

    $on(event, fn) {
        const unsub = this.emmiter.subscribe(event, fn);
        this.unsubscribers.push(unsub);
    }

    // Инициализируем компонент, добавляем DOM-слушателей
    init() {
        this.initDOMListeners();
    }

    // Удаляем компонент, чисти DOM-слушателей
    destroy() {
        this.removeDOMListeners();
        this.unsubscribers.forEach(unsub => unsub());
    }
}