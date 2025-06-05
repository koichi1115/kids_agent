import React, { useState } from "react";
import { Button, TextField, Box, Typography } from "@mui/material";

export default function Onboarding() {
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [grade, setGrade] = useState("");

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={8}>
      <Typography variant="h5" gutterBottom>
        お子さまの情報を入力してください
      </Typography>
      <Box
        component="form"
        width={320}
        display="flex"
        flexDirection="column"
        gap={2}
      >
        <TextField
          label="お名前"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <TextField
          label="生年月日"
          type="date"
          InputLabelProps={{ shrink: true }}
          value={birth}
          onChange={(e) => setBirth(e.target.value)}
          required
        />
        <TextField
          label="学年"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
          required
        />
        <Button variant="contained" color="primary" size="large" type="submit">
          次へ
        </Button>
      </Box>
    </Box>
  );
}
