import { Component, Input, OnInit, NgZone } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StepsService } from './steps.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  
    // if this is the first visit...it will set the model
    ngOnInit() {
        if( window.localStorage.getItem('version') !== "0.37" ) {
            // sets first load model
            this.activeSkintone = '002';
            this.activeTeam = 'nflari';
            this.activeJerseyNumber = "14";
            this.activeMouth = '006';
            this.activeMouthAccessory = '000';
            this.activeNose = '004';
            this.activeEyebrows = '005';
            this.activeEyebrowColor = '4625';
            this.activeHairStyle = 'null';
            this.activeHairColor = '4625';
            this.activeBeard = '000';
            this.activeBeardColor = 'blk';
            this.activeEyes = "001";
            this.activeNoseAccessory = "000";
            this.activeEyeAccessory = "005";
            this.activePackage = "001";
            this.activePrimaryText = "Your Name";
            this.activeSecondaryText = "Your Message!";

            // in the case they only make the torso...then leave.
            // this sets the model to memory as well...
            window.localStorage.setItem('version','0.37'); // this is for asset updates
            window.localStorage.setItem('skintone',this.activeSkintone);
            window.localStorage.setItem('team',this.activeTeam);
            window.localStorage.setItem('jerseyNumber',this.activeJerseyNumber);
            window.localStorage.setItem('mouthAccessory',this.activeMouthAccessory);
            window.localStorage.setItem('nose','004');
            window.localStorage.setItem('mouth',this.activeMouth);
            window.localStorage.setItem('eyebrows',this.activeEyebrows);
            window.localStorage.setItem('eyebrowColor','4625');
            window.localStorage.setItem('hairStyle','null');
            window.localStorage.setItem('hairColor',this.activeHairColor);
            window.localStorage.setItem('beard','000');
            window.localStorage.setItem('beardColor','blk');
            window.localStorage.setItem('eyes','001');
            window.localStorage.setItem('noseAccessory','000');
            window.localStorage.setItem('eyeAccessory',this.activeEyeAccessory);
            window.localStorage.setItem('package','001');
            window.localStorage.setItem('primaryText','Your Name!');
            window.localStorage.setItem('secondaryText','Your Message!');
        }
    }
    
    // setting variables
    public stepsPosition: string = 'flex-start';
    public skintonePosition: string = 'flex-start';
    public teamsPosition: string = 'flex-start';
    public eyesPosition: string = 'flex-start';
    public eyebrowsPosition: string = 'flex-start';






    constructor(private stepsService: StepsService, zone: NgZone) {

        // setting each media query
        const stepsMql: MediaQueryList = window.matchMedia('(min-width:'+this.stepsContainer+'px)');
        const skintoneMql: MediaQueryList = window.matchMedia('(min-width:'+this.skintoneContainer+'px)');
        const teamsMql: MediaQueryList = window.matchMedia('(min-width:'+this.teamContainer+'px)');
        const eyesMql: MediaQueryList = window.matchMedia('(min-width:'+this.eyesContainer+'px)');
        const eyebrowsMql: MediaQueryList = window.matchMedia('(min-width:'+this.eyebrowContainer+'px)');
        
        


        // set the position based on viewport at loadtime
        this.stepsPosition = stepsMql.matches ? 'center' : 'flex-start';
        this.skintonePosition = skintoneMql.matches ? 'center' : 'flex-start';
        this.teamsPosition = teamsMql.matches ? 'center' : 'flex-start';
        this.eyesPosition = eyesMql.matches ? 'center' : 'flex-start';
        this.eyebrowsPosition = eyebrowsMql.matches ? 'center' : 'flex-start';




        // bottom bar steps
        stepsMql.addListener((stepsMql: MediaQueryList) => {
            zone.run( () => { 
                this.stepsPosition = stepsMql.matches ? 'center' : 'flex-start';
            });
        });


        // team options
        teamsMql.addListener((teamsMql: MediaQueryList) => {
            zone.run( () => { 
                this.teamsPosition= teamsMql.matches ? 'center' : 'flex-start';
            });
        });


        // skintone options
        skintoneMql.addListener((skinetoneMql: MediaQueryList) => {
            zone.run( () => { 
                this.skintonePosition= skintoneMql.matches ? 'center' : 'flex-start';
            });
        });

        // eye options
        eyesMql.addListener((eyesMql: MediaQueryList) => {
            zone.run( () => { 
                this.eyesPosition= eyesMql.matches ? 'center' : 'flex-start';
            });
        });
        

        // eye options
        eyebrowsMql.addListener((eyebrowsMql: MediaQueryList) => {
            zone.run( () => { 
                this.eyebrowsPosition= eyebrowsMql.matches ? 'center' : 'flex-start';
            });
        });



    }






    // Application default values
    activeStep = "skintone";
    stepLevel = "figure";

    steps = this.stepsService.steps;
    opts = this.stepsService.opts;

    noseOpts = this.opts.noses;
    noseContainer = this.noseOpts.length * 60;
    mouthOpts = this.opts.mouths;
    mouthContainer = this.mouthOpts.length * 60;
    skintoneOpts = this.opts.skintones;
    skintoneContainer = this.skintoneOpts.length * 60;
    eyebrowOpts = this.opts.eyebrows;
    eyebrowContainer = this.eyebrowOpts.length * 60;
    hairColorOpts = this.opts.haircolors;
    hairStyleOpts = this.opts.hairstyles;
    mouthAccessoriesOpts = this.opts.mouth_accessories;
    beardOpts = this.opts.beards;
    beardContainer = this.beardOpts.length * 60;
    eyesOpts = this.opts.eyes;
    eyesContainer = this.eyesOpts.length * 60;
    noseAccessoryOpts = this.opts.nose_accessories;
    eyeAccessoriesOpts = this.opts.eye_accessories;
    eyeAccessoryContainer = this.eyeAccessoriesOpts.length * 60;
    packagingOpts = this.opts.packaging;
    packagingContainer = this.packagingOpts.length * 60;
    teamOpts = this.opts.teams;
    teamContainer = this.teamOpts.length * 60;

    stepsContainer = this.steps.length * 60;


    activeSkintone = window.localStorage.getItem('skintone');
    activeTeam = window.localStorage.getItem('team');
    activeJerseyNumber = window.localStorage.getItem('jerseyNumber');
    activeMouth = window.localStorage.getItem('mouth');
    activeNose = window.localStorage.getItem('nose');
    activeEyebrows = window.localStorage.getItem('eyebrows');
    activeEyebrowColor = window.localStorage.getItem('eyebrowColor');
    activeHairStyle = window.localStorage.getItem('hairStyle');
    activeHairColor = window.localStorage.getItem('hairColor');
    activeMouthAccessory = window.localStorage.getItem('mouthAccessory');
    activeBeard = window.localStorage.getItem('beard');
    activeBeardColor = window.localStorage.getItem('beardColor');
    activeEyes = window.localStorage.getItem('eyes');
    activeNoseAccessory = window.localStorage.getItem('noseAccessory');
    activeEyeAccessory = window.localStorage.getItem('eyeAccessory');
    activePackage = window.localStorage.getItem('package');
    activePrimaryText = window.localStorage.getItem('primaryText');
    activeSecondaryText = window.localStorage.getItem('secondaryText');



    changeStep(step) {
        if(step == "team" || step == "skintone") {
            this.stepLevel = "figure";
        } else if (step == "packaging") {
            this.stepLevel = "packaging";
        } else {
            this.stepLevel = "features"
        }
        this.activeStep = step;
    }


    toggleStepLevel(stepLevel) {
        switch(stepLevel) {
            case 'figure':
                return this.stepLevel = 'features';
                
            case 'features':
                return this.stepLevel = 'figure';
        }
    }

    changeSkintone(color) {
        this.activeSkintone = color;
        window.localStorage.setItem('skintone',color);
    }

    changeTeam(team) {
        this.activeTeam = team;
        window.localStorage.setItem('team',team);
    }

    changeMouth(mouth) {
        this.activeMouth = mouth;
        window.localStorage.setItem('mouth',mouth);
    }

    changeNose(nose) {
        this.activeNose = nose;
        window.localStorage.setItem('nose',nose);
    }

    changeEyebrow(eyebrow) {
        this.activeEyebrows = eyebrow;
        window.localStorage.setItem('eyebrows', eyebrow);
    }

    changeEyebrowColor(color) {
        this.activeEyebrowColor = color;
        window.localStorage.setItem('eyebrowColor',color);
    }

    changeHairStyle(hairStyle) {
        this.activeHairStyle = hairStyle;
        window.localStorage.setItem('hairStyle',hairStyle);
    }

    changeHairColor(color) {
        this.activeHairColor = color;
        window.localStorage.setItem('hairColor',color);
    }

    changeMouthAccessory(accessory) {
        this.activeMouthAccessory = accessory;
        window.localStorage.setItem('mouthAccessory',accessory);
    }

    changeBeard(beard) {
        this.activeBeard = beard;
        window.localStorage.setItem('beard',beard);
    }

    changeBeardColor(color) {
        this.activeBeardColor = color;
        window.localStorage.setItem('beardColor',color);
    }

    changeEyes(eyes) {
        this.activeEyes = eyes;
        window.localStorage.setItem('eyes',eyes);
    }

    changeNoseAccessory(acc) {
        this.activeNoseAccessory = acc;
        window.localStorage.setItem('noseAccessory',acc);
    }


    changeEyeAccessory(acc) {
        this.activeEyeAccessory = acc;
        window.localStorage.setItem('eyeAccessory',acc);
    }

    changePackage(packaging) {
        this.activePackage = packaging;
        window.localStorage.setItem('package', packaging);
    }

    updatePrimaryText(text) {
        this.activePrimaryText = text;
        window.localStorage.setItem('primaryText', text);
    }

    updateSecondaryText(text) {
        this.activeSecondaryText = text;
        window.localStorage.setItem('secondaryText', text);
    }

}