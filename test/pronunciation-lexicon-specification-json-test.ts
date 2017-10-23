// MIT © 2017 azu
import * as assert from "assert";
import * as fs from "fs";
import * as path from "path";
import { yamlToPLSXML } from "../src/pronunciation-lexicon-specification-yaml";

describe("pronunciation-lexicon-specification-json", () => {
    describe("toXML", () => {
        const fixturesDir = path.join(__dirname, "yml-to-PLSXML");
        fs.readdirSync(fixturesDir).map(caseName => {
            it(`should convert for ${caseName.replace(/-/g, " ")}`, () => {
                const fixtureDir = path.join(fixturesDir, caseName);
                const actualPath = path.join(fixtureDir, "input.yml");
                const actual = yamlToPLSXML(fs.readFileSync(actualPath, "utf-8"));
                const expected = fs.readFileSync(path.join(fixtureDir, "output.xml"), "utf-8");
                assert.strictEqual(actual, expected, JSON.stringify(actual) + "\n");
            });
        });
    });
});
