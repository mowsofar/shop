interface IItem {
    id: number,
    title: string,
    price: string,
    category: string,
    description: string,
    image: string
}

interface ItemsState {
    items: Array<IItem>
}

interface SetAction {
    type: string,
    payload: Array<IItem>
}

const initialState: ItemsState = {
    items: []
}

export const itemsReducer = (state = initialState, action: SetAction): ItemsState => {
    switch (action.type) {
        case "SET_ITEMS":
            return {...state, items: action.payload}
        default:
            return state;
    }

}
