import { Injectable } from "@angular/core";
import { FaceSnapp } from "../models/face-snap.models";
import { FaceSnapComponent } from "../face-snap/face-snap.component";
import { SigneFaceSnapComponent } from "../signe-face-snap/signe-face-snap.component";

@Injectable({
    providedIn: "root"
})
export class FaceSnapServices{

    faceSnaps : FaceSnapp[] = [
            {
                id : 1,
                title: 'Archibald',
                description: 'Mon meilleur ami depuis tout petit !',
                imageURL: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
                createdDate: new Date(),
                snaps: 0,
            },
            {
                id : 2,
                title: 'Three Rock Mountain',
                description: 'Un endroit magnifique pour les randonnées.',
                imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
                createdDate: new Date(),
                snaps: 0,

            },
            {
                id : 3,
                title: 'Un bon repas',
                description: 'Mmmh que c\'est bon !',
                imageURL: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
                createdDate: new Date(),
                snaps: 0,
                location: "yaounde",
            }
    ];
    
    getAllSnapps(): FaceSnapp[]{
        return this.faceSnaps;
    }

    getSnapById(snapId: number) {
        const facesnap = this.faceSnaps.find(facesnap => facesnap.id == snapId);
        if (facesnap) {
            return facesnap
        } else {
            throw new Error("Snap not found")
        }
    }

    handleSnap (faceSnapComponent: FaceSnapComponent | SigneFaceSnapComponent) {
        if (faceSnapComponent.snapButton == "On snap") {
            this.snapById(faceSnapComponent.faceSnap.id);
            faceSnapComponent.snapButton = "Snapped";
        } else {
            this.unSnapById(faceSnapComponent.faceSnap.id);
            faceSnapComponent.snapButton = "On snap";
        }
    }
    
    snapById(faceSnapId: number): void{
        const snap = this.getSnapById(faceSnapId)
        snap.snaps++;
    }

    unSnapById(faceSnapId: number): void{
        const snap = this.getSnapById(faceSnapId)
        snap.snaps--;
    }
}