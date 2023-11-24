type MemberSales = {
  leftSales: number; // 左側のダウンラインの売上
  rightSales: number; // 右側のダウンラインの売上
};

interface Member {
  id: number;
  sales: MemberSales;
  leftChild?: Member; // 左側のダウンラインのメンバー
  rightChild?: Member; // 右側のダウンラインのメンバー
}

function calculateCommission(member: Member, commissionRate: number): number {
  // 基本ケース: ダウンラインがいない場合は0を返す
  if (!member.leftChild && !member.rightChild) {
    return 0;
  }

  const leftSales = member.leftChild ? calculateSales(member.leftChild) : 0;
  const rightSales = member.rightChild ? calculateSales(member.rightChild) : 0;

  // 左右の売上のうち小さい方を選択
  const lowerSales = Math.min(leftSales, rightSales);

  // 選択した売上に基づいて報酬を計算（例: 売上の10%）
  const commission = lowerSales * commissionRate;

  // このメンバーの報酬を返す
  return commission;
}

function calculateSales(member: Member): number {
  // メンバー自身の売上に、左右のダウンラインからの売上を加える
  const leftSales = member.leftChild ? calculateSales(member.leftChild) : 0;
  const rightSales = member.rightChild ? calculateSales(member.rightChild) : 0;
  return (
    member.sales.leftSales + member.sales.rightSales + leftSales + rightSales
  );
}

// `LLR` メンバーを定義します。
const LLR: Member = {
  id: 1112,
  sales: {
    leftSales: 50,
    rightSales: 0,
  },
  leftChild: undefined,
  rightChild: undefined,
};

// `LLL` メンバーを定義します。
const LLL: Member = {
  id: 1111,
  sales: {
    leftSales: 100,
    rightSales: 0,
  },
  leftChild: undefined,
  rightChild: undefined,
};

// `LL` メンバーを定義します。
const LL: Member = {
  id: 111,
  sales: {
    leftSales: calculateSales(LLL),
    rightSales: calculateSales(LLR),
  },
  leftChild: LLL,
  rightChild: LLR,
};

console.debug(calculateCommission(LL, 0.1));
