import express from "express";

const router = express.Router();

// 簡易ユーザー登録API（本番運用時はDB保存・パスワードハッシュ化を推奨）
router.post("/register", (req, res) => {
  const { name, password, type } = req.body;
  // 仮のuserId
  const userId = "user_" + Math.random().toString(36).slice(2, 8);
  res.json({ userId, name, type });
});

// 簡易ログインAPI（本番運用時は認証を実装）
router.post("/login", (req, res) => {
  const { name, password } = req.body;
  // 仮の認証ロジック
  res.json({ userId: "user123", name, type: "parent" });
});

export default router;