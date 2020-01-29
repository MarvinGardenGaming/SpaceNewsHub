  // Breaking News RSS Feed
$.ajax({  
    type: 'GET',  
    url: "https://www.spaceforce.mil/DesktopModules/ArticleCS/RSS.ashx?ContentType=1&Site=1060&max=100",
    dataType: 'xml',
    success: function(data) {    
      $(data).find("item").each(function () { // or "item" or whatever suits your feed
        var el = $(this);
        var title = el.find("title").text();
        var link = el.find("link").text();
        var pubDate = el.find("pubDate").text();
        var author = el.find("creator").text();
        var enclosure = el.find("enclosure");

        // If not last item, add div break
        document.getElementById('USSFNewsFeed').innerHTML += '<div class="postwrapper"> <div class="divwrapper">' + '<a class="divcaption" style= "display:inherit" href=' + link + '>'
        + title + '</a>' +  '<img class="feedImages" src =' + enclosure.attr('url') + '><div class="datediv"> Date Published: ' + pubDate + '</div>' +  '<div class="authoer"> Author: ' + author + '</div>' + '<div class="divbreak"></div></div>';
      });
    }  
});

// SpaceX subreddit ajax request
var redditurl = 'https://www.reddit.com/r/SpaceForce/.json?count=20';
$.ajax({  
  type: 'GET',  
  url: redditurl,
  dataType: 'json',
  success: function(data) {    
    document.getElementById('redditfeed').innerHTML += '<div class="redditcaption">' + 'More from the r/spacex subreddit' + '</div>' + '<div class="redditdivbreak"></div></div>';
    for (var i = 0; i < data.data.children.length; i++){
      var lastItem = false;
      if(i == data.data.children.length -1){
        //Last item
        lastItem = true;
      }
      // If post isnt stickied
      if (data.data.children[i].data.stickied != true) {
        if(lastItem){
          document.getElementById('redditfeed').innerHTML += '<div class="redditpostwrapper"> <div class="redditdivwrapper">' + '<a class="redditdivcaption" style= "display:inherit" href=' + data.data.children[i].data.url + '>'
          + data.data.children[i].data.title + '</a>' +  '<img src =' + data.data.children[i].data.thumbnail + ' onError="ImageError(this);">' + '</div>' + '<div class="redditauthor"> Author: ' + data.data.children[i].data.author 
          + '</div>' +'</div>';
        } else {
          document.getElementById('redditfeed').innerHTML += '<div class="redditpostwrapper"> <div class="redditdivwrapper">' + '<a class="redditdivcaption" style= "display:inherit" href=' + data.data.children[i].data.url + '>'
          + data.data.children[i].data.title + '</a>' +  '<img src =' + data.data.children[i].data.thumbnail + ' onError="ImageError(this);">' + '</div>' + '<div class="redditauthor"> Author: ' + data.data.children[i].data.author 
          + '</div>' +'</div>' + '<div class="redditdivbreak"></div>';
        }
      }
    }
  }  
});

// If couldnt load image call this function to set display to none
function ImageError(image)
{
    image.style.display = "none";
}