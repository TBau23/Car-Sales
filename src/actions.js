export const INCREASE_ADDITIONAL_PRICE = 'INCREASE_ADDITIONAL_PRICE'

export function increaseAdditionalPrice() {
    return {
        type: INCREASE_ADDITIONAL_PRICE
    }
}

export const ADD_FEATURE = 'ADD_FEATURE'

export function addFeature(newFeature) {
    return {
        type: ADD_FEATURE,
        payload: newFeature
    }
}

export const REMOVE_FEATURE = 'REMOVE_FEATURE'

export function removeFeature(feature) {
    return {
        type: REMOVE_FEATURE,
        payload: feature
    }
}