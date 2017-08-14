import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'stats',
    templateUrl: './stats.component.html',
    styleUrls: ['./stats.component.css']
})
/** stats component*/
export class StatsComponent implements OnInit
{
    /** stats ctor */
    constructor() { }

    /** Called by Angular after stats component initialized */
    ngOnInit(): void { }
}