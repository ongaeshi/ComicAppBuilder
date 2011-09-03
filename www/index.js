//
// @brief
// @author ongaeshi
// @date   2011/09/03

// -- Basic Information --
// iPhone  : 320x480
// iPhone4 : 640x960
// iPad    : 768x1024

// Sample PhotoViewer for iPhone(320x480)
const PARAM = {
  prefix: 'sample_photo/photo',
  postfix: '.jpg',
  page_num: 6,
  is_reverse: false
};

// Sample ComicViewer for iPad(768x1024)
// const PARAM = {
//   prefix: 'sample_comic/',
//   postfix: '.png',
//   page_num: 4,
//   is_reverse: true
// };

function createPageData(no) {
  return {
      title: 'page' + no,
      html: '<img src="image/' + PARAM.prefix + no + PARAM.postfix + '">'
  };
}

var rootPanel;
Ext.setup({
  onReady: function() {
    var items = [];

    for (var i = 1; i <= PARAM.page_num; i++) {
      items.push(createPageData(i));
    }

    if (PARAM.is_reverse)
      items.reverse();

    rootPanel = new Ext.Carousel({
      fullscreen: true,
      items: items
    });

    if (PARAM.is_reverse)
      rootPanel.setActiveItem(PARAM.page_num - 1);
  }
});
