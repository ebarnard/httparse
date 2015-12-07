var searchIndex = {};
searchIndex['httparse'] = {"items":[[0,"","httparse","# httparse",null,null],[3,"InvalidChunkSize","","An error in parsing a chunk size.",null,null],[3,"Request","","A parsed Request.",null,null],[12,"method","","The request method, such as `GET`.",0,null],[12,"path","","The request path, such as `/about-us`.",0,null],[12,"version","","The request version, such as `HTTP/1.1`.",0,null],[12,"headers","","The request headers.",0,null],[3,"Response","","A parsed Response.",null,null],[12,"version","","The response version, such as `HTTP/1.1`.",1,null],[12,"code","","The response code, such as `200`.",1,null],[12,"reason","","The response reason-phrase, such as `OK`.",1,null],[12,"headers","","THe response headers.",1,null],[3,"Header","","Represents a parsed header.",null,null],[12,"name","","The name portion of a header.",2,null],[12,"value","","The value portion of a header.",2,null],[4,"Error","","An error in parsing.",null,null],[13,"HeaderName","","Invalid byte in header name.",3,null],[13,"HeaderValue","","INvalid byte in header value.",3,null],[13,"NewLine","","Invalid byte in new line.",3,null],[13,"Status","","Invalid byte in Response status.",3,null],[13,"Token","","Invalid byte where token is required.",3,null],[13,"TooManyHeaders","","Parsed more headers than provided buffer can contain.",3,null],[13,"Version","","Invalid byte in HTTP version.",3,null],[4,"Status","","The result of a successful parse pass.",null,null],[13,"Complete","","The completed result.",4,null],[13,"Partial","","A partial result.",4,null],[5,"parse_headers","","Parse a buffer of bytes as headers.",null,null],[5,"parse_chunk_size","","Parse a buffer of bytes as a chunk size.",null,null],[6,"Result","","A Result of any parsing action.",null,null],[17,"EMPTY_HEADER","","An empty header, useful for constructing a `Header` array to pass in for\nparsing.",null,null],[11,"fmt","","",3,{"inputs":[{"name":"error"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",3,{"inputs":[{"name":"error"},{"name":"error"}],"output":{"name":"bool"}}],[11,"ne","","",3,{"inputs":[{"name":"error"},{"name":"error"}],"output":{"name":"bool"}}],[11,"clone","","",3,{"inputs":[{"name":"error"}],"output":{"name":"error"}}],[11,"eq","","",5,{"inputs":[{"name":"invalidchunksize"},{"name":"invalidchunksize"}],"output":{"name":"bool"}}],[11,"ne","","",5,{"inputs":[{"name":"invalidchunksize"},{"name":"invalidchunksize"}],"output":{"name":"bool"}}],[11,"fmt","","",5,{"inputs":[{"name":"invalidchunksize"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",4,{"inputs":[{"name":"status"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",4,{"inputs":[{"name":"status"},{"name":"status"}],"output":{"name":"bool"}}],[11,"ne","","",4,{"inputs":[{"name":"status"},{"name":"status"}],"output":{"name":"bool"}}],[11,"clone","","",4,{"inputs":[{"name":"status"}],"output":{"name":"status"}}],[11,"is_complete","","Convenience method to check if status is complete.",4,{"inputs":[{"name":"status"}],"output":{"name":"bool"}}],[11,"is_partial","","Convenience method to check if status is partial.",4,{"inputs":[{"name":"status"}],"output":{"name":"bool"}}],[11,"unwrap","","Convenience method to unwrap a Complete value. Panics if the status is\n`Partial`.",4,{"inputs":[{"name":"status"}],"output":{"name":"t"}}],[11,"new","","Creates a new Request, using a slice of headers you allocate.",0,null],[11,"parse","","Try to parse a buffer of bytes into the Request.",0,null],[11,"new","","Creates a new `Response` using a slice of `Header`s you have allocated.",1,null],[11,"parse","","Try to parse a buffer of bytes into this `Response`.",1,null],[11,"fmt","","",2,{"inputs":[{"name":"header"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",2,{"inputs":[{"name":"header"},{"name":"header"}],"output":{"name":"bool"}}],[11,"ne","","",2,{"inputs":[{"name":"header"},{"name":"header"}],"output":{"name":"bool"}}],[11,"clone","","",2,{"inputs":[{"name":"header"}],"output":{"name":"header"}}]],"paths":[[3,"Request"],[3,"Response"],[3,"Header"],[4,"Error"],[4,"Status"],[3,"InvalidChunkSize"]]};
initSearch(searchIndex);
