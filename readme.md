#index.js.old
import http from "http";
import url from "url";

http
.createServer(function (request, response) {
const reqUrl = url.parse(request.url).pathname;
if (reqUrl == "/") {
response.write("Home page");
response.end();
} else if (reqUrl == "/about") {
response.write("About page");
response.end();
} else if (reqUrl == "/contacts") {
response.write("contacts page");
response.end();
} else {
response.write("page is not defined 404");
response.end();
}
})
.listen(4000, function () {
console.log("Server is running on port 4000");
});

#DB PASS
xsh9mn4mozFKpiOm

mongodb+srv://veselka:<xsh9mn4mozFKpiOm>@veselkadb.pugpjlt.mongodb.net/?retryWrites=true&w=majority
