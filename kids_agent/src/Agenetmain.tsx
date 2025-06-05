import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  IconButton,
  Avatar,
  Fade,
} from "@mui/material";
import MicIcon from "@mui/icons-material/Mic";
import { FaRobot } from "react-icons/fa";
import { speak, startRecognition } from "../utils/speech";

// Google Fontsのimportをindex.htmlで読み込んでおくと◎

const agentAvatar =
  "https://undraw.co/api/illustrations/9d6a1e7b-0f4a-4c8e-9b3f-60b2c1f2d6c5"; // サンプルイラスト

const bgColors = {
  user: "#FFF6A5",
  agent: "#B5FFFC",
};

export default function AgentMainRich() {
  const [history, setHistory] = useState<
    { role: "user" | "agent"; text: string }[]
  >([]);
  const [isListening, setIsListening] = useState(false);

  const handleMic = () => {
    setIsListening(true);
    startRecognition((text) => {
      setHistory((prev) => [...prev, { role: "user", text }]);
      // ダミー応答（実際はAI APIで取得）
      const reply = "こんにちは！なにをお話しする？";
      setTimeout(() => {
        setHistory((prev) => [...prev, { role: "agent", text: reply }]);
        speak(reply);
        setIsListening(false);
      }, 700);
    });
  };

  return (
    <Box
      minHeight="100vh"
      bgcolor="linear-gradient(135deg, #FFDEE9 0%, #B5FFFC 100%)"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="flex-start"
      py={4}
      sx={{
        fontFamily: '"M PLUS Rounded 1c", "Kiwi Maru", sans-serif',
      }}
    >
      {/* ヘッダー */}
      <Box display="flex" alignItems="center" mb={2}>
        <Avatar
          src={agentAvatar}
          sx={{
            width: 64,
            height: 64,
            bgcolor: "#FFB347",
            boxShadow: "0 0 12px #FFB34777",
            mr: 2,
          }}
        >
          <FaRobot size={38} color="#fff" />
        </Avatar>
        <Typography variant="h4" color="#FF6F91" fontWeight="bold">
          きっずエージェント
        </Typography>
      </Box>
      <Typography variant="h6" color="#333" mb={2}>
        なんでもきいてね！
      </Typography>
      {/* 会話エリア */}
      <Paper
        elevation={8}
        sx={{
          width: "100%",
          maxWidth: 400,
          minHeight: 320,
          p: 3,
          mb: 3,
          borderRadius: 5,
          background: "linear-gradient(120deg, #FFDEE9 30%, #B5FFFC 100%)",
          boxShadow: "0 8px 24px #B5FFFC55",
        }}
      >
        {history.length === 0 && (
          <Typography color="textSecondary" textAlign="center">
            ここにおしゃべりが表示されます
          </Typography>
        )}
        {history.map((msg, idx) => (
          <Fade in timeout={500 + idx * 150} key={idx}>
            <Box
              display="flex"
              flexDirection={msg.role === "user" ? "row-reverse" : "row"}
              alignItems="flex-end"
              mb={1.5}
            >
              {msg.role === "agent" && (
                <Avatar
                  src={agentAvatar}
                  sx={{
                    width: 40,
                    height: 40,
                    bgcolor: "#FFB347",
                    mr: 1,
                  }}
                >
                  <FaRobot color="#fff" size={22} />
                </Avatar>
              )}
              <Box
                px={2}
                py={1}
                borderRadius={3}
                bgcolor={bgColors[msg.role]}
                fontWeight="bold"
                fontSize={18}
                color={msg.role === "user" ? "#FFB347" : "#00BCD4"}
                boxShadow="0 2px 8px #0001"
                border={
                  msg.role === "user"
                    ? "2px solid #FFB347"
                    : "2px solid #00BCD4"
                }
                mx={1}
              >
                {msg.text}
              </Box>
            </Box>
          </Fade>
        ))}
      </Paper>
      {/* マイクボタン */}
      <Box textAlign="center">
        <IconButton
          color="primary"
          size="large"
          onClick={handleMic}
          disabled={isListening}
          sx={{
            bgcolor: isListening ? "#FFB347" : "#76D7EA",
            color: "#fff",
            width: 80,
            height: 80,
            borderRadius: "50%",
            fontSize: 46,
            boxShadow: isListening
              ? "0 0 0 8px #FFB34744, 0 2px 10px #ffb34755"
              : "0 0 0 4px #76D7EA33",
            transition: "all 0.18s",
            ":hover": {
              bgcolor: "#FF6F91",
            },
          }}
        >
          <MicIcon fontSize="inherit" />
        </IconButton>
        <Typography color="#FF6F91" mt={1} fontWeight="bold">
          {isListening ? "きいています…" : "マイクをおしてお話ししよう！"}
        </Typography>
      </Box>
    </Box>
  );
}
