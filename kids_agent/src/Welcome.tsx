import React from "react";
import { Button, Typography, Box } from "@mui/material";

export default function Welcome() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={8}>
      <img
        src="/logo.png"
        alt="Kids Agent ロゴ"
        style={{ width: 120, marginBottom: 24 }}
      />
      <Typography variant="h4" gutterBottom>
        Kids Agentへようこそ
      </Typography>
      <Typography color="textSecondary" gutterBottom>
        お子さまの個性に寄り添うAIエージェントです
      </Typography>
      <Box mt={4}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          style={{ marginRight: 16 }}
        >
          はじめる
        </Button>
        <Button variant="outlined" color="primary" size="large">
          ログイン
        </Button>
      </Box>
    </Box>
  );
}
