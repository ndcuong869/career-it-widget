import { Card, CardHeader, Typography } from "@material-ui/core";
import { render } from "@testing-library/react";
import React, { Component } from "react";

function renderTitle() {
    return(
        <Typography variant='h5' style={{color: '#1abc9c'}}>
            You register successfully.
        </Typography>
    )
}

export default function RegisterSuccessPage() {
  return (
    <div className="container-form">
      <Card>
        <CardHeader
          title={renderTitle()}
          subheader="Close this window and enjoy the IT career bot now."
        />
      </Card>
    </div>
  );
}
