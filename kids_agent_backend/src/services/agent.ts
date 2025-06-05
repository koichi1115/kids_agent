// 擬似的なAI応答生成ロジック
export async function getAgentReply(text: string, userId: string): Promise<string> {
  if (text.includes("こんにちは")) return "やっほー！こんにちは！";
  if (text.includes("お名前")) return "ぼくの名前はきっずエージェントだよ！";
  return "ごめんね、まだ勉強中だよ！";
}