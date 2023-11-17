const BASE_URL = 'https://apiwildvalley.projectzerozilla.com/'
export const getApiUrl = (endpoint) => BASE_URL + endpoint

//AUTH
export const LOGIN = getApiUrl('auth/login')