import { Component, Input, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StepsService } from './steps.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
    // if this is the first visit...it will set the model
    ngOnInit() {
        if( window.localStorage.getItem('version') !== "0.36" ) {
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
            this.activeEyeAccessory = "000";
            this.activePackage = "001";
            this.activePrimaryText = "Your Name";
            this.activeSecondaryText = "Your Message!";

            // in the case they only make the torso...then leave.
            // this sets the model to memory as well...
            window.localStorage.setItem('version','0.36'); // this is for asset updates
            window.localStorage.setItem('skintone',this.activeSkintone);
            window.localStorage.setItem('team',this.activeTeam);
            window.localStorage.setItem('jerseyNumber',this.activeJerseyNumber);
            window.localStorage.setItem('mouthAccessory',this.activeMouthAccessory);
            window.localStorage.setItem('nose','004');
            window.localStorage.setItem('eyebrows',this.activeEyebrows);
            window.localStorage.setItem('eyebrowColor','4625');
            window.localStorage.setItem('hairStyle','null');
            window.localStorage.setItem('hairColor',this.activeHairColor);
            window.localStorage.setItem('beard','000');
            window.localStorage.setItem('beardColor','blk');
            window.localStorage.setItem('eyes','001');
            window.localStorage.setItem('noseAccessory','000');
            window.localStorage.setItem('eyeAccessory','000');
            window.localStorage.setItem('package','001');
            window.localStorage.setItem('primaryText','Your Name!');
            window.localStorage.setItem('secondaryText','Your Message!');
        }
    }
    
    constructor(private stepsService: StepsService) {}


    // Application default values
    activeStep = "skintone";
    stepLevel = "figure";

    steps = this.stepsService.steps;
    opts = this.stepsService.opts;

    noseOpts = this.opts.noses;
    noseContainer = this.noseOpts.length * 70;
    mouthOpts = this.opts.mouths;
    mouthContainer = this.mouthOpts.length * 70;
    skintoneOpts = this.opts.skintones;
    skintoneContainer = this.skintoneOpts.length * 100;
    eyebrowOpts = this.opts.eyebrows;
    eyebrowContainer = this.eyebrowOpts.length * 70;
    hairColorOpts = this.opts.haircolors;
    hairStyleOpts = this.opts.hairstyles;
    mouthAccessoriesOpts = this.opts.mouth_accessories;
    beardOpts = this.opts.beards;
    beardContainer = this.beardOpts.length * 70;
    eyesOpts = this.opts.eyes;
    eyesContainer = this.eyesOpts.length * 70;
    noseAccessoryOpts = this.opts.nose_accessories;
    eyeAccessoriesOpts = this.opts.eye_accessories;
    eyeAccessoryContainer = this.eyeAccessoriesOpts.length * 70;
    packagingOpts = this.opts.packaging;
    packagingContainer = this.packagingOpts.length * 70;
    teamOpts = this.opts.teams;
    teamContainer = this.teamOpts.length * 70;

    stepsContainer = this.steps.length * 70;


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


    modalActive = true;

    closeModal() {
        this.modalActive = false;
    }



    changeStep(step) {
        if(step == "torso" || step == "skintone" || step == "legs") {
            this.stepLevel = "figure";
        } else if (step == "packaging") {
            this.stepLevel = "packaging";
        } else {
            this.stepLevel = "features"
        }
        this.activeStep = step;
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