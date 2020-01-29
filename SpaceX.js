// Breaking News RSS Feed
var breakingNewsUrl = 'https://www.spacex.com/news.xml';
$.ajax({  
  type: 'GET',  
  url: "https://api.rss2json.com/v1/api.json?rss_url=" + breakingNewsUrl,
  dataType: 'jsonp',
  success: function(data) {    
    for (var i = 0; i < data.items.length; i++){

        var descriptionArray = data.items[i].description.split("src=")
        descriptionArray = descriptionArray[1];
        descriptionArray = descriptionArray.split(" ");
        var descriptionImage = descriptionArray[0];
        
      var lastItem = false;
      if(i == data.items.length -1){
        //Last item
        lastItem = true;
      }
      if(lastItem){
        // If last item dont add div break
        document.getElementById('spaceXNewsFeed').innerHTML += '<div class="postwrapper"> <div class="divwrapper">' + '<a class="divcaption" style= "display:inherit" href=' + data.items[i].guid + '>'
        + data.items[i].title + '</a>' + '<img class="feedImages" src =' + descriptionImage + '> onError="ImageError(this);"' + '</div>' + '<div class="datediv"> Date Published: ' 
        + data.items[i].pubDate + '</div>' + '</div>';
      } else {
        // If not last item, add div break
        document.getElementById('spaceXNewsFeed').innerHTML += '<div class="postwrapper"> <div class="divwrapper">' + '<a class="divcaption" style= "display:inherit" href=' + data.items[i].guid + '>'
        + data.items[i].title + '</a>' + '<img class="feedImages" src =' + descriptionImage + ' onError="ImageError(this);">' + '</div>' + '<div class="datediv"> Date Published: ' 
        + data.items[i].pubDate + '</div>' + '<div class="divbreak"></div></div>';
      }
    }
  }  
});

// SpaceX subreddit ajax request
var redditurl = 'https://www.reddit.com/r/spacex/.json?count=20';
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