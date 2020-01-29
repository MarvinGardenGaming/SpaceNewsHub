// Image of the day RSS Feed
var IOTDurl = 'https://www.nasa.gov/rss/dyn/lg_image_of_the_day.rss';
$.ajax({  
  type: 'GET',  
  url: "https://api.rss2json.com/v1/api.json?rss_url=" + IOTDurl,
  dataType: 'jsonp',
  success: function(data) {    
    for (var i = 0; i < data.items.length; i++){
      var lastItem = false;
      if(i == data.items.length -1){
        //Last item
        lastItem = true;
      }
      if(lastItem){
        // If last item dont add div break
        document.getElementById('IOTDfeed').innerHTML += '<div class="postwrapper"> <div class="divwrapper">' + '<a class="divcaption" style= "display:inherit" href=' + data.items[i].guid + '>'
        + data.items[i].title + '</a>' + '<img class="IOTDImages" src =' + data.items[i].enclosure.link + '>' + '</div>' + '<div class="datediv"> Date Published: ' 
        + data.items[i].pubDate + '</div>' + '</div>';
      } else {
        // If not last item, add div break
        document.getElementById('IOTDfeed').innerHTML += '<div class="postwrapper"> <div class="divwrapper">' + '<a class="divcaption" style= "display:inherit" href=' + data.items[i].guid + '>'
        + data.items[i].title + '</a>' + '<img class="IOTDImages" src =' + data.items[i].enclosure.link + '>' + '</div>' + '<div class="datediv"> Date Published: ' 
        + data.items[i].pubDate + '</div>' + '<div class="divbreak"></div></div>';
      }
    }
  }  
});

// Breaking News RSS Feed
var breakingNewsUrl = 'https://www.nasa.gov/rss/dyn/breaking_news.rss';
$.ajax({  
  type: 'GET',  
  url: "https://api.rss2json.com/v1/api.json?rss_url=" + breakingNewsUrl,
  dataType: 'jsonp',
  success: function(data) {    
    for (var i = 0; i < data.items.length; i++){
      var lastItem = false;
      if(i == data.items.length -1){
        //Last item
        lastItem = true;
      }
      if(lastItem){
        // If last item dont add div break
        document.getElementById('breakingnewsfeed').innerHTML += '<div class="postwrapper"> <div class="divwrapper">' + '<a class="divcaption" style= "display:inherit" href=' + data.items[i].guid + '>'
        + data.items[i].title + '</a>' + '<img class="feedImages" src =' + data.items[i].enclosure.link + '>' + '</div>' + '<div class="datediv"> Date Published: ' 
        + data.items[i].pubDate + '</div>' + '</div>';
      } else {
        // If not last item, add div break
        document.getElementById('breakingnewsfeed').innerHTML += '<div class="postwrapper"> <div class="divwrapper">' + '<a class="divcaption" style= "display:inherit" href=' + data.items[i].guid + '>'
        + data.items[i].title + '</a>' + '<img class="feedImages" src =' + data.items[i].enclosure.link + '>' + '</div>' + '<div class="datediv"> Date Published: ' 
        + data.items[i].pubDate + '</div>' + '<div class="divbreak"></div></div>';
      }
    }
  }  
});

// Education News RSS Feed
var edNewsUrl = 'https://www.nasa.gov/rss/dyn/educationnews.rss';
$.ajax({  
  type: 'GET',  
  url: "https://api.rss2json.com/v1/api.json?rss_url=" + edNewsUrl,
  dataType: 'jsonp',
  success: function(data) {    
    for (var i = 0; i < data.items.length; i++){
      var lastItem = false;
      if(i == data.items.length -1){
        //Last item
        lastItem = true;
      }
      if(lastItem){
        // If last item dont add div break
        document.getElementById('EducationNewsfeed').innerHTML += '<div class="postwrapper"> <div class="divwrapper">' + '<a class="divcaption" style= "display:inherit" href=' + data.items[i].guid + '>'
        + data.items[i].title + '</a>' + '<img class="feedImages" src =' + data.items[i].enclosure.link + '>' + '</div>' + '<div class="datediv"> Date Published: ' 
        + data.items[i].pubDate + '</div>' + '</div>';
      } else {
        // If not last item, add div break
        document.getElementById('EducationNewsfeed').innerHTML += '<div class="postwrapper"> <div class="divwrapper">' + '<a class="divcaption" style= "display:inherit" href=' + data.items[i].guid + '>'
        + data.items[i].title + '</a>' + '<img class="feedImages" src =' + data.items[i].enclosure.link + '>' + '</div>' + '<div class="datediv"> Date Published: ' 
        + data.items[i].pubDate + '</div>' + '<div class="divbreak"></div></div>';
      }
    }
  }  
});

// Internation Space Station Reports RSS Feed
var ISSReportUrl = 'https://blogs.nasa.gov/stationreport/feed/';
$.ajax({  
  type: 'GET',  
  url: "https://api.rss2json.com/v1/api.json?rss_url=" + ISSReportUrl,
  dataType: 'jsonp',
  success: function(data) {    
    for (var i = 0; i < data.items.length; i++){
      var lastItem = false;
      if(i == data.items.length -1){
        //Last item
        lastItem = true;
      }
      if(lastItem){
        // If last item dont add div break
        document.getElementById('ISSReportfeed').innerHTML += '<div class="postwrapper"> <div class="divwrapper">' + '<a class="divcaption" style= "display:inherit" href=' + data.items[i].guid + '>'
        + data.items[i].title + '</a>' + '</div>' + '<div class="datediv"> Date Published: ' 
        + data.items[i].pubDate + '</div>' + '</div>';
      } else {
        // If not last item, add div break
        document.getElementById('ISSReportfeed').innerHTML += '<div class="postwrapper"> <div class="divwrapper">' + '<a class="divcaption" style= "display:inherit" href=' + data.items[i].guid + '>'
        + data.items[i].title + '</a>' + '</div>' + '<div class="datediv"> Date Published: ' 
        + data.items[i].pubDate + '</div>' + '<div class="divbreak"></div></div>';
      }
    }
  }
});


// On The Station RSS Feed
var OTSUrl = 'https://www.nasa.gov/rss/dyn/onthestation_rss.rss';
$.ajax({  
  type: 'GET',  
  url: "https://api.rss2json.com/v1/api.json?rss_url=" + OTSUrl,
  dataType: 'jsonp',
  success: function(data) {    
    for (var i = 0; i < data.items.length; i++){
      var lastItem = false;
      if(i == data.items.length -1){
        //Last item
        lastItem = true;
      }
      if(lastItem){
        // If last item dont add div break
        document.getElementById('OTSfeed').innerHTML += '<div class="postwrapper"> <div class="divwrapper">' + '<a class="divcaption" style= "display:inherit" href=' + data.items[i].guid + '>'
        + data.items[i].title + '</a>' + '<img class="feedImages" src =' + data.items[i].enclosure.link + '>' + '</div>' + '<div class="datediv"> Date Published: ' 
        + data.items[i].pubDate + '</div>' + '</div>';
      } else {
        // If not last item, add div break
        document.getElementById('OTSfeed').innerHTML += '<div class="postwrapper"> <div class="divwrapper">' + '<a class="divcaption" style= "display:inherit" href=' + data.items[i].guid + '>'
        + data.items[i].title + '</a>' + '<img class="feedImages" src =' + data.items[i].enclosure.link + '>' + '</div>' + '<div class="datediv"> Date Published: ' 
        + data.items[i].pubDate + '</div>' + '<div class="divbreak"></div></div>';
      }
    }
  }  
});

// Kepler Mission RSS Feed
var KeplerUrl = 'https://www.nasa.gov/rss/dyn/mission_pages/kepler/news/kepler-newsandfeatures-RSS.rss';
$.ajax({  
  type: 'GET',  
  url: "https://api.rss2json.com/v1/api.json?rss_url=" + KeplerUrl,
  dataType: 'jsonp',
  success: function(data) {    
    for (var i = 0; i < data.items.length; i++){
      var lastItem = false;
      if(i == data.items.length -1){
        //Last item
        lastItem = true;
      }
      if(lastItem){
        // If last item dont add div break
        document.getElementById('KeplerMissionfeed').innerHTML += '<div class="postwrapper"> <div class="divwrapper">' + '<a class="divcaption" style= "display:inherit" href=' + data.items[i].guid + '>'
        + data.items[i].title + '</a>' + '<img class="feedImages" src =' + data.items[i].enclosure.link + '>' + '</div>' + '<div class="datediv"> Date Published: ' 
        + data.items[i].pubDate + '</div>' + '</div>';
      } else {
        // If not last item, add div break
        document.getElementById('KeplerMissionfeed').innerHTML += '<div class="postwrapper"> <div class="divwrapper">' + '<a class="divcaption" style= "display:inherit" href=' + data.items[i].guid + '>'
        + data.items[i].title + '</a>' + '<img class="feedImages" src =' + data.items[i].enclosure.link + '>' + '</div>' + '<div class="datediv"> Date Published: ' 
        + data.items[i].pubDate + '</div>' + '<div class="divbreak"></div></div>';
      }
    }
  }  
});



// Chandra Mission RSS Feed
var ChandraUrl = 'https://www.nasa.gov/rss/dyn/chandra_images.rss';
$.ajax({  
  type: 'GET',  
  url: "https://api.rss2json.com/v1/api.json?rss_url=" + ChandraUrl,
  dataType: 'jsonp',
  success: function(data) {    
    for (var i = 0; i < data.items.length; i++){
      var lastItem = false;
      if(i == data.items.length -1){
        //Last item
        lastItem = true;
      }
      if(lastItem){
        // If last item dont add div break
        document.getElementById('ChandraMissionfeed').innerHTML += '<div class="postwrapper"> <div class="divwrapper">' + '<a class="divcaption" style= "display:inherit" href=' + data.items[i].guid + '>'
        + data.items[i].title + '</a>' + '<img class="feedImages" src =' + data.items[i].enclosure.link + '>' + '</div>' + '<div class="datediv"> Date Published: ' 
        + data.items[i].pubDate + '</div>' + '</div>';
      } else {
        // If not last item, add div break
        document.getElementById('ChandraMissionfeed').innerHTML += '<div class="postwrapper"> <div class="divwrapper">' + '<a class="divcaption" style= "display:inherit" href=' + data.items[i].guid + '>'
        + data.items[i].title + '</a>' + '<img class="feedImages" src =' + data.items[i].enclosure.link + '>' + '</div>' + '<div class="datediv"> Date Published: ' 
        + data.items[i].pubDate + '</div>' + '<div class="divbreak"></div></div>';
      }
    }
  }  
});

// NASA subreddit ajax request
var redditurl = 'https://www.reddit.com/r/nasa/top.rss?t=day';
$.ajax({  
  type: 'GET',  
  url: "https://api.rss2json.com/v1/api.json?rss_url=" + redditurl,
  dataType: 'jsonp',
  success: function(data) {    
    document.getElementById('redditfeed').innerHTML += '<div class="redditcaption">' + 'More from the r/NASA subreddit' + '</div>' + '<div class="redditdivbreak"></div></div>';
    for (var i = 0; i < data.items.length; i++){
      var lastItem = false;
      if(i == data.items.length -1){
        //Last item
        lastItem = true;
      }
      // If post has thumbnail
      if(data.items[i].thumbnail != ''){
        if(lastItem){
          // If last item dont add div break
          document.getElementById('redditfeed').innerHTML += '<div class="redditpostwrapper"> <div class="redditdivwrapper">' + '<a class="redditdivcaption" style= "display:inherit" href=' + data.items[i].link + '>'
          + data.items[i].title + '</a>' +  '<img src =' + data.items[i].thumbnail + '>' + '</div>' + '<div class="redditdatediv"> Date Published: ' 
          + data.items[i].pubDate + '</div>' + '<div class="redditauthor"> Author: ' + data.items[i].author + '</div>' +'</div>';
        } else {
          // If not last item, add div break
          document.getElementById('redditfeed').innerHTML += '<div class="redditpostwrapper"> <div class="redditdivwrapper">' + '<a class="redditdivcaption" style= "display:inherit" href=' + data.items[i].link + '>'
          + data.items[i].title + '</a>' +  '<img src =' + data.items[i].thumbnail + '>' + '</div>' + '<div class="redditdatediv"> Date Published: ' 
          + data.items[i].pubDate + '</div>' + '<div class="redditauthor"> Author: ' + data.items[i].author + '</div>' + '<div class="redditdivbreak"></div></div>';
        }
        
      // If post doesnt have thumbnail
      } else {
        if(lastItem){
          // If last item dont add dive break
          document.getElementById('redditfeed').innerHTML += '<div class="redditpostwrapper"> <div class="redditdivwrapper">' + '<a class="redditdivcaption" style= "display:inherit" href=' + data.items[i].link + '>'
          + data.items[i].title + '</a>' + '</div>' + '<div class="redditdatediv"> Date Published: ' 
          + data.items[i].pubDate + '</div>' + '<div class="redditauthor"> Author: ' + data.items[i].author + '</div>'  + '</div>';
        } else {
          // If not last item, add div break
          document.getElementById('redditfeed').innerHTML += '<div class="redditpostwrapper"> <div class="redditdivwrapper">' + '<a class="redditdivcaption" style= "display:inherit" href=' + data.items[i].link + '>'
          + data.items[i].title + '</a>' + '</div>' + '<div class="redditdatediv"> Date Published: ' 
          + data.items[i].pubDate + '</div>' + '<div class="redditauthor"> Author: ' + data.items[i].author + '</div>'  + '<div class="redditdivbreak"></div></div>';
        }
      }
    }
  }  
});


// Function for the feed tabs
function openPage(pageName, elmnt, color, fontcolor) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
    tablinks[i].style.color = color;
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;

  // Add font color
  elmnt.style.color = fontcolor
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();