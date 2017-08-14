import { Component, OnInit, ViewChild } from '@angular/core';
import { fadeInOut } from '../../services/animations';
import { StatsComponent } from '../../components/controls/stats.component';
import { ParkComponent } from '../../components/city/park.component';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
    selector: 'city',
    templateUrl: './city.component.html',
    styleUrls: ['./city.component.css'],
    animations: [fadeInOut]
    
})
/** city component*/
export class CityComponent implements OnInit
{

    @ViewChild('parkModal')
    parkModal: ModalDirective;
    /** city ctor */
    constructor() { }

    /** Called by Angular after city component initialized */
    ngOnInit(): void { }
}