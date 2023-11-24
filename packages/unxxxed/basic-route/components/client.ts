// トンネルエレメントの複製と配置を行う関数
function createTunnelEffect() {
  const tunnel = document.querySelector(".tunnel"); // 既存のトンネル要素を取得

  if (tunnel) {
    const tunnelCount = 3; // 作成するトンネルの数

    for (let i = 0; i < tunnelCount; i++) {
      const clone = tunnel.cloneNode(true); // トンネル要素を複製
      if (clone instanceof HTMLElement) {
        // HTMLElementであることを確認
        clone.style.zIndex = i.toString(); // z-indexを設定（文字列である必要がある）
        clone.style.transform = `translateZ(${-i + 2 * 100}px)`; // 奥行き位置を設定

        const panels = clone.querySelectorAll(".panel");
        panels.forEach((panel, index) => {
          (panel as HTMLElement).style.transform = `translateZ(${
            -100 - index * 100
          }px)`; // パネルの奥行き位置を設定
        });

        const tunnels = document.querySelector(".tunnels");
        if (tunnels) {
          tunnels.appendChild(clone); // 複製した要素をbodyに追加
        } else {
          throw new Error("tunnels section is null");
        }
      } else {
        throw new Error("cloned tunnel compo is not HTMLElement");
      }
    }
  } else {
    throw new Error("tunnel class element is none | undefined");
  }
  console.log("tunnels are integrated into section");
}

// スクロールイベントに応じてz-indexを更新する関数
function updateTunnelPosition() {
  console.log("updatable tunnels position");
  const tunnels = document.querySelectorAll(".tunnel");
  if (tunnels) {
    const scrollDepth = window.pageYOffset; // スクロール位置を取得

    tunnels.forEach((tunnel, index) => {
      if (tunnel instanceof HTMLElement) {
        // Z方向にスクロールする効果を追加
        const zPosition = -50 - scrollDepth * 0.5 - index * 100;
        tunnel.style.transform = `translateZ(${zPosition}px)`;
      } else {
        throw new Error("tunnel is not HTMLElement");
      }
    });
  } else {
    throw new Error("tunnels is null");
  }
}

// スクロールイベントをリッスン
export { createTunnelEffect, updateTunnelPosition };
