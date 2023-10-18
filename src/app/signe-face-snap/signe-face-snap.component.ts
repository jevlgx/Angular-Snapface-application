import { Component, Input, OnInit } from '@angular/core';
import { FaceSnapp } from '../models/face-snap.models';
import { FaceSnapServices } from '../services/face-snap-services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signe-face-snap',
  templateUrl: './signe-face-snap.component.html',
  styleUrls: ['./signe-face-snap.component.scss']
})
export class SigneFaceSnapComponent implements OnInit{
    faceSnap!: FaceSnapp;
    faceSnapId!: number;
    snapButton = "On snap";

    constructor(private faceSnapServices: FaceSnapServices, private activatedRoute: ActivatedRoute) {
        
    }

    ngOnInit() {
        this.faceSnapId = +this.activatedRoute.snapshot.params['id'];
        this.faceSnap = this.faceSnapServices.getSnapById(this.faceSnapId);
    }
    
    snapFaceSnapById() {
        return this.faceSnapServices.handleSnap(this);
    }

}
