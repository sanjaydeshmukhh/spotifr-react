export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //remove after finished developing
    //token:
      // "BQA_lxZIwamYWm0M_7_UoxLHOQFRyvsH9Y6c2CaXiJM3nCcy-MePuv1hoNka_rqAnxfQRxbL4Mb8FaEoq5o8mRm4oaFWM2Ns4ptRNVkzpUULnn7vl7jrRjQF6o5oOOeKzsd159LPitEoJB7EffxeO8Ajjxwf1opWNWciFZ_Vi1VNrp4S",
};

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };

        case "SET_TOKEN":
            return {
                ...state,
                token: action.token,
            };

        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            };

            case "SET_DISCOVER_WEEKLY":
                return {
                    ...state,
                    discover_weekly: action.discover_weekly,
                };

        default:
            return state;
    }
};

export default reducer;
