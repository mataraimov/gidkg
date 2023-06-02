import React from 'react'
import { Avatar, Typography, Box, IconButton, Paper } from '@mui/material';
import { Comment as CommentIcon } from '@mui/icons-material';

const Comment = ({item}) => {
  console.log(item);
  return (
    <Paper elevation={1} sx={{ p: 2, mb: 2, maxWidth: "400px" }}>
      <Box display="flex" alignItems="center" mb={1}>
        <Avatar alt={item.author} src="/path/to/avatar.jpg" sx={{ mr: 1 }} />
        <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>{item.author}</Typography>
        <Box flexGrow={1} />
        <Typography variant="caption" color="textSecondary">{item.date}</Typography>
      </Box>
      <Typography variant="body1">{item.content}</Typography>
      <Box display="flex" alignItems="center" mt={1}>
        <IconButton size="small" color="primary">
          <CommentIcon fontSize="small" />
        </IconButton>
        <Typography variant="caption" color="textSecondary">Reply</Typography>
      </Box>
    </Paper>
  )
}

export default Comment