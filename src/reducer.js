const initialState = {
  email: '',
  ticketType: '',
  agreeTerms: false,
  addFood: false,
  countdown: '',
  username: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
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
