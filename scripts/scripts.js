
// writing function to make writing this easier
function byId(id) {
  return document.getElementById(id);
}
function byClass(className) {
  return document.getElementsByClassName(className);

}


var icons = byClass('logo'),
    desc = byClass('icon-description'),
    container = byId('icons');


// solution via Timo, thank you
function toggleAllIcons() {
  for(var i = 0; i < icons.length; i++) {
    icons[i].classList.toggle('hidden');
  }
}

function toggleDescription(e) {
  var target = e.target,
      parent = target.parentNode,
      targetIndex = Array.prototype.indexOf.call(icons, parent),
      description = desc[targetIndex];
  if(!parent.classList.contains('logo')) {
    return;
  }

  toggleAllIcons();
  parent.classList.remove('hidden');
  description.classList.toggle('active');
  container.classList.toggle('clicked');
}

if (container) {
  container.addEventListener('click', toggleDescription);
}


//smooth scroll-behavior
var toggler = byId('nav-toggler'),
    contactBtn = byClass('contactBtn'),
    targetOffset, currentPosition,
    body = document.body,
    animateTime = 000;
var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    if(!!window.chrome && !isOpera )
    { animateTime = 900;
    }

// get the y offset
function getPageScroll() {
  var yScroll;
  if (window.pageYOffset) {
    yScroll = window.pageYOffset;
  } else if (document.documentElement && document.documentElement.scrollTop) {
    yScroll = document.documentElement.scrollTop;
  } else if (document.body) { //last resort
    yScroll = document.body.scrollTop;
  }
  return yScroll;
}
function smoothSroll(event) {
  if(!event) {
    event = window.event;
  }
  var target = event.target;
  targetOffset = byId(target.dataset.href.substr(1)).offsetTop;
  currentPosition = getPageScroll(); // uses yScroll's value

  // accounting for hidden-nav
  if (toggler.checked && window.innerWidth < 750){
    targetOffset = targetOffset ;
    currentPosition = currentPosition;
  } else if(toggler.checked){
    targetOffset = targetOffset  / 1.65;
    currentPosition = currentPosition /1.65;
  }
  body.classList.add('in-transition');
  body.style.WebitTransform = "translate(0, -" + (targetOffset - currentPosition) + "px)";
  body.style.MozTransform = "translate(0, -" + (targetOffset - currentPosition) + "px)";
  body.style.transform = "translate(0, -" + (targetOffset - currentPosition) + "px)";


  window.setTimeout(function () {
    body.classList.remove('in-transition');
    body.style.cssText = "";
    window.scrollTo(0, targetOffset);
  }, animateTime);

  event.preventDefault();
}
for (var i = 0; i < contactBtn.length; i++){
contactBtn[i].addEventListener('click', function(event) {
    smoothSroll(event);
  }, false);
}


// // via Timo
// // new function for looping over nodeLists
// // this is probably one of my favorite frontend js functions
function forEach(list, callback) {
  // reverse loop for fun, ease and speed
  for (var i = list.length; i--;) {
    callback(list[i], i, list);
  }
}


var parentProcess = byId('process');
var checks = byClass('process-checkbox');
var workButtons = byClass('process-checkoff');
var checkMark = '<i class="fa fa-check"></i>';

function toggleCheckbox(i) {
  checks[i].checked = true;
  workButtons[i].innerHTML = checkMark;
  workButtons[i].classList.remove('highlight');
}

function checkboxEvent(e) {
  var target = e.target;
  var parent = target.parentElement;
  var parentList = Array.prototype.slice.call(parentProcess.children); // fix: no more filter!
  var targetIndex = Array.prototype.indexOf.call(parentList, parent);
  toggleCheckbox(targetIndex);

}

if(parentProcess) {
  forEach(workButtons, function(button) {
    button.addEventListener('click', checkboxEvent);
  });
}

// Load more posts functionality ajax request
// capture the other variables i'll need
var list = byId('list');
var oldContent = list.innerHTML;
var newContent = '';
var actual_JSON;
var loadMore = byId('load-more');
var i = 0;
var b = actual_JSON.length;

function loadJSON(callback) {
  var jsonStuff = new XMLHttpRequest();
  jsonStuff.overrideMimeType("application/json");
  jsonStuff.open('GET', 'https://darianrosebrook.com/scripts/posts.json', true);
  jsonStuff.onreadystatechange = function () {
    if (jsonStuff.readyState == 4 && jsonStuff.status == "200") { // when it's done... do this
      callback(jsonStuff.responseText);
    }
  };
  jsonStuff.send(null);
}
function init() {
 loadJSON(function(response) {
  // Parse JSON string into object
    actual_JSON = JSON.parse(response);
    }
 });
}
function addTo(){
for ( i < actual_JSON.length; i++) {
  newContent += '<article class=\"list-item\">\n\t<div class=\"circle\">';
    newContent += '<img src=\"https://darianrosebrook.com/' + actual_JSON.posts[i].img + '\" alt=\"' + actual_JSON.posts[i].title + '\" /></div>\n';
  newContent += '<div class=\"artcont\">\n\t<h2><a href=\"' + actual_JSON.posts[i].url + '\">' + actual_JSON.posts[i].title + '</a></h2>\n\t';
  newContent += '<p><small>' + actual_JSON.posts[i].date + ' | <em class=\"' + actual_JSON.posts[i].class + '\">' + actual_JSON.posts[i].type + '</em></small>\n';
  newContent += '</p><p><small class=\"metaDesc\">&ldquo;' + actual_JSON.posts[i].content + '&rdquo;</small></p></div></article><br>'; }
  i += 10;
  console.log(i);
  list.innerHTML = oldContent + newContent;
}
loadMore.addEventListener('click', function (){
  init();
  addTo();
});
