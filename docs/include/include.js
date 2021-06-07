function header(root){
  $.ajax({
    url: root + "include/header.html",
    cache: false,
    success: function(html){
      html = html.replace(/\{\$root\}/g, root); //footer.htmlの{$root}を置換
      $('body').prepend(html);
    }
  });
}

function footer(root){
  $.ajax({
    url: root + "include/footer.html",
    cache: false,
    success: function(html){
      html = html.replace(/\{\$root\}/g, root); //footer.htmlの{$root}を置換
      $('body').append(html);
    }
  });
}
