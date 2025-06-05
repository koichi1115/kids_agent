import express from "express";
import { getAgentReply } from "../services/agent";

const router = express.Router();

// 会話履歴（メモリ保持のダミー）
const chatHistory: { [userId: string]: { role: "user" | "agent"; text: string }[] } = {};

// 履歴取得API
router.get("/history/:userId", (req, res) => {
  const userId = req.params.userId;
  res.json(chatHistory[userId] || []);
});

// エージェント応答API
router.post("/talk", async (req, res) => {
  const { userId, text } = req.body;
  // 履歴にユーザー発言を追加
  if (!chatHistory[userId]) chatHistory[userId] = [];
  chatHistory[userId].push({ role: "user", text });

  // AIの応答を生成
  const reply = await getAgentReply(text, userId);

  // 履歴にエージェント発言を追加
  chatHistory[userId].push({ role: "agent", text: reply });

  res.json({ reply });
});

export default router;