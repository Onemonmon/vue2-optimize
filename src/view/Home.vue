<script>
import html2canvas from "html2canvas";

export default {
  methods: {
    async saveImage() {
      const targetDom = document.getElementById("bar");
      if (targetDom) {
        // const html2canvas = (await import("html2canvas")).default;
        html2canvas(targetDom, {
          width: targetDom.offsetWidth, // 画布的宽
          height: targetDom.offsetHeight, // 画布的高
          scale: 1, // 处理模糊问题
          useCORS: true, // 开启跨域，这个是必须的
          // scrollX:0,//图片x轴的位置
          // scrollY:0,//图片Y轴的位置
          // x:0,//x轴的偏移量
          // Y:0//Y轴的便宜量
        }).then((canvas) => {
          const dataURL = canvas.toDataURL("image/png");
          const a = document.createElement("a");
          a.href = dataURL;
          a.download = "";
          // 触发a链接点击事件，浏览器开始下载文件
          a.click();
        });
      }
    },
  },
};
</script>

<template>
  <div>
    <div id="bar">Home</div>
    <el-button @click="saveImage">saveImage</el-button>
  </div>
</template>
