import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  List,
  ListItem,
  ListItemText,
  Checkbox,
  Grid,
  Typography,
} from "@material-ui/core";
import React, { Component } from "react";

const renderSkillItem = (skillName) => {
  return (
      <ListItem>
        <Checkbox color="primary"></Checkbox>
        <ListItemText>{skillName}</ListItemText>
      </ListItem>
  );
};

const renderGroupSkill = (groupName, skillList) => {
    return (
        <Grid item xs={12} md={6}>
            <Typography variant='h6'>{groupName}</Typography>
            <List>
                {skillList.map(item => {
                    return renderSkillItem(item)
                })}
            </List>
        </Grid>
    )
}

export default function DialogSkill({ isOpen, closeDialog }) {
  const renderSkills = (job_title) => {
    return (
      <>
        <List>
          {["Data analysis", "Statistics"].map((item) => {
              return renderSkillItem(item)
          })}
        </List>
      </>
    );
  };

  const renderActionButtons = () => {
    return (
      <>
        <Button onClick={closeDialog}>Cancel</Button>
        <Button color="primary">Update</Button>
      </>
    );
  };

  return (
    <>
      <Dialog
        maxWidth="sm"
        open={isOpen}
        aria-labelledby="simple-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>Add existed skills</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add your existed skills to provide the best career path for you.
          </DialogContentText>
          <Grid container spacing={2}>
              {renderGroupSkill('Technical skill', ['Data analysis', 'statistics'])}
          </Grid>
        </DialogContent>
        <DialogActions>{renderActionButtons()}</DialogActions>
      </Dialog>
    </>
  );
}
