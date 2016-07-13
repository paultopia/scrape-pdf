This is a demo of a chrome extension that can intercept user-clicked links, grab binary data from them, convert that binary data to 
base64 encoded strings, and then do whatever one wants to do with it (in this example, just log it to the console). 

Obviously, in actual production one wouldn't want to grab every single link on the page (some of them might not even be binary data!), 
also one wouldn't want to just log that sucker to the console. To actually send the data somewhere, you'll have to make use of 
chrome's [message passing API](https://developer.chrome.com/extensions/messaging) to get it from a content script (that has access 
to the page) to a background script (that has access to the outside world).

My own use for this is as an automated backup to research assistants 
who will be viewing a bunch of pdfs online and collecting data from them---I will be using this technique to also capture the PDFs they 
examine in the database and associate it with the entered data without having to trust RAs to remember to save and upload every file. 

If you have similar needs, it may be helpful.

The testcont directory has example content that this code is verified to work with (may not work locally, but worked off a server). 
(Also, I don't *think* this will be dependent on server implementation, but it might be, if some servers return weird response bodies 
or something in response to requests for binary files.  I've only tested on a generic LAMP stack static site server.)

The testprocess directory has example Python code for converting a pdf to and from base64 locally. I've verified that the decoding 
part of the Python code can successfully decode PDFs that have been encoded by the chrome extension, and also that the python code makes 
a successful round trip on its own.

Python version tested: 2.7.11. Python 3 handles strings in a weird new way, and there are absolutely no guarantees that the Python side 
of the code will work there.

Chrome version tested: 51.0.2704.103 (64-bit) on OSX 10.11.15.  (I highly doubt that will make a difference, but noting 
just in case some api thing breaks down the line for when I need to debug it.)
