import {
    GET_COUNTRIES,
    GET_ACTIVITIES,
    FILTER_BY_CONTINENT,
    ORDER_COUNTRIES,
    ORDER_ACTIVITIES,
    MIX,
} from "../actions/countryActions";

const initialState = {
    countries: [],
    countriesComplete: [],
    activities: [],
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case MIX:
            return {
                ...state,
                countries: [...state.countriesComplete],
            };

        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                countriesComplete: action.payload,
            };
        case GET_ACTIVITIES:
            return {
                ...state,
                activities: action.payload,
            };

        case FILTER_BY_CONTINENT:
            let countries = state.countries;
            let countriesComplete = state.countriesComplete;

            if (countries.length < countriesComplete.length) {
                countries = countriesComplete;
            }

            const statusFilter =
                action.payload === "All"
                    ? countries
                    : countries.filter((el) => el.continent === action.payload);

            return {
                ...state,
                countries: statusFilter,
            };
        case ORDER_COUNTRIES:
            let order = state.countries;

            if (action.payload === "asc") {
                order = order.sort((a, b) => {
                    if (a.name > b.name) return 1;
                    if (a.name < b.name) return -1;
                    return 0;
                });
            }

            if (action.payload === "desc") {
                order = order.sort((a, b) => {
                    if (a.name < b.name) return 1;
                    if (a.name > b.name) return -1;
                    return 0;
                });
            }

            return {
                ...state,
                countries: order,
            };
        case ORDER_ACTIVITIES:
            let countriesAct = state.countriesComplete;
            let createdFilter = [];
            let result = [];

            if (action.payload === "false" && state.countries.length <= 2) {
                return {
                    ...state,
                    countries: state.countriesComplete,
                };
            }
            if (action.payload === "false") {
                return {...state};
            }
            createdFilter = countriesAct.filter(
                (el) => el.Activities.length > 0
            );

            for (let i = 0; i < createdFilter.length; i++) {
                for (let j = 0; j < createdFilter[i].Activities.length; j++) {
                    if (
                        createdFilter[i].Activities[j].name === action.payload
                    ) {
                        result.push(createdFilter[i]);
                    }
                }
            }
            if (result.length === 0) {
                return {
                    ...state,
                };
            }

            return {
                ...state,
                countries: result,
            };

        default:
            return {...state};
    }
};
export default reducer;
