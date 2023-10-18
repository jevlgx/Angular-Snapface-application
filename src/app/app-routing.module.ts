import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FaceSnapComponent } from "./face-snap/face-snap.component";
import { FaceSnapListComponent } from "./face-snap-list/face-snap-list.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { SigneFaceSnapComponent } from "./signe-face-snap/signe-face-snap.component";

const routes: Routes = [
    {path: "", component: LandingPageComponent},
    {path: "facesnap", component: FaceSnapListComponent},
    {path: "facesnap/:id", component: SigneFaceSnapComponent}
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule{

}