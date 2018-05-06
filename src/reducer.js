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
    case 'SET_EMAIL':
      return {
        ...state,
        email: action.value
      }
    default:
      return state
  }
}

export const setEmail = value => ({
  type: 'SET_EMAIL',
  value
})
