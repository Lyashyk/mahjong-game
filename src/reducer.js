import { createAction } from "./utils";

import { getArrWidthDefaultAtribute, getCheckingArr } from './helpers';

// Actions
const VISITED_BUTTON = "VISITED_BUTTON";
const CHECK_IS_COMPLETE = 'CHECK_IS_COMPLATE';

export const actions = {
    buttonClick: (index) => createAction(VISITED_BUTTON, { index }),
    checkIsComplete: (index, title) => {
        return createAction(CHECK_IS_COMPLETE, { index, title })
    }
};

// State
const initialState = {
    numbers: getArrWidthDefaultAtribute()
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case VISITED_BUTTON: {
            const { index } = payload;

            let _currentNumbers = [...state.numbers];

            _currentNumbers[index].visited = true;

            return {
                numbers: _currentNumbers
            };
        }

        case CHECK_IS_COMPLETE: {
            const { index, title } = payload;

            let _currentNumbers = [...state.numbers];

            return {
                numbers: getCheckingArr(_currentNumbers, title, index)
            };
        }

        default:
            return state;
    }
};

// SELECTORS

export const getArr = state => {
    return state.numbers
};

export default reducer;