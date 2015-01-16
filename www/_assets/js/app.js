//= require picturefill
//= require html5shiv
//= require dark-mode
//= require analytics
//= require typed

$(function(){
  $(".type-target-home").typed({
    strings: ["create your_new_project", "design --output 'beautiful websites'", "develop bespoke_function --input 'your_requirements'", "Designer & Developer - Available for Hire."],
    typeSpeed: 100,
    loop: true,
    backDelay: 1500
  });
});
$(function(){
  $(".type-target-about").typed({
    strings: ["begin life_story --version=SHORT"],
    typeSpeed: 100,
    backDelay: 1500
  });
});
$(function(){
  $(".type-target-projects").typed({
    strings: ["list projects --limit=recent_only"],
    typeSpeed: 100,
    backDelay: 1500
  });
});
$(function(){
  $(".type-target-blog").typed({
    strings: ["show all_blog_posts --order_by=year"],
    typeSpeed: 100,
    backDelay: 1500
  });
});
