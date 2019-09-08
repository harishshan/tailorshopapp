export class MeasurementKeys {        
    static Male = class{
        static ShirtKeys: string[]=["COLLAR", "SHOULDER","CHEST", "WAIST", "HIPS", "SLEEVE_LENGTH",
            "SHORT_SLEEVE_LENGTH", "ELBOW", "FOREARM", "BICEP", "CUFFS", "SHORT_SLEEVE_OPENING", "YOKE",
            "SHIRT_LENGTH", "JACKET_LENGTH", "ARMHOLE"];
        static TowsorKeys: string[] =["CROTCH", "FRONT_RISE", "BACK_RISE", "THIGH_WIDTH", "PANTS_LENGTH",
            "KNEE", "OUTSEAM", "INSEAM", "HALF_HEM", "LEG_OPENING"];
    }
    static Female = class{
        static BlouseKeys: string[] = ["AROUND_BUST", "BELOW_BUST", "SHOULDER", "SLEEVE_LENGTH", "SLEEVE_LOOSE", 
            "AROUND_ARM_HOLE", "FRONT_NECK_DEPTH", "BACK_NECK_DEPTH","LENGTH"];
        static SalwarKeys: string[] = ["SHOULDER", "AROUND_BREAST", "AROUND_WAIST", "AROUND_HIPS",
            "WAIST_TO_ANKLE_LENGTH"];
    } 
}