var github = (function(){
<<<<<<< HEAD
=======
  function escapeHtml(str) {
    return $('<div/>').text(str).html();
  }
>>>>>>> 3570d2420be323350062afc7b2efb104fb36bcf1
  function render(target, repos){
    var i = 0, fragment = '', t = $(target)[0];

    for(i = 0; i < repos.length; i++) {
<<<<<<< HEAD
      fragment += '<li><a href="'+repos[i].url+'">'+repos[i].name+'</a><p>'+repos[i].description+'</p></li>';
=======
      fragment += '<li><a href="'+repos[i].html_url+'">'+repos[i].name+'</a><p>'+escapeHtml(repos[i].description||'')+'</p></li>';
>>>>>>> 3570d2420be323350062afc7b2efb104fb36bcf1
    }
    t.innerHTML = fragment;
  }
  return {
    showRepos: function(options){
      $.ajax({
<<<<<<< HEAD
          url: "http://github.com/api/v2/json/repos/show/"+options.user+"?callback=?"
        , type: 'jsonp'
        , error: function (err) { $(options.target + ' li.loading').addClass('error').text("Error loading feed"); }
        , success: function(data) {
          var repos = [];
          if (!data || !data.repositories) { return; }
          for (var i = 0; i < data.repositories.length; i++) {
            if (options.skip_forks && data.repositories[i].fork) { continue; }
            repos.push(data.repositories[i]);
          }
          repos.sort(function(a, b) {
            var aDate = new Date(a.pushed_at).valueOf(),
                bDate = new Date(b.pushed_at).valueOf();

            if (aDate === bDate) { return 0; }
            return aDate > bDate ? -1 : 1;
          });

=======
          url: "https://api.github.com/users/"+options.user+"/repos?sort=pushed&callback=?"
        , dataType: 'jsonp'
        , error: function (err) { $(options.target + ' li.loading').addClass('error').text("Error loading feed"); }
        , success: function(data) {
          var repos = [];
          if (!data || !data.data) { return; }
          for (var i = 0; i < data.data.length; i++) {
            if (options.skip_forks && data.data[i].fork) { continue; }
            repos.push(data.data[i]);
          }
>>>>>>> 3570d2420be323350062afc7b2efb104fb36bcf1
          if (options.count) { repos.splice(options.count); }
          render(options.target, repos);
        }
      });
    }
  };
})();
