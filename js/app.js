//caching elements
const newsList = $("#output");
const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=d1642d3b4bed4f2aab806cc68e637563";
var retrieveContent = (data) => {
    var stringObj = JSON.stringify(data);
    var obj = JSON.parse(stringObj);
    for(var i = 0; i < obj.totalResults; i++) {
        console.log(obj.articles[i]);
        newsList.prepend("<br/>");
        newsList.prepend("</div>");
        newsList.prepend("</li><p>Source: " + obj.articles[i].source.name + "</p>");
        newsList.prepend("<p>" + obj.articles[i].publishedAt + "</p>");
        newsList.prepend("<img class='news-image' src='" + obj.articles[i].urlToImage + "'/>");
        if(obj.articles[i].description !== null) {
        newsList.prepend("<h4 class='description'>" + obj.articles[i].description + "</h4>");
        }
        newsList.prepend("<li class='news-item'><h3 class='article-title'>" + obj.articles[i].title + "</h3>");
        newsList.prepend("<div class='list-item'>");
    }
}
$.ajax({
    url: url,
    type: "GET", 
    success: retrieveContent
})