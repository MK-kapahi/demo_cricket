import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
    selector : 'app-player',
    templateUrl :'./player.component.html',
    styleUrls :['./player.component.css']
})

export class PlayerComponent {

    playerform = new FormGroup({
        name : new FormControl(''),
        age : new FormControl(''),
        id :new FormControl(''),
        type : new FormControl(''),
        no_of_matches : new FormControl(''),

    })
}