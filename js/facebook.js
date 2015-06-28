document.write('<div id="fb-root"></div>');

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "http://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.3";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

var url=location.href;
document.write('<div style="clear:both"></div>
<div class="fb-like" data-href="'+url+'" data-width="The pixel width of the plugin100" data-layout="button_count" data-action="like" data-show-faces="true" data-share="true">
</div><div style="clear:both"></div>');