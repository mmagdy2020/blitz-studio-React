// import * as actionType from './classConstant'
import {UPDATE_CLASS, DELETE_CLASS,INIT_CLASS,GET_CLASS,CREATE_CLASS} from './classAction'




// THE STATE CAN ONLY UPDATED IN THE REDUCER
const intiState = {
    classes: [],
    class:{}
}

const classReducer = (state = intiState, action) => {

    switch (action.type) {
        case INIT_CLASS:   
            //fetching all of the classes 
            console.log(state)
            return {
                ...state,
                classes: action.payload  // HAS TO MATCH WHAT EXIST IN CLASSACTION
            }

            case  CREATE_CLASS:    
            return {
                ...state,
                classes:state.classes.concat(action.payload)  // hopfelly it work...
            }

        case GET_CLASS:     //Bug- fixed // could not retrive the data
        console.log(state)
           
        return  {       
             ...state,
             class: action.payload
    // classes:state.classes.filter(dClass=> dClass._id == action.payload._id)
}  
        
            case DELETE_CLASS:
                console.log(state)
                console.log(action.payload)
                return {
                    ...state,
                    classes: state.classes.filter(dClass => dClass._id !== action.payload._id)
                }

            case UPDATE_CLASS: 
            console.log(state)

           const updatedOne = state.classes.filter(dClass => dClass._id !==action.payload._id
           )
           console.log(updatedOne)

            return {
                ...state,
                classes : updatedOne.concat(action.payload)
           
            }


        default:
            return state

    }
}


export default classReducer