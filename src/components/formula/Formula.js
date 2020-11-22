import { ExcelComponent } from '@core/ExcelComponent';

export class Formula extends ExcelComponent {
    static className = 'excel__formula';

    constructor($root) {
        super($root, {
            name: 'Formula',
            listeners: ['input', 'click'],
        });
    }

    toHTML() {
        return `<div class="excel__formula-info">fx</div>
        <div class="excel__formula-field" contenteditable spellcheck="false"></div>`;
    }

    onInput(event) {
        console.log('Formula onInput', this, event);
    }

    onClick(event) { 
        console.log('Formula onclick');
    }
}