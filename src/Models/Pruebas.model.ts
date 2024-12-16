import supabase from '../utils/connection'


export class Factura {
    static async obtenerDepartamentos(){
        const{data, error} = await supabase.rpc('p_obtener_departamentos');
        if(error){
            throw error;
        }
        return data;
    }
}