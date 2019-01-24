import data from "./data";

export default function (text: string) {
    let result = data.translations[text];
    if (result === undefined) {
        return text;
    }
    return result;
}
