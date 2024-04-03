var _branding = function() {
  var articleID = Bridge.Slides.getArticleID();
  var $pageContainer = $(`article#${articleID}`);

  function _initBranding() {
    var logo = Bridge.Context.get('agent.rea_image_large', null);
    var colour = Bridge.Context.get('agent.primary_colour', null);
    var agentCode = Bridge.Context.get('agent.code', null); 

    console.log("Agent Code is "+agentCode); 
    $pageContainer.find('img.branding-logo').attr('alt', agentCode);

    if (logo && colour) {
      $pageContainer.find('img.branding-logo').attr('src', logo); 
      $pageContainer.find('div.branding').css('background-color', colour); 
    } else {
      $pageContainer.find('div.branding').hide();
    }
  }

  _initBranding();
};
