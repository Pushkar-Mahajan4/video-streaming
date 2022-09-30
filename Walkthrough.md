## First Approach

For first approach I am going to try sending entire video to the requesting browser.
For this I need a back end that is ready.

# How to write a video file as response?

In chunks is the answer

> > TIL
> > response.writeHead() ---> Allows to write multiple headers
> > response.setHead() ----> Allows to set one header

\*\*res.write(); --> Write to client
res.send()--> Write once to client

res.send = res.write() + res.end();\*\*

> > Testing load bearing capacity of server using Jmeter
> > ~ So far the response time is super low
