working on pdf round trip and reading in clojure.

currently, it looks like the data.codec library can do a round-trip from a pdf to b64 and back with its own encoding, but 
cannot take a pdf encoded by python and convert it; there's a slight difference in the b64 encoding schemes.

since python seems to be able to handle javascript encoding, for purposes of reading and processing data out of chrome extension 
it'll have to be python to process the documents.  that's ok. 


# pdfio

FIXME: description

## Installation

Download from http://example.com/FIXME.

## Usage

FIXME: explanation

    $ java -jar pdfio-0.1.0-standalone.jar [args]

## Options

FIXME: listing of options this app accepts.

## Examples

...

### Bugs

...

### Any Other Sections
### That You Think
### Might be Useful

## License

Copyright © 2016 FIXME

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
