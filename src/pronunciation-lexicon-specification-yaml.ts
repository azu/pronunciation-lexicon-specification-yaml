// MIT © 2017 azu
import { safeLoad } from "js-yaml";
import { jsonToPLSXML } from "pronunciation-lexicon-specification-json";

export function yamlToPLSXML(yaml: string) {
    const json = safeLoad(yaml);
    return jsonToPLSXML(json);
}
