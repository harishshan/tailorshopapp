import { Measurement } from './measurement';

export class Customer {
    constructor(
        public name: string,
        public phonenumber: string,
        public gender: string,
        public address: string,
        public city: string,
        public state: string,
        public relation: string,
        public relationName: string,
        public measurementList: Measurement[]
    ){}
}