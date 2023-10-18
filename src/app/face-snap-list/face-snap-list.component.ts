import { Component, OnInit } from '@angular/core';
import { FaceSnapp } from '../models/face-snap.models';
import { FaceSnapServices } from '../services/face-snap-services';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit{
    faceSnaps!: FaceSnapp[];

    constructor(private faceSnapServices: FaceSnapServices) {
    }

    ngOnInit() {
        this.faceSnaps = this.faceSnapServices.getAllSnapps();
    }
}