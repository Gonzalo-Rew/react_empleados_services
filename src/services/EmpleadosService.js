import Global from '../Global';
import axios from 'axios';

export default class EmpleadosService {
    getOficios() {
        var request = "/api/Empleados/Oficios";
        var url = Global.urlEmpleados + request;
        return new Promise(function(resolve){
            axios.get(url).then(res => {
                resolve(res.data);
            })
        })
    }

    getEmpleadosByOficio(oficio) {
        var request = "/api/Empleados/EmpleadosOficio/" + encodeURIComponent(oficio);
        var url = Global.urlEmpleados + request;
        return new Promise(function(resolve){
            axios.get(url).then(res => {
                resolve(res.data);
            })
        })
    }
}