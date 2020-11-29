import { ExcelComponent } from '@core/ExcelComponent';
import { createTable } from './table.tempate';

export class Table extends ExcelComponent {
    static className = 'excel__table';

    constructor($root) {
        super($root, {
            listeners: ['mousedown', 'mousemove'],
        });
    }

    toHTML() {
        return createTable();
    }

    onMousedown(event) {
        const { resize } = event.target.dataset;

        if (resize === 'col') {
            const column = event.target.parentNode;
            const rect = column.getBoundingClientRect();
            this.onMousemove(event);
        }
    }

    onMousemove(event) {
        const { resize } = event.target.dataset;

        if (resize === 'col') {
            const column = event.target.parentNode;
            const rect = column.getBoundingClientRect();
            column.style.width = `${event.clientX - rect.x + 4}px`;
        }
    }
}