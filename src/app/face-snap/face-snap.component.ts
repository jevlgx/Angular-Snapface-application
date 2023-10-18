import { Component, OnInit, Input } from '@angular/core';
import { FaceSnapp } from '../models/face-snap.models';
import { FaceSnapServices } from '../services/face-snap-services';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent{
    @Input() faceSnap!: FaceSnapp;
    snapButton = "On snap";
    initialSnap = this.faceSnap;

    constructor(private faceSnapServices: FaceSnapServices, private router: Router) {
    }
    
    snapFaceSnapById() {
        return this.faceSnapServices.handleSnap(this);
    }

    onViewFaceSnap() {
        this.router.navigateByUrl('facesnap/' + this.faceSnap.id);
    }
}