import { array_length } from "./array_length";

/**
 * It takes a string, splits it into an array, adds curly braces to the first and last index of the
 * array, joins the array back into a string, removes all instances of the string undefined, reverses
 * the string, removes the first comma, and then reverses the string back
 * @param {string} text - the string that you want to format
 * @returns A string that is formatted into a JSON object
 */
const format_object = (text: string) => {
    // convert the string into a key value pair: {iPhone12,8 : iPhone SE 2nd Gen} -> {"iPhone12,8":" iPhone SE 2nd Gen"}
    let final: any = text.split('\n').map((e: any) => {
        if (e == '') return;
        return `"${e.replaceAll(':', `":"`).replace(' ', '')}",`
    })
    // add a curly brace to first index of the array (start of object)
    final[0] = `{${final[0]}`

    // add a curly brace to last index of the array (end of object)
    final[array_length(final)] = `${final[array_length(final)]}}`

    // join together the array into a string
    final = final.join('')

    // remove all instances of the string undefined
    final = final.replaceAll("undefined", "")

    // reverse the string and get rid of the first comma (,) and then reverse back
    // this basically just removes the first comma that it finds starting from the end
    final = final.split('').reverse().join('').replace(',', '').split('').reverse().join('');

    // return back the formatted string
    return final
}

export { format_object }