export const updateObject = (oldObject, updatedProperties) => {
    return { /*replaces keys from oldObject to similar ones from updatedProperties*/
        ...oldObject, /*clone*/
        ...updatedProperties
    }
}