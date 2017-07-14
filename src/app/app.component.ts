import { Component, Input, OnInit, NgZone } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StepsService } from './steps.service';

import {Store,provideStore} from '@ngrx/store';
import { saveState } from './localstorage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  
    // setting variables
    public stepsPosition: string = 'flex-start';
    public skintonePosition: string = 'flex-start';
    public teamsPosition: string = 'flex-start';
    public eyesPosition: string = 'flex-start';
    public eyebrowsPosition: string = 'flex-start';
    public nosesPosition: string = 'flex-start';
    public mouthsPosition: string = 'flex-start';
    public beardsPosition: string = 'flex-start';

    product: any;

    constructor(
        private stepsService: StepsService,
        private zone: NgZone,
        private _store : Store<any>
        ) {

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

        // subscribing to the product reducer
        this._store.select('product')
            .subscribe(product => {
                // assigning it to the local product variable
                this.product = product;
            });
        this._store.select('product')
            .subscribe( () => {
                saveState(this.product);
            } )
    }

    // Application default values
    activeStep = "team";
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

    changeStep(step) {
        if(step == "team" || step == "skintone") {
            this.stepLevel = "figure";
        }
        else if (step == "packaging") {
            this.stepLevel = "packaging";
        } else {
            this.stepLevel = "features"
        }
        this.activeStep = step;
    }

    // toggles the current step level. This creates a basic
    // "zoom in & zoom out" functionality
    toggleStepLevel(stepLevel) {
        switch(stepLevel) {
            case 'figure':
                return this.stepLevel = 'features';
            case 'features':
                return this.stepLevel = 'figure';
        }
    }
    
    updateFigure(key,val) {
        this._store.dispatch({type: 'UPDATE_FIGURE',payload:[key,val] })
    }

    updateFace(key,val) {
        this._store.dispatch({type: 'UPDATE_FACE',payload:[key,val] })
    }

    reset() {
        this._store.dispatch({ type: 'RESET' })
        this.activeStep = 'team';
        this.stepLevel = 'figure';
    }


}