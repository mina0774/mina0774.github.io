var Body = {
  setColor: function(color) {
    document.querySelector('body').style.color = color;
  },
  setBackgroundColor: function(color) {
    document.querySelector('body').style.backgroundColor = color;
  }
}
var Links = {
  setColor: function(color) {
    var alist = document.querySelectorAll('a');
    for (i = 0; i < alist.length; i++) {
      alist[i].style.color = color;
    }
  }
}

function darkModeHandler(self) {
  var target = document.querySelector('body');
  if (self.value === 'dark mode') {
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value = 'light mode';
    Links.setColor('powderblue');
  } else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = 'dark mode'
    Links.setColor('black');
  }
}
