import {CREAT_ClASS, UPDETE_CLASS, DELETE_CLASS} from './classConstant'

export const createClass = (DanceClass)=>{
    return{
        type: CREAT_ClASS,
        payLoad:{
            DanceClass
        }
    }
}

export const updateClass = (DanceClass)=>{
    return{
        type: UPDETE_CLASS,
        payLoad:{
            DanceClass
        }
    }
}

export const deleteClass = (DanceClass)=>{
    return{
        type: DELETE_CLASS,
        payLoad:{
            DanceClass
        }
    }
}