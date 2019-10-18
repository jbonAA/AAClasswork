class FollowToggle{
  constructor(el) {
    this.$el = el;
    this.id = el[0].dataset.userId;
    this.follow_state = el[0].dataset.initialFollowState;
    // this.handleClick();
    console.log(this.handleClick());
    this.render();
  }

  render () {
    if (this.follow_state){
      this.$el.text('Follow!');
    }else{
      this.$el.text('Unfollow, boooring! =(');
    }
    
  }

  handleClick() {
    if (this.follow_state === "true") {
      this.follow_state = false;
      return $.ajax({
        method: "DELETE",
        url: `/users/${this.id}/follow`,
        type: 'JSON'
      });
  

    } else {
      this.follow_state = "true";
      return $.ajax({
        method: "POST",
        url: `/users/${this.id}/follow`,
        type: 'JSON'
      });
    }
    
  }

}

module.exports = FollowToggle;