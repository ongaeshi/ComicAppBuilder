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
  prefix: 'sample_photo/photo', // 連番画像の置き場所 (www/image/test/1.jpg -> 'test/' )
  suffix: '.jpg',               // '.jpg' or '.png'
  page_num: 6,                  // 画像の枚数 [1.jpg, 2.jpg, ...6.jpg] だったら 6
  is_reverse: false             // 右開きだったらtrue, 左開きだったらfalse
};

// Sample ComicViewer for iPad(768x1024)
// const PARAM = {
//   prefix: 'sample_comic/',
//   suffix: '.png',
//   page_num: 4,
//   is_reverse: true
// };

function createPageData(no) {
  return {
      title: 'page' + no,
      html: '<img src="image/' + PARAM.prefix + no + PARAM.suffix + '">'
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
