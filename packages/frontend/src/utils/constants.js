if (!process.env.VUE_APP_LAMBDA_ENDPOINT) {
    throw Error('Missing env Variable LAMBDA_ENDPOINT')
}

export const API_URL = process.env.VUE_APP_LAMBDA_ENDPOINT;
export const SESSION_TOKEN_NAME = 'session-token'