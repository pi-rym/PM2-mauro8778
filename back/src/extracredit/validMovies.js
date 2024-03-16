class movies{
    
    constructor({title,year,director,duration,genre,poster}){

        if(!"title"||!"poster"||!"director"){

            return false;

        }
        return true;
    }
}

throw new Error("")