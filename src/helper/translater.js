import { useSelector } from 'react-redux'

function _translate(obj) {
    const lang = useSelector(state => state.languageReducer)

    if(obj === undefined)
        return

    if(typeof(obj) == "string")
        return obj

    if(lang === 'it')
        return obj.it
    else if(lang === 'en')
        return obj.en

}

export function getTranslated(text) {
    return _translate(text)
}