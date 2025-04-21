export type AuthState = {
  isAuthenticated: boolean
  email: string | null
}

export const AUTH_ACTIONS = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
} as const

export const authActions = {
  login: (payload: { email: string }) => {
    localStorage.setItem("email", JSON.stringify(payload))
    return { type: AUTH_ACTIONS.LOGIN, payload }
  },
  logout: () => ({ type: AUTH_ACTIONS.LOGOUT }),
} as const

export type AuthAction = ReturnType<(typeof authActions)[keyof typeof authActions]>
const emailFromStorage = localStorage.getItem("email")
const initialState: AuthState = {
  email: emailFromStorage ? JSON.parse(emailFromStorage) : null,
  isAuthenticated: emailFromStorage ? true : false,
}

export const authReducer = (state = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case AUTH_ACTIONS.LOGIN:
      return { isAuthenticated: true, email: action.payload.email }
    case AUTH_ACTIONS.LOGOUT:
      return { isAuthenticated: false, email: null }
    default:
      return state
  }
}
