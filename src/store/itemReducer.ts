interface IItem {
    id: number,
    title: string,
    price: string,
    category: string,
    description: string,
    image: string
}

interface ItemsState {
    item: IItem
}

interface SetAction {
    type: string,
    payload: IItem
}

const initialState: ItemsState = {
    item: {
        id: 1,
        title: '',
        price: '',
        category: '',
        description: '',
        image: ''
    }
}

export const itemReducer = (state = initialState, action: SetAction): ItemsState => {
    switch (action.type) {
        case "SET_ITEM":
            return {...state, item: action.payload}
        default:
            return state;
    }
}