//
// @brief
// @author ongaeshi
// @date   2010/xx/xxxx

// sample photo
// const PARAM = {
//   prefix: 'photo',
//   page_num: 6,
//   is_reverse: false
// };

// sample comic(iPhone)
// const PARAM = {
//   prefix: 'db24_iphone/',
//   page_num: 186,
//   is_reverse: true
// };

// sample comic(iPad)
const PARAM = {
  prefix: 'db24_ipad/',
  page_num: 186,
  is_reverse: true
};

function createPageData(no) {
  return {
      title: 'page' + no,
      html: '<img src="image/' + PARAM.prefix + no + '.jpg">'
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
