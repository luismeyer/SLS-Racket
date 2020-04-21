import {
    API_URL
} from '../utils'

export const fetchRackets = () =>
    fetch(`${API_URL}/get/rackets`).then(response => response.json())