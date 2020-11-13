import { SENDDATA, SENDMESSAGE, COOPERATELEADBUTTON } from './actionCreators';
import { formInitialData } from './formInitialData';

export default function formReducer(storeData, action) {

  switch(action.type) {

    case SENDDATA: 
      return {
        ...storeData,
        formData: action.payload
      };

    case SENDMESSAGE:
      return {
        ...storeData,
        formContactData: action.payload,
      };
    
    case COOPERATELEADBUTTON: 
      return {
        ...storeData,
        cooperateFormActive: action.payload
      }

    default:
      return storeData || formInitialData
  }

}