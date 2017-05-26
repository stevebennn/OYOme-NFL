import { Component, Input, OnInit, NgZone } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StepsService } from './steps.service';

import { DataModelService } from './data-model.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  
    // if this is the first visit...it will set the model
    ngOnInit() {
        
    }

    // setting variables
    public stepsPosition: string = 'flex-start';
    public skintonePosition: string = 'flex-start';
    public teamsPosition: string = 'flex-start';
    public eyesPosition: string = 'flex-start';
    public eyebrowsPosition: string = 'flex-start';
    public nosesPosition: string = 'flex-start';
    public mouthsPosition: string = 'flex-start';
    public beardsPosition: string = 'flex-start';

    constructor(
        private stepsService: StepsService,
        private zone: NgZone,
        private dataModel: DataModelService) {

        // setting each media query
        const stepsMql: MediaQueryList = window.matchMedia('(min-width:'+this.stepsContainer+'px)');
        const skintoneMql: MediaQueryList = window.matchMedia('(min-width:'+this.skintoneContainer+'px)');
        const teamsMql: MediaQueryList = window.matchMedia('(min-width:'+this.teamContainer+'px)');
        const eyesMql: MediaQueryList = window.matchMedia('(min-width:'+this.eyesContainer+'px)');
        const eyebrowsMql: MediaQueryList = window.matchMedia('(min-width:'+this.eyebrowContainer+'px)');
        const nosesMql: MediaQueryList = window.matchMedia('(min-width:'+this.noseContainer+'px)');
        const mouthsMql: MediaQueryList = window.matchMedia('(min-width:'+this.mouthContainer+'px)');
        const beardsMql: MediaQueryList = window.matchMedia('(min-width:'+this.beardContainer+'px)');
        
        // set the position based on viewport at loadtime
        this.stepsPosition = stepsMql.matches ? 'center' : 'flex-start';
        this.skintonePosition = skintoneMql.matches ? 'center' : 'flex-start';
        this.teamsPosition = teamsMql.matches ? 'center' : 'flex-start';
        this.eyesPosition = eyesMql.matches ? 'center' : 'flex-start';
        this.eyebrowsPosition = eyebrowsMql.matches ? 'center' : 'flex-start';
        this.nosesPosition = nosesMql.matches ? 'center' : 'flex-start';
        this.mouthsPosition = mouthsMql.matches ? 'center' : 'flex-start';
        this.beardsPosition = beardsMql.matches ? 'center' : 'flex-start';

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

        // eyebrows options
        eyebrowsMql.addListener((eyebrowsMql: MediaQueryList) => {
            zone.run( () => { 
                this.eyebrowsPosition= eyebrowsMql.matches ? 'center' : 'flex-start';
            });
        });

        // nose options
        nosesMql.addListener((nosesMql: MediaQueryList) => {
            zone.run( () => { 
                this.nosesPosition= nosesMql.matches ? 'center' : 'flex-start';
            });
        });

        // mouth options
        mouthsMql.addListener((mouthsMql: MediaQueryList) => {
            zone.run( () => { 
                this.mouthsPosition= mouthsMql.matches ? 'center' : 'flex-start';
            });
        });

        // beard options
        beardsMql.addListener((beardsMql: MediaQueryList) => {
            zone.run( () => { 
                this.beardsPosition= beardsMql.matches ? 'center' : 'flex-start';
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

    model = this.dataModel.getState();

    activeSkintone = this.model.skintone;
    activeTeam = this.model.team;
    activeJerseyNumber = this.model.number;
    activeMouth = this.model.face.mouth;
    activeNose = this.model.face.nose;
    activeEyebrows = this.model.face.eyebrows;
    activeEyebrowColor = this.model.face.eyebrowColor;
    activeMouthAccessory = this.model.face.mouthAccessory;
    activeBeard = this.model.face.beard;
    activeBeardColor = this.model.face.beardColor;
    activeEyes = this.model.face.eyes;
    activeNoseAccessory = this.model.face.noseAccessory;
    activeEyeAccessory = this.model.face.eyeAccessory;

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

    resetChanges() {
        this.model = this.dataModel.model;
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
        this.model.skintone = color;
        this.dataModel.setModel(this.model);
    }

    changeTeam(team) {
        this.activeTeam = team;
        this.model.team = team;
        this.dataModel.setModel(this.model);
    }

    changeMouth(mouth) {
        this.activeMouth = mouth;
        this.model.face.mouth = mouth;
        this.dataModel.setModel(this.model);
    }

    changeNose(nose) {
        this.activeNose = nose;
        this.model.face.nose = nose;
        this.dataModel.setModel(this.model);
    }

    changeEyebrow(eyebrow) {
        this.activeEyebrows = eyebrow;
        this.model.face.eyebrows = eyebrow;
        this.dataModel.setModel(this.model);
    }

    changeEyebrowColor(color) {
        this.activeEyebrowColor = color;
        this.model.face.eyebrowColor = color;
        this.dataModel.setModel(this.model);
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

}