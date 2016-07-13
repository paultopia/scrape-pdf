# simple commandline code to work with the base64 strings you just got:


# first, encode an existing pdf as base64, just to make sure we know how.
# with open("pdf.pdf", "rb") as infile:
#     b64 = infile.read().encode("base64")

# with open("out.txt", "w") as outfile:
#     outfile.write(b64)

# now take a base64encoding and turn it back into a pdf.

import base64

with open("out.txt", "r") as newin:
    pdfstr = newin.read()

pdfbytes = base64.b64decode(pdfstr)

# for some reason, every source I can find on encoding doesn't use a lib but decoding does.  okay...

with open("out.pdf", "wb") as outpdf:
    outpdf.write(pdfbytes)
