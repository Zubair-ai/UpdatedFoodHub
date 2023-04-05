import * as React from 'react';
import Stack from '@mui/joy/Stack';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import ModalDialog from '@mui/joy/ModalDialog';
import Typography from '@mui/joy/Typography';

export default function ModalOverlay({variant,yesLogout,setYesLogout,setVariant}) {
  return (
    <React.Fragment>
      <Stack direction="row" alignItems="center" spacing={1}>
      </Stack>
      <Modal open={!!variant} >
        <ModalDialog
          aria-labelledby="variant-modal-title"
          aria-describedby="variant-modal-description"
          variant={variant}
        >
          <ModalClose />
          <Typography id="variant-modal-title" component="h2" level="inherit">
            Modal Dialog
          </Typography>
          <Typography id="variant-modal-description" textColor="inherit">
            This is a `{variant}` modal dialog.
          </Typography>
          
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}