import { MeasurementKeys } from './measurement-keys';

export class Measurement {
    constructor(
        public dress: string,
        public fitness: string,
        public measure: Map<String, number>  
    ){}
    initialiseMaleShirtMeasurment(_dress: string, _fitness: string){
        this.dress = _dress;
        this.fitness = _fitness;
        this.measure = new Map<String, number>();
        var _measure:  Map<String, number> = new Map<String, number>();
        MeasurementKeys.Male.ShirtKeys.forEach( function(key){
            _measure.set(key,1.0);
        });
        this.measure = _measure;
        return this;
    }
    initialiseMaleTowsorMeasurment(_dress: string, _fitness: string){
        this.dress = _dress;
        this.fitness = _fitness;
        this.measure = new Map<String, number>();
        var _measure:  Map<String, number> = new Map<String, number>();
        MeasurementKeys.Male.TowsorKeys.forEach( function(key){
            _measure.set(key,2.0);
        });
        this.measure = _measure;
        return this;
    }
    initialiseFemaleBlouseMeasurment(_dress: string, _fitness: string){
        this.dress = _dress;
        this.fitness = _fitness;
        this.measure = new Map<String, number>();
        var _measure:  Map<String, number> = new Map<String, number>();
        MeasurementKeys.Female.BlouseKeys.forEach( function(key){
            _measure.set(key,3.0);
        });
        this.measure = _measure;
        return this;
    }
    initialiseFemaleSalwarMeasurment(_dress: string, _fitness: string){
        this.dress = _dress;
        this.fitness = _fitness;
        this.measure = new Map<String, number>();
        var _measure:  Map<String, number> = new Map<String, number>();
        MeasurementKeys.Female.SalwarKeys.forEach( function(key){
            _measure.set(key,4.0);
        });
        this.measure = _measure;
        return this;
    }
}
