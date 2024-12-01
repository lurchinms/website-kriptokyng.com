export const customFillGradient = (context, colors, angle) => {
  const originalAngle = angle;
  const ctx = context.chart.ctx;
  const height = ctx.canvas.clientHeight;
  const width = ctx.canvas.clientWidth;

  const cy = height / 2;
  const cx = width / 2;

  const cssAng = originalAngle;
  const canAngle = cssAng - 90;
  const ang = (canAngle - 90) * (Math.PI / 180);
  const hypt = cy / Math.cos(ang);
  const fromTopRight = cx - Math.sqrt(hypt * hypt - cy * cy);
  const diag = Math.sin(ang) * fromTopRight;
  const len = hypt + diag;

  const topX = cx + Math.cos(-Math.PI / 2 + ang) * len;
  const topY = cy + Math.sin(-Math.PI / 2 + ang) * len;
  const botX = cx + Math.cos(Math.PI / 2 + ang) * len;
  const botY = cy + Math.sin(Math.PI / 2 + ang) * len;

  const gradient = ctx.createLinearGradient(topX, topY, botX, botY);

  for (let i of Object.keys(colors)) {
    gradient.addColorStop(colors[i], i);
  }

  return gradient;
};

