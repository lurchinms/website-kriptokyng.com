export const CUSTOM_CANVAS_BACKGROUND_COLOR = {
  id: "CUSTOM_CANVAS_BACKGROUND_COLOR",
  beforeDraw: (chart, args, options) => {
    const {
      ctx,
      chartArea: { top, left, width, height },
    } = chart;
    ctx.save();
    ctx.globalCompositeOperation = "destination-over";

    ctx.fillStyle = "white";
    ctx.fillRect(left, top, width, height);
    ctx.restore();
  },
};

