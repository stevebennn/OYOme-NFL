import { Injectable } from '@angular/core';

@Injectable()
export class DataModelService {

  constructor() { }


    model = {
        team: 'nflari',
        skintone: '002',
        face: {
            eyes: '001',
            eyeAccessory: '005',
            eyebrows: '001',
            eyebrowColor: '4625',
            nose: '007',
            noseAccessory: '002',
            mouth: '007',
            mouthAccessory: '002',
            beard: '007',
            beardColor: '4625'
        },
        fullname: 'Your Name',
        gender: 'male',
        handedness: 'right',
        league: 'MLB',
        name: 'LAST NAME',
        number: 14,
        position: 'CA',
    };

    initialState = this.model;


    setInitialState(model) {
        window.localStorage.setItem('model',JSON.stringify(model))
    }

    getState() {
        return JSON.parse(window.localStorage.getItem('model'));
    }

    setModel(model) {
        return this.setInitialState(model);
    }

    reset() {
        return this.setInitialState(this.model);
    }

    

}
