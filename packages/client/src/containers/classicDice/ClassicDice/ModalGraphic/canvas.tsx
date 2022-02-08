/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, {
  memo,
  useCallback,
  useEffect,
  useRef,
} from 'react';

type CanvasProps = {
  datas1: number[][];
  datas2: number[][];
};

const Canvas = memo(({
  datas1,
  datas2,
}: CanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasCtxRef = React.useRef<CanvasRenderingContext2D | null>(null);

  const draw = useCallback((ctx: CanvasRenderingContext2D | null) => {
    ctx!.clearRect(0, 0, 300, 190);
    ctx!.strokeStyle = 'rgb(235, 233, 241)';
    ctx!.setLineDash([]);
    let y = 10;
    while (y < 190) {
      ctx!.beginPath();
      ctx!.lineWidth = 0.1;
      ctx!.moveTo(0, y);
      ctx!.lineTo(300, y);
      ctx!.stroke();
      y += 32;
    }

    ctx!.beginPath();
    ctx!.strokeStyle = 'rgb(255, 255, 255)';
    ctx!.lineWidth = 1;
    ctx!.setLineDash([5, 3]);
    const datas1Len = datas1.length;
    ctx!.moveTo(datas1[0][0], 190 - datas1[0][1] * 4);
    for (let i = 1; i < datas1Len; i++) {
      ctx!.lineTo(datas1[i][0], 190 - datas1[i][1] * 4);
    }
    ctx!.stroke();

    ctx!.beginPath();
    ctx!.strokeStyle = 'rgb(19, 142, 255)';
    ctx!.lineWidth = 1;
    ctx!.setLineDash([]);
    const datas2Len = datas2.length;
    ctx!.moveTo(datas2[0][0], 190 - datas2[0][1] * 4);
    for (let i = 1; i < datas2Len; i++) {
      ctx!.lineTo(datas2[i][0], 190 - datas2[i][1] * 4);
    }
    ctx!.stroke();
  }, [datas1, datas2]);

  useEffect(() => {
    if (canvasRef.current) {
      canvasCtxRef.current = canvasRef.current.getContext('2d');
      const context = canvasCtxRef.current;
      draw(context);
    }
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      width="300"
      height="190"
    />
  );
});

export { Canvas };
