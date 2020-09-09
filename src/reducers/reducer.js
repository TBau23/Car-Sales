import { INCREASE_ADDITIONAL_PRICE, ADD_FEATURE, REMOVE_FEATURE } from '../actions'

const initialState = { 
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };



export const reducer = (state = initialState, action={}) => {
    switch(action.type) {
        case INCREASE_ADDITIONAL_PRICE: // this was just an experiment to make sure I understood how to wire things 
            return {...state, additionalPrice: state.additionalPrice + 100}
        case ADD_FEATURE:
            // Take selected feature by ID
            // filter out additionalFeatures by ID selected
            // add to features
            return {
                ...state, 
                additionalFeatures: state.additionalFeatures.filter(
                    (feature) => feature.id !== action.payload.id
                ),
                car: {
                    ...state.car,
                    features: [...state.car.features, action.payload]
                }
            }
        case REMOVE_FEATURE:
            return {
                ...state,
                car: {
                    ...state.car,
                    features: state.car.features.filter(
                        feature => feature.id !== action.payload.id
                    )
                    
                },
                additionalFeatures: [...state.additionalFeatures, action.payload]
            }

        default:
            return state
    }
}

