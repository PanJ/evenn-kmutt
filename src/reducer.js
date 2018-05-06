import axios from 'axios'

const initialState = {
  email: '',
  ticketType: '',
  agreeTerms: false,
  addFood: false,
  countdown: '',
  username: '',
  loading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SUBMIT_PENDING':
      return {
        ...state,
        loading: true
      }
    case 'SUBMIT_FULFILLED':
      return {
        ...state,
        loading: false,
        message: action.payload.data.status
      }
    case 'SET_FIELD':
      return {
        ...state,
        [action.key]: action.value
      }
    default:
      return state
  }
}

export const setField = (key, value) => ({
  type: 'SET_FIELD',
  key,
  value
})

export const submit = data => ({
  type: 'SUBMIT',
  payload: axios.post('http://www.mocky.io/v2/5aeec5962f00005800739b2c', {
    data
  })
})
