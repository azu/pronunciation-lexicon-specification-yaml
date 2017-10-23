// MIT © 2017 azu
import { safeLoad } from "js-yaml";
import { toPLSXML } from "pronunciation-lexicon-specification-json";

export function toPLSXML(yaml: string) {
    const json = safeLoad(yaml);
    return toPLSXML(json);
}
