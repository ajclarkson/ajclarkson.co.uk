//= require picturefill
//= require html5shiv
//= require dark-mode
//= require analytics
//= require typed

$(function(){
  $(".type-target-home").typed({
    strings: ["<strong>create</strong> your_new_project", "<strong>design</strong> --output '<em>beautiful websites</em>'", "<strong>develop</strong> bespoke_function --input '<em>your_requirements</em>'", "<strong>Designer</strong> & <strong>Developer</strong> --status='<em>Available for Hire</em>'"],
    typeSpeed: 100,
    loop: true,
    backDelay: 1500
  });
});
$(function(){
  $(".type-target-about").typed({
    strings: ["<strong>begin</strong> life_story --version '<em>SHORT</em>'"],
    typeSpeed: 100,
    backDelay: 1500
  });
});
$(function(){
  $(".type-target-projects").typed({
    strings: ["<strong>list</strong> projects --limit '<em>recent_only</em>'"],
    typeSpeed: 100,
    backDelay: 1500
  });
});
$(function(){
  $(".type-target-blog").typed({
    strings: ["<strong>show</strong> all_blog_posts --order_by '<em>year</em>'"],
    typeSpeed: 100,
    backDelay: 1500
  });
});
