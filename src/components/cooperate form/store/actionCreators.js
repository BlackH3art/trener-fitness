
// Action types
export const SENDDATA = "SENDDATA"; 
export const SENDMESSAGE = "SENDMESSAGE";
export const COOPERATELEADBUTTON = "COOPERATELEADBUTTON";


// Action creators
export const updateFormData = (payload) => ({
  type: SENDDATA,
  payload: payload
})

export const updateContactFormData = (payload) => ({
  type: SENDMESSAGE,
  payload: payload
})

export const cooperateLead = (value) => ({
  type: COOPERATELEADBUTTON,
  payload: value
})