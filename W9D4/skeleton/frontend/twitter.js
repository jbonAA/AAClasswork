const FollowToggle = require('./follow_toggle.js');

const setEventHandlers = function(){
  $('.follow-toggle').on('click', (e) => {
      e.preventDefault();
      let $el = $(e.target);
      console.log($el);
      let follow = new FollowToggle($el);
  });
};
$(setEventHandlers);