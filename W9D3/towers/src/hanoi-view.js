class HanoiView {
  constructor(game, DOMELement) {
    this.game = game;
    this.DOMELement = DOMELement;
    this.setupTowers();
  }

  setupTowers() {
    let list = $('<ul>')
      .appendTo(this.DOMELement);
    for (let i = 0; i < 3; i++) {
      $('<li>')
        .appendTo(list);
    }
  }

  render() {

  }
}

module.exports = HanoiView;