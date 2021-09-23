import axios from "axios";
import {COUNTRY_URL, ACTIVITY_URL, SEARCH_URL} from "../../utils/index";
export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";
export const ORDER_COUNTRIES = "ORDER_COUNTRIES";
export const ORDER_ACTIVITIES = "ORDER_ACTIVITIES";
export const SEARCH_COUNTRIES = "SEARCH_COUNTRIES";
export const ONE_COUNTRY = "ONE_COUNTRY";
export const MIX = "MIX";

export function getCountries() {
    return function (dispatch) {
        return axios.get(COUNTRY_URL).then((response) => {
            dispatch({type: GET_COUNTRIES, payload: response.data});
        });
    };
}

export function getActivity() {
    return function (dispatch) {
        return axios.get(ACTIVITY_URL).then((response) => {
            dispatch({type: GET_ACTIVITIES, payload: response.data});
        });
    };
}

export function postActivity(payload) {
    return async function (dispatch) {
        const response = await axios.post(ACTIVITY_URL, payload);

        return response;
    };
} 

export function oneCountry(payload) {
   
    return async function (dispatch) {
        try {
            const json = await axios.get( /* "http://localhost:3001/countries/"  */   SEARCH_URL + payload);
            return dispatch({
                type: ONE_COUNTRY,
                payload: json.data,
            });
        } catch (err) {
            console.log(err);
        }
    };
}

export function getNameCountries(payload) {
    return {
        type: "SEARCH_COUNTRIES",
        payload,
    };
}

export function filterCountryByContinent(payload) {
    return {
        type: "FILTER_BY_CONTINENT",
        payload,
    };
}

export function orderCountries(payload) {
    return {
        type: "ORDER_COUNTRIES",
        payload,
    };
}

export function orderActivities(payload) {
    return {
        type: "ORDER_ACTIVITIES",
        payload,
    };
}

export function mix() {
    return {
        type: "MIX",
    };
}
