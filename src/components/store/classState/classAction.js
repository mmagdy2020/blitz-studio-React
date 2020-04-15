import axois from 'axios'
// import * as {crea} from './classConstant'



export const CREATE_CLASS = 'CREATE_CLASS'
export const UPDATE_CLASS = 'UPDATE_CLASS'
export const DELETE_CLASS = 'DELETE_CLASS'
export const INIT_CLASS = 'INIT_CLASS'
export const GET_CLASS = 'GET_CLASS'
export const CREATE_SERIES = 'CREATE_SERIES'


export const createClass = (fetchedClass) => {
    return {
        type: CREATE_CLASS,
        payload: fetchedClass
    }
}

export const createClassAsync = (danceClass)=>{
    return dispatch => {
        axois.post('/classes', danceClass)
                .then(response => { 
                //   this.props.history.push('/classes')  // Bug fised by pushing to History..
                    console.log(response);
                    dispatch(createClass(response.data))
                })
    }
}


export const deleteClass = (danceClass) => {
    return {
        type: DELETE_CLASS,
        payload:danceClass
    }
}


export const deleteClassAsync =(id) =>{
    return dispatch => {
        axois.delete('/classes/' + id).then(result =>{
            console.log({'deleteAsyncRespond' : result.data })
            dispatch(deleteClass(result.data))
        }).catch(err =>console.log(err))
    }
}

//Thunk let not return the action itself but ASYNC FUNC
export const getClass = (danceClass) => {
    return {
        type: GET_CLASS, //GET_CLASS
        payload: danceClass
    }
}

// 1 - SET STATE WILL ALL OF THE CLASSES

export const intiClass = (danceClass) => {    
    return {
        type: INIT_CLASS, //INIT_CLASS
        payload: danceClass
    }
}

// PASSING THE DATA TO REDUCER USING DISPATCHER.. SO WE CAN DISPATCH THE ACTION..
export const fetchClasses = () => {
    return dispatch => {
        axois.get('/classes').then(result => {
            console.log({'fetchedClassRespone' : result.data })
            dispatch(intiClass(result.data))
            
        }).catch(err => console.log(err))
    }
}

// 2- GET CLASS BY ID



export const getClassDetails = (id) => {
    console.log(id)
    return (dispatch) => {
        axois.get('/classes/'+id)
        .then(result => {
            console.log({'getDetailRespone' : result })
          dispatch(getClass(result.data));
        })
        .catch(error => { 
          throw(error); 
        });
    };
  };


  // 3- UPDATE CLASS BY ID, FIRST GET THEN UPDATE..

export const updateClass = (danceClass)=>{

    return{
        type: UPDATE_CLASS,
        payload: danceClass
    }
}

  export const getUpdateClass = (id, updatedDanceClass) => {
    console.log(id)
    console.log(updatedDanceClass)
    return (dispatch) => {
    axois.patch('/classes/'+ id,updatedDanceClass)
        .then(result => {
            console.log({'updateRespone' : result.data })
          dispatch(updateClass(result.data));
        })
        .catch(error => { 
          throw(error); 
        });
    };
  };


export const createSerie = (danceClass) =>{
    return{
        type:CREATE_SERIES,
        payload:danceClass
    }
}

export const createClassSerie = (id, cretedClass) => {
    console.log(id)
    console.log(cretedClass)


    return (dispatch) => {
    axois.patch('/classes/series/'+ id,cretedClass)
        .then(result => {
            console.log({'createdSerie' : result.data })
          dispatch(createSerie(result.data));
        })
        .catch(error => { 
          throw(error); 
        });
    };
  };
