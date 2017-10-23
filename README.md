# pronunciation-lexicon-specification-yaml

Convert YAML(YML) to Pronunciation Lexicon Specification(PLS) XML.

## Related 

- JSON to PLS
- [azu/pronunciation-lexicon-specification-json: Convert JSON to Pronunciation Lexicon Specification (PLS) XML.](https://github.com/azu/pronunciation-lexicon-specification-json "azu/pronunciation-lexicon-specification-json: Convert JSON to Pronunciation Lexicon Specification (PLS) XML.")

## Install

Install with [npm](https://www.npmjs.com/):

    npm install pronunciation-lexicon-specification-yaml

## Usage

```js
import { toPLSXML } from "pronunciation-lexicon-specification-yaml";
toPLSXML(yamlContent);
```

```yml
lang: "en-US"
alphabet: "ipa"
lexeme:
  - grapheme:
    - "colour"
    - "color"
    phoneme: "kʌlər"
  - grapheme: "Roberto"
    phoneme: "ɹəˈbɛːɹɾoʊ"
```

to be

```xml
<?xml version="1.0" encoding="UTF-8"?>
<lexicon version="1.0" xmlns="http://www.w3.org/2005/01/pronunciation-lexicon" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.w3.org/2005/01/pronunciation-lexicon http://www.w3.org/TR/2007/CR-pronunciation-lexicon-20071212/pls.xsd" alphabet="ipa" xml:lang="en-US">
    <lexeme>
        <grapheme>colour</grapheme>
        <grapheme>color</grapheme>
        <phoneme>kʌlər</phoneme>
    </lexeme>
    <lexeme>
        <grapheme>Roberto</grapheme>
        <phoneme>ɹəˈbɛːɹɾoʊ</phoneme>
    </lexeme>
</lexicon>
```



## Changelog

See [Releases page](https://github.com/azu/pronunciation-lexicon-specification-yaml/releases).

## Running tests

Install devDependencies and Run `npm test`:

    npm i -d && npm test

## Contributing

Pull requests and stars are always welcome.

For bugs and feature requests, [please create an issue](https://github.com/azu/pronunciation-lexicon-specification-yaml/issues).

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

- [github/azu](https://github.com/azu)
- [twitter/azu_re](https://twitter.com/azu_re)

## License

MIT © azu
