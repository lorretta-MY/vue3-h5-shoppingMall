"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      pictures: [
        {
          id: "1",
          url: "https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/uploads/goods_preview_1.jpg"
        },
        {
          id: "2",
          url: "https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/uploads/goods_preview_2.jpg"
        },
        {
          id: "3",
          url: "https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/uploads/goods_preview_3.jpg"
        },
        {
          id: "4",
          url: "https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/uploads/goods_preview_4.jpg"
        },
        {
          id: "5",
          url: "https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/uploads/goods_preview_5.jpg"
        }
      ]
    };
  },
  onLoad() {
  },
  methods: {
    previewImg(url) {
      console.log(url);
      common_vendor.index.previewImage({
        urls: this.pictures.map((v) => v.url),
        current: url
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.pictures, (pic, k0, i0) => {
      return {
        a: pic.url,
        b: common_vendor.o(($event) => $options.previewImg(pic.url), pic.id),
        c: pic.id
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
